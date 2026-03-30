export interface Genre {
  id: number;
  name: string;
}

export interface IDetails {
  adult: boolean;
  backdrop_path: string | null;
  genres: Genre[];
  homepage: string | null;
  id: number;
  imdb_id?: string | null;
  original_language: string;
  overview: string;
  poster_path: string | null;
  release_date?: string;
  first_air_date?: string;
  runtime?: number;
  title?: string;
  name?: string;
  vote_average: number;
  vote_count: number;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface MovieCredits {
  cast: CastMember[];
}