import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    
    <div className="home">
      <p className="diseno">
        Graphic design
      </p>
      <p className="slay">
        Slay Like Vaals
      </p>
      <Link to="/about">
        <h1 className="title">
          <span className="letter-special">P</span>ortafolio
        </h1>
      </Link>
      </div>
      
  );
}

