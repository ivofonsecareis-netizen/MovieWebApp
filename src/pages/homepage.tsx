import { useState } from 'react';

function HomePage() {
  const [search, setSearch] = useState('');

  return (
    <div className="home-page">
      <section className="hero-banner hero-banner--home">
        <div className="hero-banner__overlay">
          <p className="hero-banner__subtitle">Welcome back</p>
          <h1 className="hero-banner__title">Discover Movies & TV Shows</h1>
          <p className="hero-banner__text">
            Search for a movie or TV series and explore full details.
          </p>

          <div className="home-search">
            <input
              type="text"
              placeholder="Search movies or TV series..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="home-search__input"
            />
            <button className="home-search__button">Search</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;