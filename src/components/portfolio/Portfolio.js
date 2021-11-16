import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  summaryPortfolio,
  educationPortfolio,
  certificatePortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured Projects",
    },
    {
      id: "summary",
      title: "Skill Matrix",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "certificate",
      title: "Certifications",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "summary":
        setData(summaryPortfolio);
        break;
      case "education":
        setData(educationPortfolio);
        break;
      case "certificate":
        setData(certificatePortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          );
        })}
      </ul>
      <div className="container">
        {data.map((dt) => (
          <div className="item">
            <a className="item url" href={dt.site}>
              <img src={dt.img} alt={dt.title} />
              <h3>{dt.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
