import axios from 'axios';
export class moviesAPI {
    static API_KEY = 'e85efcf2ca20bceba27e538fe32c6662';
    static BASE_URL = 'https://api.themoviedb.org/3';

    static async getMovieDetails(movieId) {
        const url = `${moviesAPI.BASE_URL}/movie/${movieId}?api_key=${moviesAPI.API_KEY}&append_to_response=videos`;

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    static async getTrendingMovies(timeWindow) {
        const url = `${moviesAPI.BASE_URL}/trending/all/${timeWindow}?api_key=${moviesAPI.API_KEY}`;

        try {
            const response = await axios.get(url);
            console.log(response.data.results);
            return response.data.results;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    static async searchMovies(query, page) {
        const url = `${moviesAPI.BASE_URL}/search/movie?query=${query}&page=${page}&api_key=${moviesAPI.API_KEY}`;

        try {
            const response = await axios.get(url);
            return response.data.results;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    static async getMovieById(movieId) {
        const url = `${moviesAPI.BASE_URL}/movie/${movieId}?api_key=${moviesAPI.API_KEY}`;

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    static async getCreditsByMovieId(movieId) {
        const url = `${moviesAPI.BASE_URL}/movie/${movieId}/credits?api_key=${moviesAPI.API_KEY}`;

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    static async getMovieReviews(movieId) {
        const url = `${moviesAPI.BASE_URL}/movie/${movieId}/reviews?api_key=${moviesAPI.API_KEY}`;

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}