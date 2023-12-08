const base_url = "https://api.themoviedb.org/3/";
const api_key = 'fe640157335818a34269d4fd2ded40d3';

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

