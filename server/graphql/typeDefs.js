const typeDefs = `

type User {
  id: ID
  username: String
  firstName: String
  lastName: String
  createdCommunities: [Community]
  memberships: [Community]
  dateCreated: String
}

type Community {
  id: ID
  name: String
  owner: User
  admins: [User]
  members: [User]
  createdBy: String
  dateCreated: String
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