import React from "react";
import "../Portfolio/Portfolio.css";
import "./PortfolioList.css";

function PortfolioList({ title, active, setSelected, id }) {
  console.log(id);
  return (
    <li
      className={active ? "PortfolioList active" : "PortfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}

export default PortfolioList;
