import React, { useEffect } from "react";
import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.css";
import { HTMLCSSJS, REACT, Websites } from "../../data";

function Portfolio() {
  const [selected, setSelected] = useState("react");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "react",
      title: "React",
    },
    {
      id: "htmlcssjs",
      title: "HTML CSS JS",
    },
    {
      id: "websites",
      title: "Websites",
    },
  ];

  useEffect(() => {
    console.log(selected);
    switch (selected) {
      case "react":
        setData(REACT);
        break;
      case "htmlcssjs":
        setData(HTMLCSSJS);
        break;
      default:
        setData(Websites);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item, index) => {
          return (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
              key={index}
            />
          );
        })}
      </ul>
      <div className="container">
        {data.map((d, index) => {
          return (
            <div className="cardDiv" key={index}>
              <div className="imgDiv">
                <img className="portImage" src={d.img} alt={d.title} />
              </div>
              <div className="contentDiv">
                <h4 className="projectName">{d.title}</h4>
                <div className="btnDiv">
                  <div className="gitHob btn">
                    <a href={d.github}>Github</a>
                  </div>
                  <div className="liveDemo btn">
                    <a href={d.demo}>Live</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
