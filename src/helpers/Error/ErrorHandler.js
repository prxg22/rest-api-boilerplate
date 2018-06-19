import APIError from './APIError'
import ERROR from './error.json'

/**
 * Error handler middleware
 * @function
 * @param {APIError|Error} error
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.Next} next
 * @return {void}
 * @expose
 */
export default (error, req, res, next) => {
    let err = ERROR.SYS_ERROR

    if (error.httpCode) err = error

    res.status(err.httpCode).send(err.msg)
}
