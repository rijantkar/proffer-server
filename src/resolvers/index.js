const { bidResolvers } = require('./bidResolver');
const { projectResolvers } = require('./projectResolver');
const { userResolvers } = require('./userResolver');

const resolvers = [projectResolvers,bidResolvers,userResolvers]

module.exports = {
    resolvers
}
