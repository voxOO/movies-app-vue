<template>
    <div class="container">
       <MovieSearch @searchTermUpdated="setSearchTerm"></MovieSearch>
       <hr>
       <p>Number of selected movies: {{ movieSelected.length }}</p>
       <button class="btn btn-secondary" @click="selectAll">Select All</button>
       <button class="btn btn-secondary" @click="deselectAll">Deselect All</button>
       <div v-for="(movie , index) in filterMovies" :key=index >
       <MovieRow :movie="movie" @MovieSelected='selectList'></MovieRow>
       </div>
       <hr>
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
            term: '',
            movieSelected: []
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
        },
        selectAll() {
           this.movies.forEach( movie => {
               movie.selected = true
               console.log(this.movies)
           })
        },
        deselectAll() {

        },
        selectList(movieId) {
           if (!this.movieSelected.includes(movieId)) {
           this.movieSelected.push(movieId);
           console.log(this.movieSelected)
           }
        }
    },
    computed: {
        filterMovies() {
            return this.movies.filter(item => {
                return item.title.toLowerCase().includes(this.term.toLowerCase())
            })
        }
    },

}
</script>

<style>
    button {
        margin-right:10px
    }
</style>

 