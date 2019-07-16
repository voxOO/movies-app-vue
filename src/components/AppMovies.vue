<template>
    <div class="container">
       <MovieSearch @searchTermUpdated="setSearchTerm"></MovieSearch>
       <hr>
       <MovieRow v-for="movie in movies" :key="movie.id" :movie="movie" :term='term'></MovieRow>
    </div>
</template>

<script>
import { movieService } from '../services/movies';
import MovieRow from './MovieRow';
import MovieSearch from './MovieSearch';

export default {
    data() {
        return {
            movies: [],
            term: ''
        }
    },
    beforeRouteEnter(to,from,next) {
       movieService.getAll().then( response => {
           next ( vm => {
               vm.movies = response.data;
           })
       })
    },
    components: {
        'MovieRow': MovieRow,
        'MovieSearch': MovieSearch
    },
    methods: {
        setSearchTerm(term) {
            this.term = term;
        }
    }
}
</script>

<style>

</style>

 