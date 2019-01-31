const actions = require('../actions')
const { storeUpload } = require('../utils')

const SingUp = async (_, args, context, info) => {
    //const { createReadStream } = await args.data.profile_image
    // createReadStream toma el archivo por cachitos y se lo pasa a stream
    //const stream = createReadStream()
    // cuando termine el metodo storeUpload me regresara el url de la imagen en clodunary
    //const { url } = await storeUpload(stream)
    //args.data.profile_image = url
    // ya que cargamos la imagen regresamos el objeto con la url actualizada
    return actions.createUser(args).then(
        token => { return { "message": "User created successfully", token: token } }
    ).catch(e => console.log(`No jalo porque ${e}`))
}

const SingIn = (_, args, context, info) => {
	return actions.login(args).then(
		token => { return { "message": "User logged successfully", token: token }; }
	).catch(e => e);
}

const DeleteUser = (_, args, context, info) => {
	return actions.deleteUserByAvatarName(args.avatar_name).then((user) => {
		if (!user) throw new Error("User does not exist");
		return user;
	}).catch((e) => e);
}

const UploadProduct = (_, args, context, info) => {
    return actions.createProduct(args).then(token => {
        token => { return { "message": "User created successfully", token: token } }
    }).catch(e => e)
}

const CreateOrder = (_, args, context, info) => {
    const avatar_name = actions.getUserByAvatarName(args.avatar_name)
    console.log(avatar_name)
    return actions.createOrder(args).then(token => {
        token => { return { "message": "User created successfully", token: token}}
    })
}

module.exports = {
    SingIn,
    SingUp,
    DeleteUser,
    UploadProduct,
    CreateOrder
}