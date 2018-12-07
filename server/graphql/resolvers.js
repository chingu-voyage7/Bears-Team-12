const User = require ('../models/User')
const Community = require ('../models/Community')

const resolvers = {

  Query: {
    allCommunities() {
      return Community.find({})
    },
    allUsers() {
      return User.find({})
    }
  },

  Mutation: {
    createCommunity: (obj, args, context) => {
      const newCommunity = new Community({
        name: args.name,
        //owner: context.user._id,
        //createdBy: context.user._id
      })
      return newCommunity.save()
    },
    createUser: (obj, args, context) => {
      const newUser = new User({
        username: args.username
      })
      return newUser.save()
    }
  }

}

module.exports = resolvers

/* Examples for http://localhost:4000/graphql

query {
  allUsers {
    id
    username
  }
}

query {
  allCommunities {
    id
    name
  }
}

mutation {
  createUser (username: "Jordan") {
    id
    username
  }
}

mutation {
  createCommunity (name: "bears-team-12") {
    id
    name
    owner {
      id
      username
    }
    createdBy
  }
}

*/