import { useState } from "react";
import { StrictMode } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct import
import MovieListPage from "./pages/MovieListPage.jsx";
import WatchList from "./pages/WatchList.jsx";
import MovieDetailsPage from "./pages/MovieDetailsPage.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [watchlist, setWatchlist] = useState({});

  return (
    <BrowserRouter>
      <StrictMode>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <MovieListPage
                watchlist={watchlist}
                setWatchlist={setWatchlist}
              />
            }
          />
          <Route path="/details" element={<MovieDetailsPage />} />
          <Route
            path="/watchlist"
            element={
              <WatchList watchlist={watchlist} setWatchlist={setWatchlist} />
            }
          />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </StrictMode>
    </BrowserRouter>
  );
}

export default App;
