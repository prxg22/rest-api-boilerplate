import express from 'express'
import bodyparser from 'body-parser'

import { Database as database } from './helpers'
import APIError from './lib/APIError'
import routes from './routes'

const app = express()

const port = process.env.PORT || 3000

const init = async () => {
    global.__baseUrl = __dirname
    try {
        await database.connect()
        APIError.setAPIErrors('error.json')
    } catch (e) {
        console.error(e)
        return
    }

    app.use(bodyparser.urlencoded({ extended: true }))
    app.use(bodyparser.json())
    app.use(routes)
    app.use(APIError.errorHandler)

    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
}

init()
