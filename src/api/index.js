const KEY = '?client_id=42e6a98be9b9976549f0c723396050648b30cc156b9f2c3ba9bc5ab9f41c94d3';
const URL = 'https://api.unsplash.com/photos/';

export const fetchImages = async page => {
    const response = await fetch(`${URL}${KEY}&per_page=36&page=${page}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};