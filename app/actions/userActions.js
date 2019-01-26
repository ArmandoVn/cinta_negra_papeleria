const User = require('../models/Users')

const createUser = (data) => {
    return User.create(data)
}

const getUserByUserName = (user_name) => {
    return User.findOne({
        user_name: user_name
    })
}

const getUserById = (id) => {
    return User.findOne({
        _id: id,
        is_active: true
    })
}

//arrow : Prototipe
const getAllUsers = () => {
    return User.find({
        is_active: true
    })
}

const deleteUserById = (id) => {
    return User.findOneAndUpdate({
        _id: id,
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
    getUserByUserName,
    getUserById,
    deleteUserById
}