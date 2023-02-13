import { apiUrl, appId } from "../../config/apiWeather"

export const getFiveDaysWeatherByCoordinates = async (xCoordinate, yCoordinate) => {
    let weatherForecastData = {};
    try {
        const endpoint = `${apiUrl}/forecast?lat=${xCoordinate}&lon=${yCoordinate}&appId=${appId}`;
        const weather = await fetch(endpoint);
        weatherForecastData = await weather.json();
    } catch (error) {
        console.error('ERROR: ', error);
    }
    
    const forecastData = weatherForecastData.list.map(day => (
        {
            dt: day.dt, 
            main: day.main, 
            wind: day.wind, 
            weatherDesc: day.weather[0]
        }
    ));
    return forecastData;
}