import { gql, ApolloServer } from 'apollo-server'

const characterList =[
  {
    id: 1,
    name: 'Kanye West',
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncu. Eu velit...',
    category: 'entertainment',
    picture: 'kanye',
    country: 'US',
    lastUpdated: '2020-03-10T23:08:57.892Z',
    votes: {
        positive: 23,
        negative: 36
    }
  },
  {
    id: 2,
    name: 'Mark Zuckerberg',
    description: 'Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004.',
    category: 'business',
    picture: 'mark',
    country: 'US',
    lastUpdated: '2021-02-14T23:10:19.134Z',
    votes: {
        positive: 418,
        negative: 324
    }
  },
  {
    id: 3,
    name: 'Cristina Fernández de Kirchner',
    description: 'Her first term of office started with a conflict with the agricultural sector, and her proposed taxation system was rejected.',
    category: 'politics',
    picture: 'cristina',
    country: 'AR',
    lastUpdated: '2020-12-10T23:41:07.120Z',
    votes: {
        positive: 45,
        negative: 97
    }
  },
  {
    id: 4,
    name: 'Malala Yousafzai',
    description: 'The daughter of educational activist Ziauddin, Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region.',
    category: 'politics',
    picture: 'malala',
    lastUpdated: '2020-12-10T23:41:07.120Z',
    votes: {
        positive: 18,
        negative: 3
    }
  }
]

/**
 * METADATA
 * First: We define our data
 * Second: We have to say where comes from or where it resolves
 */

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

// we have to specify where the data come from
const resolvers = {
  // special query resolver
  Query: {
    personCount: () => characterList.length,
    CharactersQuery: () => characterList,
    findCharacter: (_, args) => {
      const { name } = args
      return characterList.find(person => person.name.toLowerCase() === name.toLowerCase())
    }
  },

  Character: {
    nickname: (root) => root.name.split(' ')[0]
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => console.log(`Server ready at ${url}`))