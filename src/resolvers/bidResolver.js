const { bid } = require('../models');

const bidResolvers = {
    Query: {
        bids() {
            return bid.list()
        },
        findBid(parent, args){
            return bid.find(args.id)
        }
    }
}

module.exports = {
    bidResolvers
}
