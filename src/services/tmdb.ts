const BASE_URL = 'https://api.themoviedb.org/3';

const options: RequestInit = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};

export async function fetchContent(
  type: 'movie' | 'tv',
  category: string
) {
  const response = await fetch(
    `${BASE_URL}/${type}/${category}`,
    options
  );

  const data = await response.json();
  return data;
}

export async function fetchDetailsById(
  type: 'movie' | 'tv',
  id: string
) {
  const response = await fetch(
    `${BASE_URL}/${type}/${id}`,
    options
  );

  const data = await response.json();
  return data;
}