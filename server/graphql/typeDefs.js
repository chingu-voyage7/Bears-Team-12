const typeDefs = `

type Community {
  id: ID
  name: String
  description: String
  body: String
  categories: [Category]
  admins: [User]
  members: [User]
  followers: [User]
  subjects: [Subject]
  createdBy: User
  createdOn: String
  lastUpdated: String
}

type Subject {
  id: ID
  name: String
  description: String
  body: String
  categories: [Category]
  followers: [User]
  articles: [Article]
  createdBy: User
  createdOn: String
  lastUpdated: String
}

type Article {
  id: ID
  name: String
  description: String
  body: String
  categories: [Category]
  likes: [User]
  createdBy: User
  createdOn: String
  lastUpdated: String
  master: String
}

type Category {
  id: ID
  name: String
}

type User {
  id: ID
  facebookId: String
  googleId: String
  displayName: String
  familyName: String
  givenName: String
  photo: String
  bio: String
  email: String
  location: String
  dateCreated: String
  lastUpdated: String
}

type Query {
  allCommunities: [Community]
  community: Community
  allSubjects: [Subject]
  subject: Subject
  allArticles: [Article]
  article: Article
  allCategories: [Category]
  category: Category
  allUsers: [User]
  user: User
}

type Mutation {
  createCommunity(name: String!): Community
  createSubject(name: String!): Subject
  createArticle(name: String!): Article
  createCategory(name: String!): Category
  createUser(username: String!): User
}

`

module.exports = typeDefs

/*

type Mutation {
  createCommunity(name: String!): Community
  updateCommunity(id: String!): Community
  createSubject(name: String!): Subject
  updateSubject(id: String!): Subject
  createArticle(name: String!): Article
  updateArticle(id: String!): Article
  createCategory(name: String!): Category
  updateCategory(id: String!): Category
  createUser(username: String!): User
  updateUser(id: String!): User
}

*/