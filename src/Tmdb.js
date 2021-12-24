const API_KEY = '366b4499404c9c445f2e45cf7bbf9f8d';
const API_BASE = 'https://api.themoviedb.org/3';


/*
    * Class: Tmdb  (Tmdb.js)
    * Description: This class is used to make requests to the TMDb API.
*/
   
const basicFetch =async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}



export default{
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originals',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'trending',
                title: 'Trending',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'toprated',
                title: 'Top Rated',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'documentary',
                title: 'Documentary',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }

        return info;
    }
}
