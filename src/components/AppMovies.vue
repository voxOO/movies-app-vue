<template>
    <div class="container">
       <MovieSearch @searchTermUpdated="setSearchTerm"></MovieSearch>
       <hr>
       <div v-for="(movie , index) in filterMovies" :key=index >
       <MovieRow :movie="movie"></MovieRow>
       </div>
       <div v-if="filterMovies.length===0">There are no movies with that name</div>
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
    },
    computed: {
        filterMovies() {
            return this.movies.filter(item => {
                return item.title.toLowerCase().includes(this.term.toLowerCase())
            })
        }
    }
}
</script>

<style>

</style>

 