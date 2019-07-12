const axios = require('axios');
const { setProjectStatus, setDateTime, setGUID } = require('./../util');

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
        setProjectStatus(data,'OPEN');
        setGUID(data);
        setDateTime(data);
        return this.api.post('/projects', data).then(res => res.data)
    }

    updateProject(id, data) {
        setGUID(data);
        setDateTime(data);
        return this.api.patch(`/projects/${id}`, data).then(res => res.data)
    }

    deleteProject(id) {
        return this.api.delete(`/projects/${id}`).then(res => res.statusText)
    }
}

const project = new Project();

module.exports = {
    project
}
