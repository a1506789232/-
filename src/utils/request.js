import axios from 'axios'

let sever = axios.create({})

sever.interceptars.request.use(config=>{
    return config;
})

sever.interceptars.response.use(res=>{
    return res;
})

export default sever;