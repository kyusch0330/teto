import React from "react";
import { Link } from "react-router-dom";

function Survey() {
  return (
    <div>
      Survey
      <Link to="/survey/create">Create Survey</Link>
    </div>
  );
}

export default Survey;
