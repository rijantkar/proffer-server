const { bid } = require('../models');

const bidResolvers = {
    Query: {
        getBid(parent, args){
            return bid.getBid(args.id);
        },
        getBids() {
            return bid.getBids();
        },
        getProjectBids(parent, args){
            return bid.getProjectBids(args.projectId);
        },
        getUserBids(parent, args){
            return bid.getUserBids(args.userId);
        }
    }
}

module.exports = {
    bidResolvers
}
