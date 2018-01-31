import axios from 'axios';

export const client = axios.create({
    baseURL: "http://localhost:9191/api",
    headers: {
        "Content-Type": "application/json"
    }
})