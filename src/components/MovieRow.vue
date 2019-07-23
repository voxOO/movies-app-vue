<template>
    <tr ref="trstyle" :class="selectClass">
        <td v-text="movie.id"></td>
        <td v-text="movie.title"></td>
        <td v-text="movie.director"></td>
        <td v-text="movie.duration"></td>
        <td v-text="movie.releaseDate"></td>
        <td v-text="movie.genre"></td>
        <td>
            <button @click="emitChangeSelect(),
                            selected = !selected"
                    class="btn btn-success"
                    ref="buttonSelectMovie">
                    Select Movie
            </button>             
        </td>
    </tr>
</template>

<script>

export default {
    data () {
        return {
            selected: true,
            proba: 'Vrednost probe'
        }
    },
     props: ['movie', 'selectRow'],
    computed: {
        selectClass () {
            if (this.selectRow) {
                return "highlighted"
            }
            return "white"
        }
    },
    methods: {
        emitChangeSelect() {
            if(this.selected) {
                this.$refs.trstyle.className = "highlighted"
            } else {
                this.$refs.trstyle.className = "white"
            }
            this.$emit('oneMovieSelect', this.movie.id, this.selected)
        },
    },
}
</script>

<style scoped>
    .highlighted {
        background-color: #ada289;
    }
    .white {
        background-color: white;
    }
    td {
        vertical-align: center;
    }
</style>
