import { tmdbToken } from "./firebase";

export const netflix_bg = "https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/US-en-20250721-TRIFECTA-perspective_6d968797-b773-4ec4-aa69-2a9c2e41ae94_small.jpg";
export const logo = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${tmdbToken}`
    }
};
export const NOW_PLAYING_MOVIES="https://api.themoviedb.org/3/movie/now_playing";
export const GET_MOVIES_POSTER="https://image.tmdb.org/t/p/w200/"
export const POPULAR_MOVIES="https://api.themoviedb.org/3/movie/popular";
export const UPCOMING_MOVIES="https://api.themoviedb.org/3/movie/upcoming";
export const TOP_RATED_MOVIES="https://api.themoviedb.org/3/movie/top_rated";
export const SEARCH_MOVIE="https://api.themoviedb.org/3/search/movie?query=";