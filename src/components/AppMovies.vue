<template>
    <div>
       <ul v-for="movie in movies" :key="movie.id">
           <li>
               {{ movie.title }}
           </li>
           <p> 
               {{ movie.director}}
           </p>
           <p>
               {{ movie.duration }}
           </p>
           <p>
               {{ movie.releaseDate }}
           </p>
           <p>
               {{ movie.genre }}
           </p>
       </ul>
    </div>
</template>

<script>
import MovieService from '../services/movies';

export default {
    data() {
        return {
            movies: []
        }
    },
    beforeRouteEnter() {
        movieService.getAll()
        .then( response => {
            this.movies= response.data;
        })
    }
}
</script>

<style>

</style>

