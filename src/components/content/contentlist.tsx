import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContentCard from '../cards/card';
import { fetchContent, fetchSearchResults } from '../../services/tmdb';
import type { IResult } from '../../types/types';

interface ContentListProps {
  type: 'movie' | 'tv';
  category?: string;
  query?: string;
}

function ContentList({ type, category, query = '' }: ContentListProps) {
  const [content, setContent] = useState<IResult | null>(null);

  useEffect(() => {
    const getContent = async () => {
      const trimmedQuery = query.trim();

      if (trimmedQuery) {
        const data = await fetchSearchResults(type, trimmedQuery);
        setContent(data);
        return;
      }

      if (!category) return;

      const data = await fetchContent(type, category);
      setContent(data);
    };

    getContent();
  }, [type, category, query]);

  if (!content) {
    return <p className="loading-text">Loading...</p>;
  }

  if (!content.results || content.results.length === 0) {
    return <p className="loading-text">No content found.</p>;
  }

  return (
    <div className="content-row">
      {content.results.map((item) => (
        <Link
          key={item.id}
          to={`/details/${type}/${item.id}`}
          className="content-row__link"
        >
          <ContentCard content={item} />
        </Link>
      ))}
    </div>
  );
}

export default ContentList;