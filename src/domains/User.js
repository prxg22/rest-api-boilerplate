import { User } from '../database'
import { Auth } from '../domains'

// $2a$12$IGjsaTLaP/c0z8Mm1P21/.xgwLLsvmqAZn7DWZmy4HC3sd2Gc.UqW

const register = async data => {
    const { username, password } = data
    let user = null

    // Hash password
    try {
        const hashedPassword = await Auth.hashPassword(password)

        // search repeated username
        const repeated = await User.findByUsername(username)

        console.log(repeated)
        if (repeated) throw new Error('duplicated username')

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
