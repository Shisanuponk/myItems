import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api'
axios.defaults.headers.post['Content-Type'] = 'application/json'

export const getUser = () => axios.get("/private", {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`
    }
})

export const loginAPI = (email, password) => axios.post('/auth/login', {email, password})
export const registerAPI = (name, email, password) => axios.post('/auth/register', {name, email, password})
export const logout = () => axios.get('/auth/logout', {withCredentials: true})