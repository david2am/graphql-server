import { characterList } from '../mocks/data.js'

// we have to specify where the data come from
const resolvers = {
  // special query resolver
  Query: {
    personCount: () => characterList.length,
    allCharacters: () => characterList,
    findCharacter: (_, args) => {
      const { name } = args
      return characterList.find(person => person.name.toLowerCase() === name.toLowerCase())
    }
  },

  Mutation: {
    addVotation: (_, args) => {
      const { id, vote } = args
      const found = characterList.find(person => person.id === id)

      if (!found) return null

      if (vote) found.votes.positive++
      else found.votes.negative++

      return true
    }
  },

  Character: {
    nickname: (root) => root.name.split(' ')[0]
  },

  SuccessResponse: {
    success: (root) => !!root
  }

}

export { resolvers }