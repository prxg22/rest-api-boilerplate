import { User, Auth } from '../domains'

/**
 * User registration route
 * @function
 * @param {express.Request} req Express http request
 * @param {express.Response} res Express http response
 * @param {express.Next} next Express next function
 * @return {void}
 * @throws {Error} If user saving operation doesn't work
 * @expose
 */
const register = async (req, res, next) => {
    const { body } = req
    // Check username and password
    if (!body || !body.username || !body.password) res.sendStatus(400)


    // Call user domain register function
    let user = null

    try {
        user = await User.register(body)
    } catch (e) {
        return next(e)
    }

    // Send user object
    return res.send(user)
}

/**
 * User logins route
 * @function
 * @param {express.Request} req Express http request
 * @param {express.Response} res Express http response
 * @param {express.Next} next Express next function
 * @return {void}
 * @throws {Error} If user saving operation doesn't work
 * @expose
 */
const login = async (req, res, next) => {
    const { body } = req
    try {
        if (!body || !body.username || !body.password) res.sendStatus(400)
        const token = User.auth()
        res.session.set('token', token)
    } catch(e) {
        next(e)
    }
}

export default router => {
    router.route('/user')
        .post(register)
        .post(login)

    return router
}
