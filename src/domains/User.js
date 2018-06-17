import { User } from '../database'
import { Auth } from '../domains'

const register = async data => {
    const { username, password } = data
    let user = null

    // Hash password
    try {
        const hashedPassword = await Auth.hashPassword(password)

        // search repeated username
        const repeated = await User.findByUsername(username)

        if (repeated) throw new Error('duplicated username')

        // salvar novo usario no banco
        user = await User.create({ username, password: hashPassword })

    } catch (e) {
        throw e
    }

    return user
}

export default { register }
