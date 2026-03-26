import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContentCard from '../cards/card';
import { fetchContent } from '../../services/tmdb';
import type { IResult } from '../../types/types';

interface IContentProps {
  type: 'movie' | 'tv';
  category: string;
}

function ContentList({ type, category }: IContentProps) {
  const [content, setContent] = useState<IResult>();

  useEffect(() => {
    const fetchContentByTypeAndCategory = async () => {
      const newContent = await fetchContent(type, category);
      setContent(newContent);
    };

    fetchContentByTypeAndCategory();
  }, [type, category]);

  return (
    <div>
      {content?.results.length === 0 ? (
        <p>No content found.</p>
      ) : (
        content?.results.map((item) => (
          <div key={item.id}>
            <Link to={`/${type}/${item.id}`}>
              <ContentCard content={item} />
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default ContentList;