import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burger-71d4b.firebaseio.com/'
});
export default instance;
