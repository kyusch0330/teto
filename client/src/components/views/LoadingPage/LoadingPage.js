import LoadingSpinner from "components/Common/LoadingSpinner";
import React from "react";
import { Container } from "./LoadingPage.styles";
function LoadingPage() {
  return (
    <Container>
      <LoadingSpinner size={32} />
    </Container>
  );
}

export default LoadingPage;
