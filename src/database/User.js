import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    token: String,
    reseToken: String,
    expirationToken: Date
}, { timestamps: true })


/**
 * Finds user by username
 * @function
 * @param {string} username User username
 * @return {!UserModel}
 * @throws {Error} If mongoose returns error
 * @expose
 */
UserSchema.statics.findByUsername = async function(username) {
    let user = null

    try {
        user = this.findOne({ username })
    } catch (e) {
        throw e
    }

    return user
}


//
// Const all = async () => {
//     Let users
//
//     Try {
//         Users = await UserModel.find({ deleted: false, edited: false })
//     } catch (e) {
//         Throw e
//     }
//
//     Return users
// }
//
// Const del = async (_id) => {
//     Let user
//
//     Try {
//         User = await UserModel.findById({ _id, deleted: false, edited: false })
//         If (!user) throw new Error(`Income id (${_id}) don't exist`)
//     } catch(e) {
//         Throw e
//     }
//     Try {
//         User._deleted = true
//
//         Await user.save()
//     } catch (e) {
//         Throw e
//     }
//
//     Return user
// }
//
// Const edit = async (_id, { value, desc, date }) => {
//     Try {
//         Var user = await UserModel.findById({ _id, deleted: false, edited: false })
//     } catch (e) {
//         Throw e
//     }
//
//     Const newIncome = {
//         Value: value || user.value,
//         Desc: desc || user.desc,
//         Date: date || user.date,
//     }
//
//     User.edited = true
//
//     Try {
//         Await user.save()
//         User = await save(newIncome)
//     } catch (e) {
//         Throw e
//     }
//
//     Return user
// }

export default mongoose.model('user', UserSchema)
