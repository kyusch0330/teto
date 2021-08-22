import React from "react";
import loadingImg from "assets/loading.jpg";

function LoadingSpinner({ size }) {
  return (
    <img
      style={{ alignSelf: "center", margin: "auto" }}
      width={`${size}px`}
      src={loadingImg}
      alt="loading"
    />
  );
}

export default LoadingSpinner;
