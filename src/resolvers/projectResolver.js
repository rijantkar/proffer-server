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
            console.log('createProject '+deepClone(args));
            return project.postProject(deepClone(args))
        }
    }
}

module.exports = {
    projectResolvers
}
