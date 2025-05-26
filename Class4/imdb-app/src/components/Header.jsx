import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <h1>IMDB</h1>
      <ul>
        <li>
          <a href="/">Movies</a>
        </li>
        <li>
          <a href="/details">Detail</a>
        </li>
        <li>
          <a href="/watchlist">Watch List</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
