// investigar que es un escalar id en graphql
 
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
    return actions.signup(args.data).then(
        token => { 
            return {"message": "User created successfully" , token: token}; 
        }
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
    return actions.createProduct(args.data).then(product => {
        if(!product) throw new Error("Product was not created!")
        return product
    }).catch(e => e)
}

const CreateOrder = async (_, args, context, info) => {
    const user = await actions.getUserByAvatarName(args.data.order_owner)
    if(!user) throw new Error("User does not exist!")
    args.data.order_owner = user._id
    return actions.createOrder(args.data).then(order => {
        if(!order) throw new Error("Order was not created")
        return order
    }).catch(e => e)
}

const AddProductToOrder = async (_, args, context, info) => {
    const { _id } = await actions.getProductByProductName(args.product_name)
    if(!_id) throw new Erorr("Product does not exist!")
    return await actions.addProductToOrder(args.id, _id)
        // returns updated order
            .then( order => {
                if(!order) throw new Error("Product didn't add")
                return order
            }).catch(e => e)
}

module.exports = {
    SingIn,
    SingUp,
    DeleteUser,
    UploadProduct,
    CreateOrder,
    AddProductToOrder
}