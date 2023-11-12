import axios from 'axios';

export const apiBaseUrl: string = "http://localhost:5187";

export type User = {
    userName: string;
    phoneNumber: number | null;
    password: string;
    email: string;
}

export type Product = {
    productName: string;
    price: number;
    description: string;
    quantity: number;
    productImg: FormData;
}



export const signup = (user:User) => axios.post(`${apiBaseUrl}/Authentification/signup`, user).then(response => response.data)
export const login = (user:User) => axios.post(`${apiBaseUrl}/Authentification/login`, user).then(response => response.data)

export const addProduct = (product:Product) => axios.post(`${apiBaseUrl}/products`, product).then(response => response.data)

