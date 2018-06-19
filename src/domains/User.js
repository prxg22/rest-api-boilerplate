import { User } from '../database'
import { Auth } from '../domains'
import { APIError } from '../helpers/Error'

/**
 * Creates user and return it
 * @function
 * @param {Object} data
 * @return {UserModel}
 * @throws {APIError} if username has already been used
 * @expose
 */
const register = async data => {
    const { username, password } = data
    let user = null

    // Hash password
    try {
        const hashedPassword = await Auth.hashPassword(password)

        // search repeated username
        const repeated = await User.findByUsername(username)

        if (repeated) throw new APIError('DUPLICATED_USER')

        // salvar novo usario no banco
        user = await User.create({
            username,
            password: hashedPassword
        })

    } catch (e) {
        throw e
    }

    return user
}

/**
 * Authenticates user and returns JWT token which should be
 * transported in future requests
 * @function
 * @param {Object} data
 * @return {UserModel}
 * @throws {APIError} if username has already been used
 * @expose
 */
const authenticate = async data => {
    const { username, password } = data

    try {
        if (!username || !password) throw new Error('username and password needed')

        const user = await User.findByUsername(username)
        if (!user) throw new Error('user not found')
        if (!Auth.comparePassword(password, user.password)) throw new Error('wrong password')

        return Auth.authenticate(user)
    } catch (e) {
        throw e
    }
}

export default {
    register,
    authenticate
}
