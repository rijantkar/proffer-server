const axios = require('axios');
const moment = require('moment');
const { getCurrentDateTime } = require('./../util')

class Bid {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:3000' // json-server endpoint
        })
    }

    getBid(id) {
        return this.api.get(`/bids/${id}`).then(res => res.data)
    }

    getBids() {
        return this.api.get('/bids').then(res => res.data)
    }

    getProjectBids(projectId){
        return this.api.get(`/bids?projectId${projectId}`).then(res => res.data)
    }

    getUserBids(bidderId){
        return this.api.get(`/bids?bidderId${bidderId}`).then(res => res.data)
    }

    postBid(data) {
        data['createdDateTime'] = getCurrentDateTime();
        return this.api.post('/bids', data).then(res => res.data)
    }

    updateBid(id, data) {
        data['createdDateTime'] = getCurrentDateTime();
        return this.api.patch(`/bids/${id}`, data).then(res => res.data)
    }

    deleteBid(id) {
        return this.api.delete(`/bids/${id}`).then( res => console.log(res.data))
    }
}

const bid = new Bid();

module.exports = {
    bid
}
