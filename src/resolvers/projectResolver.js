const { project } = require('../models');

const projectResolvers = {
    Query: {
        projects() {
            return project.list()
        }
    }
}

module.exports = {
    projectResolvers
}
