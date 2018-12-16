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
  Subjects: [Subject]
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
  username: String
  name: String
  photo: String
  bio: String
  email: String
  location: String
  dateCreated: String
  lastUpdated: String
}

type Query {
  allUsers: [User]
  allCommunities: [Community]
}

type Mutation {
  createCommunity(name: String!): Community
  createUser(username: String!): User
}

`

module.exports = typeDefs