import type { Movie, TVSeries } from '../../types/types';

interface IContentCardProps {
  content: Movie | TVSeries;
}

function ContentCard({ content }: IContentCardProps) {
  const title = 'title' in content ? content.title : content.name;

  const imageUrl = content.poster_path
    ? `https://image.tmdb.org/t/p/w500${content.poster_path}`
    : '';

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt={title} width="150" />}
      <h3>{title}</h3>
      <p>⭐ {content.vote_average}</p>
    </div>
  );
}

export default ContentCard;