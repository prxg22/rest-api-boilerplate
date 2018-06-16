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

    // Get username and password
    const { password, username } = body

    // Hash password
    let hashedPassword

    try {
        hashedPassword = await Auth.hashPassword(password)
    } catch (e) {
        return next(e)
    }

    // Call user domain register function
    let user = null

    try {
        user = await User.register({
         username,
         password: hashedPassword,
        })
    } catch (e) {
        return next(e)
    }

    console.log(`user ${user}`)
    // Send user object
    return res.send(user)
}

export default router => {
    router.route('/user')
        .post(register)

    return router
}
