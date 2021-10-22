import { gql } from 'apollo-server'

// We have the data definitions
const typeDefs = gql`
  # Data Description
  type Vote {
    positive: Int!
    negative: Int!
  }
  
  type Character {
    id: Int!
    name: String!
    nickname: String!
    description: String!
    category: String!
    picture: String!
    lastUpdated: String!
    country: String
    votes: Vote
  }

  type SuccessResponse {
    success: Boolean!
  }

  # Query Description
  type Query {
    personCount: Int!
    allCharacters: [Character]!
    findCharacter(name: String!): Character
  }

  type Mutation {
    addVotation(
      id: Int!
      vote: Boolean!
    ): SuccessResponse
  }

`

export { typeDefs }