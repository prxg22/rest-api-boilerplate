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

export default mongoose.model('user', UserSchema)
