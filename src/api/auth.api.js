class Auth {
    #axios;
    constructor(axios) {
        this.#axios = axios;
    }
    async signUp(data) {
        const path = '/register';
        const response = await this.#axios.post(path, data);
        const result = response.data;
        return result;
    }
    async logIn(data) {
        const path = '/login?expiresIn=10m';
        const response = await this.#axios.post(path, data);
        const result = response.data;
        localStorage.setItem('accessToken', result.accessToken); // 로컬스토리지에 저장
        return result;
    }
    async getUserInfo() {
        const path = '/user';
        const accessToken = localStorage.getItem('accessToken');

        if (!accessToken) return;

        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };
        const response = await this.#axios.get(path, config);
        const result = response.data;
        return result;
    }
    async updateProfile(data) {
        const path = '/profile';
        const accessToken = localStorage.getItem('accessToken');

        if (!accessToken) return;

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${accessToken}`,
            },
        };

        const response = await this.#axios.patch(path, data, config);
        const result = response.data;
        return result;
    }
}

export default Auth;
