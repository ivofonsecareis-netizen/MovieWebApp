import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__links">
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
          }
        >
          Movies
        </NavLink>

        <NavLink
          to="/tv-series"
          className={({ isActive }) =>
            isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
          }
        >
          TV Series
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;