const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function fetchContent(type: 'movie' | 'tv', category: string) {
  const response = await fetch(
    `${BASE_URL}/${type}/${category}?api_key=${API_KEY}`
  );
  return response.json();
}

export async function fetchSearchResults(type: 'movie' | 'tv', query: string) {
  const response = await fetch(
    `${BASE_URL}/search/${type}?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  return response.json();
}

export async function fetchContentDetails(type: 'movie' | 'tv', id: string) {
  const response = await fetch(
    `${BASE_URL}/${type}/${id}?api_key=${API_KEY}`
  );
  return response.json();
}

export async function fetchContentCredits(type: 'movie' | 'tv', id: string) {
  const response = await fetch(
    `${BASE_URL}/${type}/${id}/credits?api_key=${API_KEY}`
  );
  return response.json();
}