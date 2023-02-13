import { createCityInput } from "../components/listOfCitiesSelectList";
import { getFiveDaysWeatherByCoordinates } from "../get-data/getFiveDaysWeatherData";
import { createSingleDayForecastComponent, setLongTermForecast, hideForecast } from "../components/singleDayForecastComponent";
import { displayLoader, hideLoader } from "../components/loader";
import { getCoordinatesByName } from "../get-data/getCoordinatesByName";
import { displayCityError, hideCityError } from "../components/cityError";


export const createLongTermWeatherPage = () => {
    const container = document.querySelector('.container');
    container.replaceChildren();

    createCityInput();
    const cityName = document.querySelector('#city');
 
    const weatherContainer = document.createElement('div');
    weatherContainer.classList.add('weather-container');
    container.appendChild(weatherContainer);

    createSingleDayForecastComponent();

    cityName.addEventListener('change', async () => {

        if(cityName.value === '') {
            hideForecast();
            return;
        }

        const coordinatesData = await getCoordinatesByName(cityName.value);
        
        if(!coordinatesData.isCity) {
            displayCityError();
        }
        else {
            hideCityError();
            displayLoader();
            const weather = await getFiveDaysWeatherByCoordinates(coordinatesData.x, coordinatesData.y);
            hideLoader();
            setLongTermForecast(weather);
        }        
    })
}