import styled from "styled-components";
import { PALLETE } from "constants/pallete";
export const ProfileContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 2px solid ${PALLETE.BORDER_BLUE};
  border-radius: 5px;
  padding: 80px;
  background: ${PALLETE.WHITE};
`;

export const UpdateButton = styled.button`
  border: 2px solid ${PALLETE.BORDER_BLUE};
  background: ${PALLETE.PRIMARY_BLUE_DARK};
  color: ${PALLETE.WHITE};
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const LogoutButton = styled.button`
  margin-top: 10px;
  border: 2px solid ${PALLETE.GRAY_LIGHT};
  background: ${PALLETE.RED};
  color: ${PALLETE.WHITE};
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;
