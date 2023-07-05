import axios from 'axios';

export const apiBaseUrl: string = "https://localhost:7140";

export type User = {
    userName: string;
    phoneNumber: string;
    password: string;
    email: string;
}

export const signup = (user:User) => axios.post(`https://localhost:7140/Authentification/signup`, user).then(response => response.data)

