import axios from 'axios';

export const apiBaseUrl: string = "http://localhost:7140";

export type User = {
    userName: string;
    phoneNumber: string;
    password: string;
    email: string;
}

export const signup = (user:User) => axios.post(`http://localhost:7140/Authentification/signup`, user).then(response => response.data)

