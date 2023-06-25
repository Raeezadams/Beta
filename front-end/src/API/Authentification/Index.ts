import axios from 'axios';

export const apiBaseUrl: string = "https://localhost:7140";

export type User = {
    userName: string;
    cellNumber: number;
    password: string;
    email: string;
}

export const signup = (user:User) => axios.post(`https://localhost:7140/Authentification/signup`, {
    "userName": "string",
    "email": "string",
    "cellNumber": 0,
    "password": "string"
  }).then(response => response.data)

