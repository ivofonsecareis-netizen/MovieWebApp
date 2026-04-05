import { useState } from 'react';
import ContentList from '../components/content/contentlist';

function TvSeriesPage() {
  const [search, setSearch] = useState('');

  return (
    <section className="media-page">
      <div className="page-search">
        <input
          type="text"
          placeholder="Search TV series..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="page-search__input"
        />
      </div>

      {search.trim() ? (
        <div className="content-section">
          <h1 className="content-section__title">Search Results</h1>
          <ContentList type="tv" query={search} />
        </div>
      ) : (
        <>
          <div className="content-section">
            <h1 className="content-section__title">On The Air</h1>
            <ContentList category="on_the_air" type="tv" />
          </div>

          <div className="content-section">
            <h1 className="content-section__title">Popular TV Series</h1>
            <ContentList category="popular" type="tv" />
          </div>

          <div className="content-section">
            <h1 className="content-section__title">Top Rated TV Series</h1>
            <ContentList category="top_rated" type="tv" />
          </div>

          <div className="content-section">
            <h1 className="content-section__title">Airing Today</h1>
            <ContentList category="airing_today" type="tv" />
          </div>
        </>
      )}
    </section>
  );
}

export default TvSeriesPage;