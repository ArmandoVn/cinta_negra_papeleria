const actions = require('../actions');

const prueba = (_, args, context, info) => {
    return 'Wolcome to Karmin\'s Stationary'
}

// _: info del servidor de graph
// args: recibe datos
// context: recibe metadatos
// info: query o mutation ejecutado
const Users = (_, args, context, info) => {
    return actions.getAllUsers()
                    .then(users => users)
                    .catch(e => e)
}

const User = (_, args, context, info) => {
    return actions.getUserByAvatarName(args.avatar_name)
                    .then((user) => {
                        if(!user) throw new Error("User does not exist")
                        return user
                    }).catch(e => e)
}

const Products = (_, args, context, info) => {
    return actions.getAllProducts()
                    .then(products => products)
                    .catch(e => e)
}

const Product = (_, args, context, info) => {
    return actions.getProductById(args.id)
                    .then((product) => {
                        if(!product) throw new Error("Product does not exist")
                        return product
                    }).catch(e => e)
}

const Orders = (_, args, context, info) => {
    return actions.getAllOrders()
                    .then(orders => orders)
                    .catch(e => e)
}

const Order = (_, args, context, info) => {
    return actions.getOrderById(args.id)
        .then(order => {
            if(!order) throw new Error("Order does not exist")
            return order
        }).catch(e => e)
}

const UserOrders = (_, args, context, info) => {
    return actions.getOrdersByAvatarName(args.avatar_name)
        .then(order => { order => order })
        .catch(e => e)
}

module.exports = {
    prueba,
    Users,
    User,
    Product,
    Products,
    Order,
    Orders,
    UserOrders
};