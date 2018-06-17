import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

/**
 * JWT secret word to generate tokens
 * @type {string}
 */
const jwtSecret = process.env.JWT_SECRET || 'kitty-cat'

/**
 * Expiration time to tokens
 * @type {number}
 */
const expiration = 86400 // 24h

/**
 * bcrypt salt rounds for password and tokens generation
 * @type {number}
 */
const saltRounds = 12

/**
 * min password length
 * @type {number}
 */
const passwordLength = 8

/**
 * Hash password
 * @function
 * @param {string} password Password to be hashed
 * @returns {string} hashed password
 * @throws {Error} If no passowrd is given
 * @expose
 */
const hashPassword = password => {
    // validate password
    if (!password || password.length < passwordLength) throw new Error('Password not valid!')

    let hash

    // hash password with bcryptjs
    try {
        hash = bcrypt.hash(password, saltRounds)
    } catch (e) {
        throw e
    }

    return hash
}

/**
 * Generates JWT token from user id
 * @function
 * @param {string} _id User's id
 * @returns {string} JWT token
 * @throws {Error} If no passowrd is given
 * @expose
 */
const generateToken = _id => {
    if (!_id) return null

    const token = jwt.sign({ _id }, jwtSecret, { expiresIn: expiration })

    return token
}

export default {
    hashPassword,
    generateUserToken,
}
