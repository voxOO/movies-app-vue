<template>
    <div>
        <ul class="list-unstyled">
            <li>
                {{ movie.id }}
            </li>
           <li>
               <h3>{{ movie.title }}</h3>
           </li>
           <li> 
               {{ movie.director}}
           </li>
           <li>
               {{ movie.duration }} min
           </li>
           <li>
               {{ movie.releaseDate }}
           </li>
           <li>
               {{ movie.genre }}
           </li>
           <li>
               {{ movie.selected }}
           </li>
       </ul>
      <button @click="emitChangeSelect()" class="btn btn-success" ref="buttonSelectMovie">Select Movie</button>
      <hr>
    </div>
</template>

<script>

export default {
    data () {
        return {
            selected: ''
        }
    },
    props: ['movie','movieSelected'],
    methods: {
        emitChangeSelect() {
            this.$refs.buttonSelectMovie.style.background= 'red'
            this.$emit('oneMovieSelect', this.movie.id)
            //console.log(this.movieSelected)
        },
    },
}
</script>

<style scoped>

</style>
