<template>
    <div class="container">
       <MovieSearch @searchTermUpdated="setSearchTerm"></MovieSearch>
       <hr>
       <p>Number of selected movies: {{ selectedList.length }}</p>
       <button class="btn btn-secondary" @click="selectAll">Select All</button>
       <button class="btn btn-secondary" @click="deselectAll">Deselect All</button>
       <br><br>
       <div>
           <h4>Sort Movies by:</h4>
           <button @click="selectCategory('NameAsc')" ref="NameAsc" class="btn btn-secondary">Name asc</button>
           <button @click="selectCategory('NameDesc')" ref="NameDesc" class="btn btn-secondary">Name desc</button>
           <button @click="selectCategory('DurationAsc')" class="btn btn-secondary">Durations asc</button>
           <button @click="selectCategory('DurationDesc')" class="btn btn-secondary">Duration desc</button>
       </div>
       <div v-for="(movie , index) in filterMovies" :key=index >
       <MovieRow :movie="movie" 
                 :movieSelected = "movieSelected" 
                 @oneMovieSelect='selectedListfunction'>
       </MovieRow>
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
            movieSelected: [],
            selectedList: []
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
            if (this.movieSelected.length < this.movies.length) {
           this.movies.forEach(movie => {
               this.movieSelected.push(movie.id);
           });
          }
           //console.log('Filmovi:',this.movies)
           //console.log("Selektovana lista:",this.movieSelected);
        },
        deselectAll() {
            this.movieSelected= []
        },
        selectedListfunction(movieId) {
           if (!this.selectedList.includes(movieId)) {
           this.selectedList.push(movieId)
           //console.log(this.selectedList)
           }
        },
        selectCategory(sortBy) {
            switch (sortBy) {
                case 'NameAsc':
                    this.movies.sort((a, b) => (a.title > b.title) ? 1 : -1)
                break;
                case 'NameDesc':
                    this.movies.sort((a,b) => (a.title < b.title) ? 1: -1)
                break;
                case 'DurationAsc':
                    this.movies.sort((a,b) => (a.duration > b.duration) ? 1: -1)                    
                break;
                case 'DurationDesc':
                    this.movies.sort((a,b) => (a.duration < b.duration) ? 1: -1)                    
                break;
                default:
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
    .btn {
        margin-right:10px
    }
</style>

 