import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/search/navbar';
import HomePage from './pages/homepage';
import DetailsPage from './pages/detailspage';
import MoviesPage from './pages/moviespage';
import TvSeriesPage from './pages/tvseriespage';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/tv-series" element={<TvSeriesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;