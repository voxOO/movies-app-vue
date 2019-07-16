<template>
    <div class = "container">
        <form>
            <h3>Searh movie database:</h3>
            <label for="search"></label>
            <input type="text" id="search" class="form-control" 
            @input="searchTerm">
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        searchTerm (event) {
            this.$emit('searchTermUpdated', event.target.value)
        }
    }
}
</script>

<style>

</style>
