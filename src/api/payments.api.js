class Payments {
    #axios;
    constructor(axios) {
        this.#axios = axios;
    }
    async getPayments() {
        const path = '/payments';
        const response = await this.#axios.get(path);
        return response.data;
    }
    async getPayment(paymentId) {
        const path = `/payments/${paymentId}`;
        const response = await this.#axios.get(path);
        return response.data;
    }
    async addPayment(data) {
        const path = '/payments';
        const response = await this.#axios.post(path, data);
        return response.data;
    }
    async updatePayment(data) {
        const { paymentId, ...rest } = data;
        console.log(data);
        const path = `/payments/${paymentId}`;
        const response = await this.#axios.put(path, rest);
        return response.data;
    }
    async deletePayment(paymentId) {
        const path = `/payments/${paymentId}`;
        const response = await this.#axios.delete(path);
        return response.data;
    }
}

export default Payments;
