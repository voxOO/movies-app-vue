<template>
 <div>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Movies-app</a>
      </div>
      <ul class="nav navbar-nav">
        <router-link to="/movies" class="btn btn-primary">Movies</router-link>
        
      </ul>
    </div>
</nav>
<router-view/>
</div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
