export default () => ({
    async request(param='', options={ method: 'GET' }) {
        return await fetch(`http://127.0.0.1:8003/news/${param}`, options)
        .then(res => res.json());
    },
    async get(){
        return await this.request();
    },
    async delete(param){
        return await this.request(param, { method: 'DELETE' });
    }
})