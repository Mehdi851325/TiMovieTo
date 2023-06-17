const base_url = "https://api.themoviedb.org/3/";
const api_key = "2ee543f3468420585e8b13c3e8a84d34";

export const movieImage = {
  imageOriginal: (imagePath) =>`https://image.tmdb.org/t/p/original${imagePath}`,
  imageW500: (imagePath) => `https://image.tmdb.org/t/p/w500${imagePath}`,
};

export const popularUrl = () => `${base_url}movie/popular?api_key=${api_key}`;
export const detailUrl = (movie_id) =>
  `${base_url}movie/${movie_id}?api_key=${api_key}`;
export const upComingUrl =()=>`${base_url}movie/upcoming?api_key=${api_key}`;
export const topRatingUrl =()=> `${base_url}movie/top_rated?api_key=${api_key}`;

export const popularTvUrl = ()=>`${base_url}tv/popular?api_key=${api_key}`;
export const topTvUrl = ()=>`${base_url}tv/top_rated?api_key=${api_key}`;

