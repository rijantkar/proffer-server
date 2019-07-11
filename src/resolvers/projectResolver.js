const { project } = require('../models');

const projectResolvers = {
    Query: {
        getProject(parent, args){
            return project.getProject(args.id)
        },
        getProjects() {
            return project.getProjects()
        },
        getUserProjects(parent, args){
            return project.getUserProjects(args.sellerId)
        },
        getBidderProjects(parent, args){
            return project.getBidderProjects(args.bidderId);
        },
        searchText(parent, args){
            return project.searchText(args.searchTerm);
        }
    },
    Mutation: {
        postProject(parent, args){
            return project.postProject(args)
        }
    }
}

module.exports = {
    projectResolvers
}
