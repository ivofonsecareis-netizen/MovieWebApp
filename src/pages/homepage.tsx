import ContentList from '../components/content/contentlist';

function HomePage() {
  return (
    <div>
      <h1>Home</h1>

      <section>
        <h2>Trending Movies</h2>
        <ContentList type="movie" category="popular" />
      </section>

      <section>
        <h2>Top Rated Movies</h2>
        <ContentList type="movie" category="top_rated" />
      </section>

      <section>
        <h2>Popular TV Series</h2>
        <ContentList type="tv" category="popular" />
      </section>
    </div>
  );
}

export default HomePage;