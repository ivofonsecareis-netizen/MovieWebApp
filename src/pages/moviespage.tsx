import ContentList from '../components/content/contentlist';

function MoviesPage() {
  return (
    <>
      <div>
        <h1>Now Playing</h1>
        <ContentList category="now_playing" type="movie" />
      </div>
      
      <div>
        <h1>Upcoming Movies</h1>
        <ContentList category="upcoming" type="movie" />
      </div>

      <div>
        <h1>Top Rated Movies</h1>
        <ContentList category="top_rated" type="movie" />
      </div>

      <div>
        <h1>Popular Movies</h1>
        <ContentList category="popular" type="movie" />
      </div>
    </>
  );
}

export default MoviesPage;