const { project } = require('../models');

const projectResolvers = {
    Query: {
        projects() {
            return project.list()
        },
        findProject(parent, args){
            return project.find(args.id)
        },
        findUserProjects(parent, args){
            return project.findUserProjects(args.sellerId)
        },
        findAllocatedProjects(parent, args){
            return project.findAllocatedProjects(args.bidderId);
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
