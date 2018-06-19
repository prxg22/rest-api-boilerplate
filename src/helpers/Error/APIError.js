import APIErrorCode from './error.json'

/**
 * Class which insrts httpCode to Node Error objects
 * @class
 * @extends Error
 */
class APIError extends Error {
    constructor(label) {
        let apiError = APIErrorCode[label]
        if (!apiError) super(label)

        super(apiError.msg)
        this.httpCode = apiError.httpCode
    }
}

export default APIError
