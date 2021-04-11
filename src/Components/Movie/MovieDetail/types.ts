import { ICategorie } from "../../../Views/Categories/types";

interface ICompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ICountry {
  iso_3166_1: string;
  name: string;
}

interface ILanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IMovieDetailRes {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: ICategorie[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ICompany[];
  production_countries: ICountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ILanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
