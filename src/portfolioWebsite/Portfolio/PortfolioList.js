import React from "react";
import "./Portfolio.css";

function PortfolioList({ title, setSelected, id }) {
  return (
    <li className={"PortfolioList "} onClick={() => setSelected(id)}>
      {title}
    </li>
  );
}

export default PortfolioList;
