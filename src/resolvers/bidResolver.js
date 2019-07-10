const { bid } = require('../models');

const bidResolvers = {
    Query: {
        bids() {
            return bid.list()
        }
    }
}

module.exports = {
    bidResolvers
}
