import axios from "axios";
import React, { useEffect, useState } from "react";

function Survey({ match }) {
  const { params } = match;
  const [survey, setSurvey] = useState(null);

  useEffect(() => {
    const response = axios
      .post("/api/surveys/specific", { id: params.id })
      .then((res) => setSurvey(res.data.survey))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {params.id}
      {!survey ? null : (
        <div>
          <h3>{survey.title}</h3>
          <span>{new Date(Number(survey.createdAt)).toString()}</span>
          <p>{survey.description}</p>
          <br />
          <form>
            {survey.questions.map((question) => {
              return (
                <div>
                  <h5>{question.text}</h5>
                  <p>{question.description}</p>
                  {question.options.map((option) => {
                    console.log(option);
                    return (
                      <>
                        <input
                          type="radio"
                          name={question.id}
                          value={JSON.stringify({
                            forType: option.forType,
                            weight: option.weight,
                          })}
                          onChange={(e) => console.log(e.target.value)}
                        />
                        {option.text}
                      </>
                    );
                  })}
                </div>
              );
            })}
            <button>Test Done</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Survey;
