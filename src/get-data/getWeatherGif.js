import { apiUrl, apiKey } from "../../config/apiGiphy"

export const getWeatherGifByText = async (text) => {
    let weatherGifData = {};
    try {
        const endpoint = `${apiUrl}?api_key=${apiKey}&s=${text}`;
        const weatherGif = await fetch(endpoint);
        weatherGifData = await weatherGif.json();
    } catch (error) {
        confirm.error('ERROR: ', error)
    }
    

    const source = weatherGifData.data.images.original.url
    
    return source;
}