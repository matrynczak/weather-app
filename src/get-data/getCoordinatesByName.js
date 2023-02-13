import { apiGeoUrl, appId } from "../../config/apiWeather";

export const getCoordinatesByName = async (name) => {
    let cityData = {};
    try {
        const endpoint = `${apiGeoUrl}?q=${name}&limit=1&appid=${appId}`;
        const city = await fetch(endpoint);
        cityData = await city.json();
    } catch (error) {
        console.error('ERROR: ', error);
    }
    
    const isCity = cityData.length > 0;
    const x = isCity ? cityData[0].lat : '';
    const y = isCity ? cityData[0].lon : '';

    return {isCity, x : x, y: y};
}