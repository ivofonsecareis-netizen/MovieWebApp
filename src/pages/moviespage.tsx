import { useState } from 'react';
import ContentList from '../components/content/contentlist';

function MoviesPage() {
  const [search, setSearch] = useState('');

  return (
    <section className="media-page">
      <div className="page-search">
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="page-search__input"
        />
      </div>

      {search.trim() ? (
        <div className="content-section">
          <h1 className="content-section__title">Search Results</h1>
          <ContentList type="movie" query={search} />
        </div>
      ) : (
        <>
          <div className="content-section">
            <h1 className="content-section__title">Now Playing</h1>
            <ContentList category="now_playing" type="movie" />
          </div>

          <div className="content-section">
            <h1 className="content-section__title">Upcoming Movies</h1>
            <ContentList category="upcoming" type="movie" />
          </div>

          <div className="content-section">
            <h1 className="content-section__title">Top Rated Movies</h1>
            <ContentList category="top_rated" type="movie" />
          </div>

          <div className="content-section">
            <h1 className="content-section__title">Popular Movies</h1>
            <ContentList category="popular" type="movie" />
          </div>
        </>
      )}
    </section>
  );
}

export default MoviesPage;