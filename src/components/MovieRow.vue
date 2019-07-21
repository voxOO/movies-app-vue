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
    props: ['movie','selectData'],
    computed: { 
        checkboxValue () {
    
     }
    },
    methods: {
        // emitChangeSelect () {
        //     this.$emit('MovieSelected',this.$refs.checkbox.checked, this.movie.id)
        // },
        emitChangeSelect() {

            this.$refs.buttonSelectMovie.style.background= 'red'
            this.$emit('MovieSelected', this.movie.id)
            
            //console.log(this.movie.id)
        }
    },
}
</script>

<style scoped>

</style>
