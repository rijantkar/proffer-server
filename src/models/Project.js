const axios = require('axios');

class Project {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:3000' // json-server endpoint
        })
    }

    list() {
        return this.api.get('/projects').then(res => res.data)
    }

    /*find(id) {
        return this.api.get(`/projects/${id}`).then(res => res.data)
    }

    create(data) {
        data.friends = data.friends ? data.friends.map(id => ({ id })) : []
        return this.api.post('/projects', data).then(res => res.data)
    }

    update(id, data) {
        return this.api.patch(`/projects/${id}`, data).then(res => res.data)
    }

    delete(id) {
        return this.api.delete(`/projects/${id}`).then(() => ({ id }))
    }*/
}

const project = new Project();

module.exports = {
    project
}
