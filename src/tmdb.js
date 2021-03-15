

const API_KEY = 'ab43306b48ce1d7e4c112545959f6496';
const API_BASE ='https://api.themoviedb.org/3';


/*

*******************************************
*                                         *
* lista de informações obtidas pela a API *
*                                         *
*******************************************
- originais netflix
- recomendados
- ação
- comédia
- terror
 -romance
- documentários
- mais vistos

*/

    const basicFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}




export default{
    getHomeList: async () =>{
        return [
              {  
                   slug: 'originals',
                   title: 'Originais da Netflix',
                   items: await basicFetch(`/discover/tv?with_network=213&language=pt-PT&api_key=${API_KEY}`)

                },

                {
                 
                    slug: 'trending',
                    title: 'Recomendados para ti',
                    items: await basicFetch(`/trending/all/week?language=pt-PT&api_key=${API_KEY}`)

                 },

                 {
                 
                    slug: 'toprated',
                    title: 'Mais Vistos',
                    items: await basicFetch(`/movie/top_rated?language=pt-PT&api_key=${API_KEY}`)
   
                   },

                   {
                 
                    slug: 'action',
                    title: 'Ação',
                    items: await basicFetch(`/discover/movie?with_genres=28&language=pt-PT&api_key=${API_KEY}`)
   
                    
                   },

                   {
                 
                    slug: 'comedy',
                    title: 'Comédia',
                    items: await basicFetch(`/discover/movie?with_genres=35&language=pt-PT&api_key=${API_KEY}`)
   
                   },

                   {
                 
                    slug: 'horror',
                    title: 'Terror',
                    items: await basicFetch(`/discover/movie?with_genres=27&language=pt-PT&api_key=${API_KEY}`)
   
                   },

                   {
                 
                    slug: 'romance',
                    title: 'Romance',
                    items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-PT&api_key=${API_KEY}`)
   
                   },

                   {
                 
                    slug: 'documentary',
                    title: 'Documentários',
                    items: await basicFetch(`/discover/movie?with_genres=99&language=pt-PT&api_key=${API_KEY}`)
   
                   },

        ];

    },

     getMovieInfo: async (movieId, type) =>{

    let info = {};

    if (movieId){
        switch(type){

            case 'movie':
                  info = await basicFetch(`/movie/${movieId}?language=pt-PT&api_key=${API_KEY}`);
            break;

            case 'tv':
                info = await basicFetch(`/tv/${movieId}?language=pt-PT&api_key=${API_KEY}`);
            break;
            default:
                info = null;
                break
          }


        }

        return info;
    }

}