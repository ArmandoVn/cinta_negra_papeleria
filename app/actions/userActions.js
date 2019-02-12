const User = require('../models/Users')

// valid method
const createUser = (data) => {
    return User.create(data)
}

// valid method
const getUserByAvatarName = (avatar_name) => {
    return User.findOne({
        avatar_name: avatar_name,
        is_active: true
    })
}

// valid method
const getUserByEmail = (email) => {
    return User.findOne({
        email: email,
        is_active: true
    })
}

// valid method
//arrow : Prototipe
const getAllUsers = () => {
    return User.find()
}

// valid method
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
    deleteUserByAvatarName,
    getUserByEmail
}