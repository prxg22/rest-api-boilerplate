import { User } from '../database'
import { Auth } from '../domains'

const register = async data => {
    const { username } = data
    // search repeated username
    let repeated

    try {
        repeated = await User.findByUsername(username)
    } catch (e) {
        throw e

    }
    if (repeated) throw new Error('duplicated username')


    // salvar novo usario no banco
    let user = null

    try {
        user = await User.create(data)

        // chamar metodo de Auth que cria API_TOKEN a partir do id gerado
        const token = Auth.generateUserToken(user._id)

        // se não gerar token, deletar usuário
        if (!token) {
            await user.remove()
            return
        }

        user.token = token
        await user.save()
    } catch (e) {
        throw e
    }

    return user
}

export default { register }
