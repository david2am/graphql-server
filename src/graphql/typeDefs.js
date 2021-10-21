import { gql } from 'apollo-server'

// We have the data definitions
const typeDefs = gql`
  # Data Description
  type Vote {
    positive: Int!
    negative: Int!
  }
  
  type Character {
    id: ID!
    name: String!
    nickname: String!
    description: String!
    category: String!
    picture: String!
    lastUpdated: String!
    country: String
    votes: Vote
  }

  # Query Description
  type Query {
    personCount: Int!
    CharactersQuery: [Character]!
    findCharacter(name: String!): Character
  }

`

export { typeDefs }