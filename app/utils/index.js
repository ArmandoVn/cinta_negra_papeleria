const { getUserById } = require("../actions");
// La carpeta utils sirve para crear archivos que no donde poner exactamente
const cloudinary = require('cloudinary')
// sirve para cargar las vaiables de entorno 
const dotevn = require('dotenv')

// Por default .confg() lee el archivo .env en la raiz del proyecto
//const result = dotevn.config()

//if(result.error) throw result.error

const getUserId = (context) => {
	const Authorization = context.request.get("Authorization");
	if (Authorization) {
		const token = Authorization.replace("JWT ", "");
		const { _id } = jwt.verify(token, SECRET_KEY);
		return getUserById(_id);
	}
	throw new Error("Not authenticated");
}

// funcion que subira todo a cloudinary
/*const storeUpload = (strem) => {
    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    })

    return new Promise((resolve, reject) => {
        // function encargada de subir el cacho de stream que reciba
        const buffer = cloudinary.v2.uploader.upload_stream((error, result) => {
            if(error) reject(error)
            resolve(result)
        })
        // pipe, manda cachito por cachito al cloudinary
        stream.pipe(buffer)
    })
}
*/
module.exports = {
    //storeUpload
    getUserById
}