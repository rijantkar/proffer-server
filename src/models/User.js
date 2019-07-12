const axios = require('axios');
const { setGUID, setDateTime } = require('./../util');

class User {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:3000' // json-server endpoint
        })
    }

    getUser(id) {
        return this.api.get(`/users/${id}`).then(res => res.data)
    }

    getUsers() {
        return this.api.get('/users').then(res => res.data)
    }

    postUser(data) {
        setGUID(data);
        setDateTime(data);
        return this.api.post('/users', data).then(res => res.data)
    }

    updateUser(id, data) {
        setDateTime(data);
        return this.api.patch(`/users/${id}`, data).then(res => res.data)
    }

    deleteUser(id) {
        return this.api.delete(`/users/${id}`).then(res => res.statusText)
    }
}

const user = new User();

module.exports = {
    user
}
