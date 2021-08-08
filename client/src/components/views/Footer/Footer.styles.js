import styled from "styled-components";
import { PALLETE } from "constants/pallete";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 20px;
  font-size: 0.8rem;
  background: ${PALLETE.BACKGROUND_BLUE};
  border-top: 1px solid ${PALLETE.GRAY};
  color: ${PALLETE.BLACK_LIGHT};
  a {
    color: ${PALLETE.BLACK_LIGHT};
  }
  a.githubLink {
    font-size: 1.2rem;
  }
`;
