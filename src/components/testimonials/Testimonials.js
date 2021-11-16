import { Person } from "@material-ui/icons";
import "./testimonials.scss";

const data = [
  {
    id: 1,
    name: "Coming Soon...",
    title: "Coming Soon...",
    img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    icon: "assets/twitter.png",
    desc: "Coming Soon...",
  },
  {
    id: 2,
    name: "Coming Soon...",
    title: "Coming Soon...",
    img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    icon: "assets/youtube.png",
    desc: "Coming Soon... ",
    featured: true,
  },
  {
    id: 3,
    name: "Coming Soon...",
    title: "Coming Soon...",
    img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    icon: "assets/linkedin.png",
    desc: "Coming Soon...",
  },
];

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((person) => (
          <div className={person.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={person.img} alt="" />
              <img className="right" src={person.icon} alt="" />
            </div>
            <div className="center">{person.desc}</div>
            <div className="bottom">
              <h3>{person.name}</h3>
              <h4>{person.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
