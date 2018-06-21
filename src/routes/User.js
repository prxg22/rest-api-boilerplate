import { User, Auth } from '../domains'
import APIError from '../lib/APIError'

/**
 * User registration route
 * @function
 * @param {express.Request} req Express http request
 * @param {express.Response} res Express http response
 * @param {express.Next} next Express next function
 * @return {void}
 * @expose
 */
const register = async (req, res, next) => {
    const { body } = req
    // Check username and password


    // Call user domain register function
    try {
        if (!body || !body.username || !body.password) throw new APIError('CREDENTIALS_NOT_VALID')

        let user = null
        user = await User.register(body)

        return res.send(user)
    } catch (e) {
        return next(e)
    }

    // Send user object
}

/**
 * User logins route
 * @function
 * @param {express.Request} req Express http request
 * @param {express.Response} res Express http response
 * @param {express.Next} next Express next function
 * @return {void}
 * @expose
 */
const login = async (req, res, next) => {
    const { body } = req
    try {
        if (!body || !body.username || !body.password) res.sendStatus(400)
        const token = await User.authenticate(body)
        res.send(token)
    } catch(e) {
        next(e)
    }
}

export default router => {
    router.route('/user')
        .post(register)
        .get(Auth.authorizeMiddleware, (req, res, next) => {
            res.send(req.user)
        })

    router.route('/user/login')
        .post(login)

    return router
}
