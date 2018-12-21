const GraphQLScalarType = require('graphql').GraphQLScalarType
const Kind = require('graphql/language').Kind

const { User, Users } = require ('../models/User')

const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return value
    },
    serialize(value) {
      return value
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return ast.value
      }
      return null
    }
  }),

  Query: {
    async allUsers() {
      const users = await User.fetchAll().then((users) => {
        return users.toJSON()
      })
      return users
    },

    async user(_, { displayName }) {
      const user = await User.where('displayName', displayName).fetch()
        .then((user) => {
          if (!user) return
          return user.toJSON()
        })

      return user
    }
    /**
    allCommunities() {
      return Community.find({})
    },
    community(obj, args) {
      return Community.findById(args.id)
    },
    allSubjects() {
      return Subject.find({})
    },
    subject(obj, args) {
      return Subject.findById(args.id)
    },
    allArticles() {
      return Article.find({}, null, {sort: {dateCreated: -1}})
    },
    article(obj, args) {
      return Article.findById(args.id)
    },
    allCategories() {
      return Category.find({})
    },
    category(obj, args) {
      return Category.findById(args.id)
    },
    allUsers() {
      return User.find({})
    },
    user(obj, args) {
      return User.findById(args.id)
    },
    */
  },

  Mutation: {
    async createUser(obj, args, context) {
      const user = new User({
        displayName: args.displayName,
        email: args.email,
      }).save()
        .then((user) => {
          return user.toJSON()
        })
      return user
    },

    /**
     * @param {*} obj 
     * @param {*} param 
     * @param {*} context
     * ToDo: It only returns fields that were modified and the id 
     */
    async updateUser(obj, { input }, context) {
      const user = await User.where('id', input.id).fetch()
        .then((user) => {
          return user
        })
      
      const updatedUser = user.save({
          displayName: input.displayName,
          email: input.email,
          location: input.location,
          facebookId: input.facebookId,
          googleId: input.googleId,
        })
          .then((saved) => {
            return saved.toJSON()
          })

      console.log(`Updated user ${updatedUser.displayName}`)
      return updatedUser
    },

    /**
     * @param {*} obj 
     * @param {*} param1 
     * @param {*} context
     * ToDo: Even though the mutation works, it should return
     * a more meaningful message
     */
    async deleteUser(obj, { id }, context) {
      const user = User.where('id', id).destroy()
        .then(() => {
          return deletedUser.toJSON()
        })
      return user
    }

    /**
    createCommunity: (obj, args, context) => {
      const newCommunity = new Community({
        name: args.name,
        //owner: context.user._id,
        //createdBy: context.user._id
      })
      return newCommunity.save()
    },
    createSubject: (obj, args, context) => {
      const newSubject = new Subject({
        name: args.name,
        //owner: context.user._id,
        //createdBy: context.user._id
      })
      return newSubject.save()
    },
    createArticle: (obj, args, context) => {
      const newArticle = new Article({
        name: args.name
      })
      return newArticle.save()
    },
    createCategory: (obj, args, context) => {
      const newCategory = new Category({
        name: args.name
      })
      return newCategory.save()
    },
    createUser: (obj, args, context) => {
      const newUser = new User({
        username: args.username
      })
      return newUser.save()
    }
    */
  }
}

module.exports = resolvers

/* Examples for http://localhost:4000/graphql

query {
  allUsers {
    id
    displayName
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
    displayName
  }
}

mutation {
  createCommunity (name: "bears-team-12") {
    id
    name
    owner {
      id
      displayName
    }
    createdBy
  }
}

*/