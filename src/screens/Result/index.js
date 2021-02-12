import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Card from "../../components/Card";
import "./result.css";

const spanArr = [
  // "Tax Consultant",
  "Cardiaologist",
  "Advocate",
  "Cardiaologist",
  "Advocate",
  // "Hair Specialist",
];

const Result = (props) => {
  const history = useHistory();
  const { data } = props.location.state;
  useEffect(() => {
    if (data && data.length === 0) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <div className="result">
      <header className="result__header">
        <span
          className="result__header--back"
          onClick={() => history.push("/")}
        >
          <BiArrowBack /> Search
        </span>
        <div className="result__header--tags">
          {spanArr.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </header>
      <section className="result__section">
        {data && data.map((item, i) => <Card key={i} data={item} />)}
      </section>
    </div>
  );
};

export default Result;
