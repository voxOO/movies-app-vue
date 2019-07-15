import axios from 'axios';

export default class MoovieService {
    constructor() {
        axios.base.baseURL = 'http://localhost:3000/api'
    }


}

export const movieService= new MovieService()
