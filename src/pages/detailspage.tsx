import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/tmdb';
import type { IDetails } from '../types/typedetails';

function DetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<IDetails | null>(null);

  useEffect(() => {
    const getMovie = async () => {
      if (!id) return;

      const data = await fetchMovieDetails(id);
      setMovie(data);
    };

    getMovie();
  }, [id]);

  if (!movie) {
    return <p className="loading-text">Loading...</p>;
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '';

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : '';

  return (
    <section className="details-page">
      <div
        className="details-page__banner"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(8,11,20,0.95), rgba(8,11,20,0.45)), url(${backdropUrl})`,
        }}
      >
        <div className="details-page__content">
          {posterUrl && (
            <img
              className="details-page__poster"
              src={posterUrl}
              alt={movie.title || movie.name || 'Movie poster'}
            />
          )}

          <div className="details-page__info">
            <h1 className="details-page__title">
              {movie.title || movie.name}
            </h1>

            <p className="details-page__meta">
              ★ {movie.vote_average.toFixed(1)} ·{' '}
              {movie.release_date || movie.first_air_date} ·{' '}
              {movie.runtime ?? 'N/A'} min
            </p>

            <div className="details-page__genres">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="details-page__genre">
                  {genre.name}
                </span>
              ))}
            </div>

            <p className="details-page__overview">{movie.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsPage;