import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getResultAnswer } from "../../service/Answer";
import { getListQuestions } from "../../service/QuestionService";
import "./style.css";

function Result() {
  const param = useParams();
  const [answer, resultAnswer] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const dataAnswer = await getResultAnswer(param.id);
      // console.log(dataAnswer.answers);
      const dataQuestion = await getListQuestions(dataAnswer.topicId);
      // console.log(dataQuestion);
      let resultFinal = [];
      for (let i = 0; i < dataQuestion.length; i++) {
        resultFinal.push({
          ...dataQuestion[i],
          ...dataAnswer.answers.find(
            (item) => item.questionId == dataQuestion[i].id
          ),
        });
      }
      console.log(resultFinal);
      resultAnswer(resultFinal);
    };
    fetchApi();
  }, []);

  // console.log(param.id);
  const totalQues = answer.length;
  const correctAns = answer.filter(
    (item) => item.answer === item.correctAnswer
  ).length;
  const percentage = ((correctAns / totalQues) * 100).toFixed(2);

  return (
    <>
      <div className="result-box">
        <h1> Result </h1>{" "}
        <h2>
          {" "}
          Correct Answer: {correctAns}/{totalQues}{" "}
        </h2>{" "}
        <h2> Result percentage: {percentage} % </h2>{" "}
      </div>{" "}
      <div className="form-result-answers">
        {" "}
        {answer.map((item, index) => (
          <div className="form-item-answers" key={index}>
            <p className="question-title">
              Câu {index + 1}: {item.question}{" "}
              {item.correctAnswer === item.answer ? (
                <span style={{ color: "green" }}> True </span>
              ) : (
                <span style={{ color: "red" }}> False </span>
              )}{" "}
            </p>{" "}
            {item.answers.map((itemAns, indexAns) => {
              let checked = false;

              let className = "";
              console.log(item, itemAns);

              if (item.answer === indexAns) {
                checked = true;
                className = "result-item-selected";
              }
              if (item.correctAnswer === indexAns) {
                className += " result-item-correct";
              }

              return (
                <div className=" form_question-answer" key={indexAns}>
                  <input type="radio" checked={checked} readOnly />{" "}
                  <label className={className}> {itemAns} </label>{" "}
                </div>
              );
            })}{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </>
  );
}
export default Result;
