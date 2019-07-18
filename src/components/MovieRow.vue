<template>
    <div>
        <ul class="list-unstyled">
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
       </ul>
       <input type="checkbox" ref="checkbox">
       <button @click="proba()">PROBA</button>
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
    props: ['movie','term'],
    computed: { 
        checkboxValue () {
        // this.checkValue = true;
        // console.log(checkValue);
        //this.emit

     }
    },
    methods: {
        proba () {
            console.log(this.$refs.checkbox.checked)
            this.$emit('but-selected')
            return this.selected
        }
    }
}
</script>

<style>

</style>
