import { apiUrl, appId } from "../../config/apiWeather"

export const getCurrentWeatherByCoordinates = async (xCoordinate, yCoordinate) => {
    let currentWeatherData = {};
    try {
        const endpoint = `${apiUrl}/weather?lat=${xCoordinate}&lon=${yCoordinate}&appId=${appId}`;
        const currentWeather = await fetch(endpoint);
        currentWeatherData = await currentWeather.json();
    } catch (error) {
        console.error('ERROR: ', error);
    }
    
    const currentWeatherConditions = { 
        main: currentWeatherData.main,
        wind: currentWeatherData.wind,
        weatherDesc: currentWeatherData.weather[0]
    }
    return currentWeatherConditions;
}