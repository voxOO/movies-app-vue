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
       <br>
       <b-pagination 
                    size="md"
                    total-rows=3
                    per-page=3>
        </b-pagination>

            <table class="table">
            <tr is="MovieRow"
                v-for="(movie , index) in filterMovies" :key=index 
                :movie="movie" 
                :selectRow='selectRow'
                @oneMovieSelect='selectedListfunction'>
            </tr>
            </table>
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
            selectRow: false,
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
            if(this.selectedList.length < this.movies.length) {
            this.movies.forEach(movie => {
                this.selectedList.push(movie)
            })
            }
            this.selectRow = true;
            //console.log(this.selectRow)
        },
        deselectAll() {
            this.selectedList = []            
            this.selectRow = false
            //console.log(this.selectRow)
        },
        selectedListfunction(movieId,listAddDelete) {

           if (listAddDelete && !this.selectedList.includes(movieId)) {
               this.selectedList.push(movieId)
               //console.log('AppMovieAdd:', this.selectedList)
           } else {
               for ( var i=0; i< this.selectedList.length; i++) {
                   if (this.selectedList[i] === movieId ) {
                       this.selectedList.splice(i,1)
                       //console.log('AppMovieDelete:', this.selectedList)
                   }
               }
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
        },
        functionName () {

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

    table {
        width: 100%;
    }
    
</style>

 