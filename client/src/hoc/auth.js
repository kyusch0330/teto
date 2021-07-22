import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authUser } from '../_actions/user_action';

//고차 컴포넌트로 사용자 상태에 따라 다른 페이지를 보여준다.
//컴포넌트를 인자로 받는다.
export default function (SpecificComponent, option ,adminRoute = null) {

  /*
    option 설정
    null : 아무나 출입 가능한 페이지
    true : 로그인한 유저만 출입 가능한 페이지
    false : 로그인한 유저는 출입 불가능한 페이지

    adminRoute : 어드민 유저만 들어갈 수 있는 페이지
  */

  function AuthenticationCheck(props) {
    //backend에 리퀘스트를 보내 유저의 현재 상태를 가져온다.
    
    const [userObj, setUserObj] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
      ///api/users/auth 에 쿠키(토큰 포함)를 보내 DB의 토큰과 일치하는지 확인
      //axios.get('/api/users/auth')~ -> redux를 사용하지 않는 다면
      dispatch(authUser())
        .then((response) => {
          setLoading(false);
          //사용자 상태별 페이지 분기처리
          
          if(!response.payload.isAuth) {
            //로그인 하지 않은 상태
            if(option)  {
              //로그인 유저만 출입 가능하므로, 로그인 페이지로
              props.history.push('/login');
            }
          } else {
            // 로그인 한 상태
            setUserObj(response.payload); // 로그인한 user 정보 저장
            if(adminRoute && !response.payload.isAdmin) {
              //어드민만 들어올 수 있는데, 어드민이 아니라면
              props.history.push('/');
            } else {
              if(option === false) {
                //로그인 유저는 들어올 수 없는 페이지라면 
                props.history.push('/');
              }
            }
          }
        });
    }, []);

    if(loading) return null;
    else return <SpecificComponent userObj={userObj}/> //Auth를 통해 전달받은 user 정보와 함께 반환(비로그인시 null)
  }

  return AuthenticationCheck
};