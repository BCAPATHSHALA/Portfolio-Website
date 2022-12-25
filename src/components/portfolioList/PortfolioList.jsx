import React from "react";
import "./portfolioList.css";

function PortfolioList({ title, active, setSelected, id }) {
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
