import { characterList } from '../mocks/data.js'

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

export { resolvers }