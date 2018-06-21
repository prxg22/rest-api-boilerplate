/**
 * @author Paulo Ricardo Xavier Giusti
 */
import * as fs from 'fs'

/**
 * @module APIError
 */

/**
 * API error description type
 * @typedef {Object} APIErrorDescription
 * @property {string} msg Error msg
 * @property {number} httpCode Response HTTP status code
 */

/**
 * Array of objects
 * @type Array<APIErrorDescription>
 * @private
 */
let APIErrorsMap = []

/**
 * Represents an API error with HTTP status code
 * @class
 * @alias: APIError
 * @extends Error
 */
class APIError extends Error {
    /**
     * @param {string} label
     */
    constructor(label) {
        let apiError = APIErrorsMap[label]
        if (!apiError) super(label)

        super(apiError.msg)
        this.httpCode = apiError.httpCode
    }

    /**
     * Error handler middleware
     * @param {APIError|Error} error
     * @param {express.Request} req
     * @param {express.Response} res
     * @param {express.Next} next
     * @static
     */
    static errorHandler = (error, req, res, next) => {
        let err = APIErrorsMap.SYS_ERROR

        if (error.httpCode) err = error

        res.status(err.httpCode).send(err.message)
    }

    /**
     * Opens file in `path` and stores array of `APIErrorDescription`
     * @param {string} path path to json document which contain the `APIErrorDescription` array
     * @static
     */
    static setAPIErrors = (path) => {
        try {
            const file = fs.readFileSync(`${global.__baseUrl}/${path}`)
            if (!file) throw new Error('Something got wrong with APIError confi file on:\n ${path}')

            APIErrorsMap = JSON.parse(file)
        } catch(e) {
            throw e
        }
    }

}

export default APIError
