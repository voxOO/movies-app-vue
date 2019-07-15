import axios from 'axios';

export default class MovieService {
    constructor() {
        axios.base.baseURL = 'http://localhost:3000/api'
    }

    getAll() {
        return axios.get('/movies');
    }
}

