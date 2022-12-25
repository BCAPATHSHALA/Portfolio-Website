import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import "./PortfolioStyle.css";
import { HTMLCSSJS, REACT, Websites } from "../../data";
import PortfolioList from "./PortfolioList";

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
      <ul className="TopUl">
        {list.map((item, index) => {
          return (
            <PortfolioList
              title={item.title}
              setSelected={setSelected}
              id={item.id}
              key={index}
            />
          );
        })}
      </ul>

      <div className="bottomDiv">
        {data.map((items) => {
          return (
            <div className="divContent">
              <div className="imgDiv">
                <img src={items.img} alt={items.title} />
              </div>
              <h4>{items.title}</h4>
              <div className="btnDiv">
                <a target={`__blank`} href={items.github}>
                  <i class="fa-brands fa-github"></i>Github
                </a>
                <a target={`__blank`} href={items.demo}>
                  <i class="fa-solid fa-computer-mouse"></i>Demo
                </a>
              </div>
              <p className="tag">{items.tag}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
