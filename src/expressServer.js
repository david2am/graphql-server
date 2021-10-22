import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

function staticProvider () {
  const __dirname = dirname(fileURLToPath(import.meta.url))

  const PORT = process.env.PORT | 5000
  const app = express()

  app.use('/images', express.static(__dirname + '/assets'))

  app.listen(PORT, () => console.log(`Static file server running at ${PORT}`))
}

export { staticProvider }