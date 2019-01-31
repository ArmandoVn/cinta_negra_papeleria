const User = require('../models/Users')

const createUser = (data) => {
    return User.create(data)
}

const getUserByAvatarName = (avatar_name) => {
    return User.findOne({
        avatar_name: avatar_name,
        is_active: true
    })
}

//arrow : Prototipe
const getAllUsers = () => {
    return User.find()
}

const deleteUserByAvatarName = (avatar_name) => {
    return User.findOneAndUpdate({
        avatar_name: avatar_name,
        is_active: true
    },
    {
        $set: {
            is_active: false
        }
    },
    {
        new: true
    })
}

module.exports = {
    createUser,
    getAllUsers,
    getUserByAvatarName,
    deleteUserByAvatarName
}