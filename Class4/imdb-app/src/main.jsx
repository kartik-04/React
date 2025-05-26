import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct import
import MovieListPage from "./pages/MovieListPage.jsx";
import WatchList from "./pages/WatchList.jsx";
import MovieDetailsPage from "./pages/MovieDetailsPage.jsx";
import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Header />
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/details" element={<MovieDetailsPage />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
