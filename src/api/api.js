import axios from 'axios';
import Auth from './auth.api';

const BASE_URL = 'https://moneyfulpublicpolicy.co.kr';
class API {
    #axios;
    auth;
    constructor() {
        this.#axios = axios.create({ baseURL: BASE_URL }); //1개의 axios를 만들어서 공유
        this.auth = new Auth(this.#axios);
    }
}

const api = new API();
export default api;
