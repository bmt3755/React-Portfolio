import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Career Enhancement Program (Nucamp)",
      desc: "Used HTML, CSS, SCSS, React js, React Native js, Node js, Express server, Mongo db mongoose schema (MERN Stack) to develop multiple single page and multi-page applications.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Dell Boomi Consultant",
      desc: "The inventory items of Visteon manufacturing plant purchases are moved to QAD using boomi platform. The MES data in JSON format is split based on transaction type and moved to QAD in Qdoc format",
      img: "./assets/Boomi.png",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "QA Engineer",
      desc: "Trimble Systems is a leading provider of enterprise software primarily to transportation and logistics operations. Performed API, automation and functional testing of Trimble Transportation software",
      img: "./assets/Trimble.png",
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "QA Analyst",
      desc: "Responsible for testing the functionality of the various modules of the Enterprise Content Management (ECM) solution developed by the company and work on other infrastructure enhancement projects that are assigned.",
      img: "./assets/Hyland.png",
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "Cloud Integration Developer",
      desc: "UMUC manages all the articles in Service Now for review and approval purpose. These articles are created in Salesforce and sent to Service Now as part of continuous integration.",
      img: "./assets/Cloud.jfif",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((dt) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={dt.icon} alt="" />
                  </div>
                  <h2>{dt.title}</h2>
                  <p>{dt.desc}</p>
                </div>
              </div>
              <div className="right">
                <div className="imgContainer">
                  <img src={dt.img} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
