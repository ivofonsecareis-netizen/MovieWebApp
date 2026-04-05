import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchContentDetails, fetchContentCredits } from '../services/tmdb';
import type { IDetails, CastMember } from '../types/typedetails';

function DetailsPage() {
  const { id, type } = useParams();
  const [content, setContent] = useState<IDetails | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);

  useEffect(() => {
    const getContentData = async () => {
      if (!id || (type !== 'movie' && type !== 'tv')) return;

      const detailsData = await fetchContentDetails(type, id);
      const creditsData = await fetchContentCredits(type, id);

      setContent(detailsData);
      setCast(creditsData.cast.slice(0, 6));
    };

    getContentData();
  }, [id, type]);

  if (!content) {
    return <p className="loading-text">Loading...</p>;
  }

  const posterUrl = content.poster_path
    ? `https://image.tmdb.org/t/p/w500${content.poster_path}`
    : '';

  const backdropUrl = content.backdrop_path
    ? `https://image.tmdb.org/t/p/original${content.backdrop_path}`
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
              alt={content.title || content.name || 'Poster'}
            />
          )}

          <div className="details-page__info">
            <h1 className="details-page__title">{content.title || content.name}</h1>

            <p className="details-page__meta">
              ★ {content.vote_average.toFixed(1)} ·{' '}
              {content.release_date || content.first_air_date} ·{' '}
              {content.runtime ?? 'N/A'} min
            </p>

            <div className="details-page__genres">
              {content.genres.map((genre) => (
                <span key={genre.id} className="details-page__genre">
                  {genre.name}
                </span>
              ))}
            </div>

            <p className="details-page__overview">{content.overview}</p>

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