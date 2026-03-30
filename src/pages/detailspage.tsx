import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieCredits } from '../services/tmdb';
import type { IDetails, CastMember } from '../types/typedetails';

function DetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<IDetails | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);

  useEffect(() => {
    const getMovieData = async () => {
      if (!id) return;

      const detailsData = await fetchMovieDetails(id);
      const creditsData = await fetchMovieCredits(id);

      setMovie(detailsData);
      setCast(creditsData.cast.slice(0, 6));
    };

    getMovieData();
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
              alt={movie.title || movie.name || 'Poster'}
            />
          )}

          <div className="details-page__info">
            <h1 className="details-page__title">{movie.title || movie.name}</h1>

            <p className="details-page__meta">
              ★ {movie.vote_average.toFixed(1)} · {movie.release_date || movie.first_air_date} · {movie.runtime ?? 'N/A'} min
            </p>

            <div className="details-page__genres">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="details-page__genre">
                  {genre.name}
                </span>
              ))}
            </div>

            <p className="details-page__overview">{movie.overview}</p>

            <h2 className="details-page__actors-title">Actors</h2>

            <div className="details-page__actors">
              {cast.map((actor) => {
                const actorImage = actor.profile_path
                  ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                  : '';

                return (
                  <div key={actor.id} className="details-page__actor-card">
                    {actorImage ? (
                      <img
                        className="details-page__actor-image"
                        src={actorImage}
                        alt={actor.name}
                      />
                    ) : (
                      <div className="details-page__actor-placeholder">No image</div>
                    )}
                    <p className="details-page__actor-name">{actor.name}</p>
                    <p className="details-page__actor-character">{actor.character}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsPage;