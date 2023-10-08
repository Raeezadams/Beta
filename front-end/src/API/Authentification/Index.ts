import axios from 'axios';

export const apiBaseUrl: string = "http://localhost:5187";

export type User = {
    userName: string;
    phoneNumber: number;
    password: string;
    email: string;
}

export const signup = (user:User) => axios.post(`http://localhost:5187/Authentification/signup`, user).then(response => response.data)
export const login = (user:User) => axios.post(`http://localhost:5187/Authentification/login`, user).then(response => response.data)

