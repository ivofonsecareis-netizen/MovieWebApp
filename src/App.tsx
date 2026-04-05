import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/search/navbar';
import DetailsPage from './pages/detailspage';
import MoviesPage from './pages/moviespage';
import TvSeriesPage from './pages/tvseriespage';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Navigate to="/movies" replace />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/tv-series" element={<TvSeriesPage />} />
          <Route path="/details/:type/:id" element={<DetailsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;