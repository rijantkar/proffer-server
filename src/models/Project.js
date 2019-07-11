const axios = require('axios');

class Project {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:3000' // json-server endpoint
        })
    }

    getProjects() {
        return this.api.get('/projects').then(res => res.data)
    }

    getProject(id) {
        return this.api.get(`/projects/${id}`).then(res => res.data)
    }

    getUserProjects(sellerId){
        return this.api.get(`/projects?sellerId=${sellerId}`).then(res => res.data)
    }

    getBidderProjects(bidderId){
        return this.api.get(`/projects?bidderId=${bidderId}`).then(res => res.data)
    }

    searchText(searchTerm){
        return this.api.get(`/projects?q=${searchTerm}`).then(res => res.data)
    }

    postProject(data) {
        return this.api.post('/projects', data).then(res => res.data)
    }

    /*

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
