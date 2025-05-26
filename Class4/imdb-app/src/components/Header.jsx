import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>IMDB</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/details">Detail</Link>
        </li>
        <li>
          <Link to="/watchlist">WatchList</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
