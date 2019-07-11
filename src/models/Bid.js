const axios = require('axios');

class Bid {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:3000' // json-server endpoint
        })
    }

    list() {
        return this.api.get('/bids').then(res => res.data)
    }

    find(id) {
        return this.api.get(`/bids/${id}`).then(res => res.data)
    }
/*
    create(data) {
        data.friends = data.friends ? data.friends.map(id => ({ id })) : []
        return this.api.post('/bids', data).then(res => res.data)
    }

    update(id, data) {
        return this.api.patch(`/bids/${id}`, data).then(res => res.data)
    }

    delete(id) {
        return this.api.delete(`/bids/${id}`).then(() => ({ id }))
    }*/
}

const bid = new Bid();

module.exports = {
    bid
}
