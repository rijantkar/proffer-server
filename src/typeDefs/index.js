const { query } = require('./query');
const { projectType, bidType, userType } = require('./types');

const typeDefs = [query, projectType, bidType, userType];

module.exports = {
    typeDefs
};
