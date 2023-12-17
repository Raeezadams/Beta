import axios from 'axios';

export const apiBaseUrl: string = "http://localhost:5187";

export type Product = {
    productName: string;
    price: number;
    description: string;
    quantity: number;
    productImg: FormData;
}


export const getProducts = () => axios.get(`${apiBaseUrl}/products`).then(response => response.data)

export const addProduct = (product: FormData) => axios.post(`${apiBaseUrl}/products`, product).then(response => response.data)

