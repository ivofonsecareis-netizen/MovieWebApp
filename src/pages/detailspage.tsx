import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetailsById } from '../services/tmdb';
import type { IDetails } from '../types/typedetails';

function DetailsPage() {
  const { type, id } = useParams();
  const [details, setDetails] = useState<IDetails>();

  useEffect(() => {
    const getDetails = async () => {
      if (!type || !id) return;

      const newDetails = await fetchDetailsById(type as 'movie' | 'tv', id);
      setDetails(newDetails);
    };

    getDetails();
  }, [type, id]);

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{details.title || details.name}</h1>

      {details.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
          alt={details.title || details.name}
          width="200"
        />
      )}

      <p>{details.overview}</p>
      <p>⭐ {details.vote_average}</p>

      <div>
        {details.genres.map((genre) => (
          <span key={genre.id}>{genre.name} </span>
        ))}
      </div>
    </div>
  );
}

export default DetailsPage;