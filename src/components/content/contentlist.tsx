import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContentCard from '../cards/card';
import { fetchContent } from '../../services/tmdb';
import type { IResult } from '../../types/types';

interface ContentListProps {
  type: 'movie' | 'tv';
  category: string;
}

function ContentList({ type, category }: ContentListProps) {
  const [content, setContent] = useState<IResult | null>(null);

  useEffect(() => {
    const getContent = async () => {
      const data = await fetchContent(type, category);
      setContent(data);
    };

    getContent();
  }, [type, category]);

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
          to={`/details/${item.id}`}
          className="content-row__link"
        >
          <ContentCard content={item} />
        </Link>
      ))}
    </div>
  );
}

export default ContentList;