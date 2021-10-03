import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.headers.post['Content-Type'] = 'application/json'

export const getUser = (wCredentials) => axios.get('/getuser', {withCredentials: wCredentials})
export const logout = () => axios.get('/auth/logout', {withCredentials: true})