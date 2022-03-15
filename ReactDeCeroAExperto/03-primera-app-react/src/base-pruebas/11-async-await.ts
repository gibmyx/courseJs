import axios from "axios"
export  const getImagen = async() => {
    try {
        const apiKey = '1aRvDQc05EjVdIj5PNppdakJs1m145Ux';
        const response = await axios(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const { data } = response.data
        const { url } = data.images.original;
        return url;
    } catch (error) {
        return "No existe";
    }
}
