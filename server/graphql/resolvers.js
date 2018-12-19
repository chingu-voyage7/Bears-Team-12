const Community = require ('../models/Community')
const Subject = require ('../models/Subject')
const Article = require ('../models/Article')
const Category = require ('../models/Category')
const User = require ('../models/User')

const resolvers = {

  Query: {
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
    createSubject: (obj, args, context) => {
      const newSubject = new Subject({
        name: args.name,
        //owner: context.user._id,
        //createdBy: context.user._id
      })
      return newSubject.save()
    },
    createArticle: (obj, args, context) => {
      if (!context.user) return []
      const newArticle = new Article({
        name: args.name,
        createdBy: context.user._id
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