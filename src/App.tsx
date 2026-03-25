import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import DetailsPage from "./pages/detailspage";
import MoviesPage from "./pages/moviespage"
import TvSeriesPage from "./pages/tvseriespage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv-series" element={<TvSeriesPage />} />
      </Routes>
    </>
  );
}

export default App;