import styled from "styled-components";
import { PALLETE } from "../../../constants/pallete";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  background: ${PALLETE.PRIMARY_BLUE};
  color: ${PALLETE.BLACK};
  padding: 15px;
  z-index: 1;
  box-sizing: border-box;
`;

export const MenuBar = styled.div`
  a {
    text-decoration: none;
    color: ${PALLETE.WHITE};
    padding: 10px;
    margin-right: 5px;
    &:hover {
      color: ${PALLETE.GRAY_LIGHT};
    }
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
`;
