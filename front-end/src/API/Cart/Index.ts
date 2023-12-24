import axios from 'axios';

export const apiBaseUrl: string = "http://localhost:5187";

export type AddCartItem = {
    productID: number;
    userID : number
}


export const getProducts = () => axios.get(`${apiBaseUrl}/products`).then(response => response.data)

export const addToCart = (cartItem: AddCartItem) => axios.post(`${apiBaseUrl}/cart`, cartItem).then(response => response.data)

