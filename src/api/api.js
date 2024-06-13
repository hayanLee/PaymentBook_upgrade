import axios from 'axios';
import Auth from './auth.api';
import Payments from './payments.api';

const BASE_URL = 'https://moneyfulpublicpolicy.co.kr';
// const JSON_SERVER_HOST = 'http://localhost:4000';
const JSON_SERVER_HOST = 'https://lumbar-quilled-lens.glitch.me';
class API {
    #axios;
    #jsonAxios;
    auth;
    payments;

    constructor() {
        this.#axios = axios.create({ baseURL: BASE_URL }); //1개의 axios를 만들어서 공유
        this.#jsonAxios = axios.create({ baseURL: JSON_SERVER_HOST });
        this.auth = new Auth(this.#axios);
        this.payments = new Payments(this.#jsonAxios);
    }
}

const api = new API();
export default api;
