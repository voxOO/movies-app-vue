<template>
    <div class="container">
       <div v-for="movie in movies" :key="movie.id">
           <h2>
               {{ movie.title }}
           </h2>
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
       </div>
    </div>
</template>

<script>
import { movieService } from '../services/movies';

export default {
    data() {
        return {
            movies: [],
        }
    },
    beforeRouteEnter(to,from,next) {
        next( vm => {
             movieService.getAll().then( response => {
            //console.log(vm.proba)
            vm.movies= response.data;
            //console.log('PROBA1')
        })
        })
    }
}
</script>

<style>

</style>

