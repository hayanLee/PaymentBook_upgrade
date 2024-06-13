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
    async addPayment(data) {}
    async updatePayment() {}
    async deletePayment() {}
}

export default Payments;
