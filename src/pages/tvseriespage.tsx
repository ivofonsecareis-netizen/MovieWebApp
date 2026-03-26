import ContentList from '../components/content/contentlist';

function TVPages() {
  return (
    <>
      <div>
        <h1>Popular TV Series</h1>
        <ContentList category="popular" type="tv" />
      </div>

      <div>
        <h1>Top Rated TV Series</h1>
        <ContentList category="top_rated" type="tv" />
      </div>

      <div>
        <h1>Airing Today</h1>
        <ContentList category="airing_today" type="tv" />
      </div>
    </>
  );
}

export default TVPages;