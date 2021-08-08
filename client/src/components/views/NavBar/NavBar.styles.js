import styled from "styled-components";
import { WIDTH } from "constants/mediaWidth";
import { PALLETE } from "constants/pallete";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  background: ${PALLETE.PRIMARY_BLUE};
  color: ${PALLETE.BLACK};
  padding: 8px;
  z-index: 1;
  box-sizing: border-box;

  @media (max-width: ${WIDTH.MOBILE}px) {
    flex-direction: column;
    padding: 10 0px;
  }
`;

export const MainBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  a {
    text-decoration: none;
    color: ${PALLETE.WHITE};
    padding: 10px;
    margin-right: 5px;
    &:hover {
      color: ${PALLETE.GRAY_LIGHT};
    }
  }
  @media (max-width: ${WIDTH.MOBILE}px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    a {
      width: 100%;
      margin: 0;
      margin-top: 10px;
      text-align: center;
    }
    .logo {
      width: auto;
      margin: 0;
      svg {
        width: 80px;
        height: 30px;
      }
    }
  }
`;

export const MenuButton = styled.button`
  border: none;
  background: transparent;
  display: none;
  position: absolute;
  top: 6px;
  right: 6px;
  padding: 10px;
  @media (max-width: ${WIDTH.MOBILE}px) {
    display: block;
  }
`;

export const MenuBar = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${WIDTH.MOBILE}px) {
    display: ${(props) => (props.menuDisplay ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-top: 2px solid ${PALLETE.WHITE};
  }
`;

export const UserBar = styled.div`
  a {
    text-decoration: none;
    color: ${PALLETE.WHITE};
    padding: 8px;
    margin: 5px;
    text-align: center;
    &:hover {
      color: ${PALLETE.GRAY_LIGHT};
    }
  }
  a:nth-child(1) {
    border: 2px solid ${PALLETE.WHITE};
    border-radius: 2px;
    &:hover {
      border: 2px solid ${PALLETE.GRAY_LIGHT};
    }
  }
  margin-right: 20px;
  @media (max-width: ${WIDTH.MOBILE}px) {
    display: ${(props) => (props.menuDisplay ? "flex" : "none")};
    width: 100%;
    border-top: 1px solid ${PALLETE.WHITE};
    flex-direction: column;
    margin: 0;
    margin-top: 15px;
  }
`;
