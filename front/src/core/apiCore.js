import { API_URL } from '../config';
import queryString from 'query-string';

export const getProducts = (sortBy) => {
    return fetch(`${API_URL}/products?sortBy=${sortBy}&order=desc&limit=6`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(error => {
            console.log(error);
        });
};

export const getCategories = () => {
    return fetch(`${API_URL}/categories`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(error => {
            console.log(error);
        });
};

export const getFilteredProducts = (skip, limit, filters = {}) => {
    const data = { limit, skip, filters }
    return fetch(`${API_URL}/products/by/search`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const list = (params) => {
    const query = queryString.stringify(params);
    console.log('query', query);
    return fetch(`${API_URL}/products?${query}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(error => {
            console.log(error);
        });
};