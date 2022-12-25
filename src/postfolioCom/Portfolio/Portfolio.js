import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import { HTMLCSSJS, REACT, Websites } from "../../ownData";
import PortfolioList from "../PortfolioList/PortfolioList";

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
      <div className="heroDiv">
        <div className="herochild2">
          <h1 className="Title">Portfolio</h1>
          <nav className="navList">
            <ul>
              {list.map((item, index) => {
                console.log(item);
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
            {/* <ul>
              <li>React</li>
              <li>HTML CSS JS</li>
              <li>Websites</li>
            </ul> */}
          </nav>
        </div>
        <div className="herochild1">
          {data.map((d, index) => {
            return (
              <div className="cardDiv" key={index}>
                <div className="imgDiv">
                  <img className="portImage" src={d.img} alt={d.title} />
                </div>
                <div className="contentDiv">
                  <h4 className="projectName">{d.title}</h4>
                  <div className="btnDiv">
                    <button className="gitHob btn">
                      <a src={d.github}>Github</a>
                    </button>
                    <button src={d.demo} className="liveDemo btn">
                      <a src={d.github}>Live</a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className="cardDiv">
            <div className="imgDiv">
              <img
              className="portImage"
                src="https://cdn.dribbble.com/users/1615584/screenshots/16172281/media/77a375630766296fe8d6c32f8b4500aa.jpg?compress=1&resize=400x300"
                alt=""
              />
            </div>
            <div className="contentDiv">
              <h4 className="projectName">Project Name</h4>
              <div className="btnDiv">
                <button className="gitHob btn">Github</button>
                <button className="liveDemo btn">Live</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
