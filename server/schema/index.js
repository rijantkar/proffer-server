const graphql = require('graphql');
const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLFloat,
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    shortIntroduction: { type: GraphQLString },
    reviews: { type: new GraphQLList(GraphQLString)},
    ratings: { type: GraphQLFloat},
    email: { type: GraphQLString},
    contact: { type: GraphQLString},
    bankName: { type: GraphQLString},
    bankAccountNumber: { type:  GraphQLInt},
    bankBSBNumber: { type: GraphQLInt},
    projectOwned: {
      type: new GraphQLList(ProjectType),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3001/users/${parentValue.id}/users`)
          .then(res => res.data)
      }
    },
    projectOwned: {
      type: new GraphQLList(ProjectType),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3001/users/${parentValue.id}/users`)
          .then(res => res.data)
      }
    },
    createdDateTime: { type: GraphQLString}
  })
});

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    description: { type: GraphQLString },
    skills: { type: GraphQLList(GraphQLString)},
    budget: { type: GraphQLInt},
    budgetType: { type: GraphQLString},
    sellerId : { type: UserType},
    bids: { type: GraphQLList(BidType)},
    allocatedTo: { type: UserType},
    allocatedPrice: { type: GraphQLFloat},
    createdDateTime: { type: GraphQLString},
    expiryDateTime: { type: GraphQLString},
    status: { type: GraphQLString}
  })
});

const BidType = new GraphQLObjectType({
  name: 'Bid',
  fields: () => ({
    id: { type: GraphQLID},
    user: { type: UserType },
    project: { type: ProjectType },
    bidderQuote: { type: GraphQLInt },
    createdDateTime: { type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3001/projects/${args.id}`)
          .then(resp => resp.data);
      }
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3001/users/${args.id}`)
          .then(resp => resp.data);
      }
    },
    bid: {
      type: BidType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3001/bids/${args.id}`)
          .then(resp => resp.data);
      }
    }
  }
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLInt },
        companyId: { type: GraphQLString }
      },
      resolve(parentValue, { firstName, age, companyId }) {
        return axios.post('http://localhost:3000/users', { firstName, age, companyId })
          .then(res => res.data);
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { id }) {
        return axios.delete(`http://localhost:3000/users/${id}`)
          .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  mutation,
  query: RootQuery
});
