const BASE_URL = 'https://pixabay.com/api/';  
const API_KEY = '23090383-e81f8e634e4c6b35c8c9f1295';

export default class ImagesApiService {
    constructor() {
        this.searchQuery ='';
        this.page = 1;
    }

    async fetchImages () {
            const response = await fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`);
            
            if(!response.ok) {
                throw new Error(`Sorry, but such country doesn't exist ${response.status}`);
            }

            const images = await response.json();
            this.incrementPage();
            return await images.hits;
    }

    incrementPage () {
        this.page +=1;
    }

    resetPage () {
        this.page =1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}