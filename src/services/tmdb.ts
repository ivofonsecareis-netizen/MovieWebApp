// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// export async function fetchContent(type: 'movie' | 'tv', category: string) {
//   const response = await fetch(
//     `${BASE_URL}/${type}/${category}?api_key=${API_KEY}`
//   );

//   const data = await response.json();
//   return data;
// }

// export async function fetchMovieDetails(id: string) {
//   const response = await fetch(
//     `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
//   );

//   const data = await response.json();
//   return data;
// }

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function fetchContent(type: 'movie' | 'tv', category: string) {
  const response = await fetch(
    `${BASE_URL}/${type}/${category}?api_key=${API_KEY}`
  );
  return response.json();
}

export async function fetchMovieDetails(id: string) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  return response.json();
}

export async function fetchMovieCredits(id: string) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  return response.json();
}