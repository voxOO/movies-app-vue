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
       <hr>
    </div>
</template>

<script>

export default {
    props: ['movie','term']
}
</script>

<style>

</style>
