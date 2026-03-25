import { useEffect, useState } from 'react';
import { getTrendingMovies, getPopularMovies } from '../services/tmdb.tsx';
import type { Imovie } from '../types/types.ts';
import options from '../services/tmdb.tsx';

function HomePage() {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState<Imovie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular',
        options,
      );
      const data = await response.json();
      console.log("data", data);
      setPopular(data.results);
    };
    fetchMovies();
  }, []);
  

  return (
    <div>
      <h1>Home</h1>
      <section>
        <h2>Trending</h2>
        {trending.map(movie => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </section>

      <section>
        <h2>Popular</h2>
        {popular.map(movie => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </section>
    </div>
  );
}

export default HomePage;

