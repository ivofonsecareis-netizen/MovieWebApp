import ContentList from '../components/content/contentlist';

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-banner">
        <div className="hero-banner__overlay">
          <p className="hero-banner__subtitle">Welcome back</p>
          <h1 className="hero-banner__title">Discover Movies & TV Shows</h1>
          <p className="hero-banner__text">
            Browse trending movies, top rated classics, and popular TV series.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="content-section__title">Trending Movies</h2>
        <ContentList type="movie" category="popular" />
      </section>

      <section className="content-section">
        <h2 className="content-section__title">Top Rated Movies</h2>
        <ContentList type="movie" category="top_rated" />
      </section>

      <section className="content-section">
        <h2 className="content-section__title">Popular TV Series</h2>
        <ContentList type="tv" category="popular" />
      </section>
    </div>
  );
}

export default HomePage;