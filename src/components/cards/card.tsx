import type { Movie, TVSeries } from '../../types/types';

interface ContentCardProps {
  content: Movie | TVSeries;
}

function ContentCard({ content }: ContentCardProps) {
  const title = 'title' in content ? content.title : content.name;

  const imageUrl = content.poster_path
    ? `https://image.tmdb.org/t/p/w500${content.poster_path}`
    : '';

  return (
    <article className="movie-card">
      {imageUrl ? (
        <img className="movie-card__image" src={imageUrl} alt={title} />
      ) : (
        <div className="movie-card__placeholder">No image</div>
      )}

      <div className="movie-card__info">
        <h3 className="movie-card__title">{title}</h3>
        <p className="movie-card__rating">★ {content.vote_average.toFixed(1)}</p>
      </div>
    </article>
  );
}

export default ContentCard;