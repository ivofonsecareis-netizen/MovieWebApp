const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};

export async function fetchFromTMDB(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status}`);
  }

  return response.json();
}

export async function getTrendingMovies() {
  return fetchFromTMDB('/trending/movie/week');
}

export async function getPopularMovies() {
  return fetchFromTMDB('/movie/popular');
}

export async function getTopRatedTV() {
  return fetchFromTMDB('/tv/top_rated');
}

export async function searchMovies(query) {
  return fetchFromTMDB(`/search/movie?query=${encodeURIComponent(query)}`);
}

export async function getMovieDetails(id) {
  return fetchFromTMDB(`/movie/${id}`);
}

export async function getMovieCredits(id) {
  return fetchFromTMDB(`/movie/${id}/credits`);
}

export default options;