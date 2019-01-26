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
                    .catch(e => e);
}

module.exports = {
    prueba,
    Users
};