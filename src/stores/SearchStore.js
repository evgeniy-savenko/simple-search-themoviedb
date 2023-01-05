import {defineStore} from 'pinia';
const url =
  'https://api.themoviedb.org/3/search/movie?api_key=87461f884256157e15220869b8327509&query=';

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    loader: false,
    movies: [],
  }),
  actions: {
    async getMovies(search) {
      this.loader = true;
      const res = await fetch(`${url}${search}`);
      const data = await res.json();
      console.log(data);
      this.movies = data.results;
      this.loader = false;
    },
    addToUserMovies(object) {
      const movieStore = useMovieStore();
      movieStore.movies.push({...object, isWatched: false});
      movieStore.activeTab = 1;
    },
  },
});
