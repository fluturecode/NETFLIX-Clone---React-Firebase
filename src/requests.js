const fun = "ab3f975c938b072b5ecd12176892ba3b";

const requests = {
	fetchTrending: `/trending/all/week?api_key=${fun}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${fun}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${fun}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${fun}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${fun}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${fun}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${fun}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${fun}&with_genres=99`,
};

export default requests;
