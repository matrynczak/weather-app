import { createCityInput } from "../components/listOfCitiesSelectList";
import { getCurrentWeatherByCoordinates } from "../get-data/getCurrentWeather";
import { createTemperatureComponent, setTempValue } from "../components/temperatureComponent";
import { createHumidityComponent, setHumidityValue } from "../components/humidityComponent";
import { createPressureComponent, setPressureValue } from "../components/pressureComponent";
import { createWindComponent, setWindValue } from "../components/windComponent";
import { createGifComponent, setGifValue } from "../components/giphyComponent";
import { getWeatherGifByText } from "../get-data/getWeatherGif";
import { displaySmallLoader } from "../components/loader";
import { displayCityError, hideCityError } from "../components/cityError";
import { getCoordinatesByName } from "../get-data/getCoordinatesByName";

export const createCurrentWeatherPage = () => {
    const container = document.querySelector('.container');
    container.replaceChildren();

    createCityInput();
    const cityName = document.querySelector('#city');

    const weatherContainer = document.createElement('div');
    weatherContainer.classList.add('weather-container');
    container.appendChild(weatherContainer);

    createGifComponent();
    createTemperatureComponent();
    createHumidityComponent();
    createPressureComponent();
    createWindComponent();

    cityName.addEventListener('change', async () => {
        displaySmallLoader();

        if(cityName.value === '') {
            setTempValue('---');
            setHumidityValue('---');
            setPressureValue('---');
            setWindValue('---');
            return;
        }

        const coordinatesData = await getCoordinatesByName(cityName.value);
        if(!coordinatesData.isCity) {
            displayCityError();
        }
        else {
            hideCityError();

            const weather = await getCurrentWeatherByCoordinates(coordinatesData.x, coordinatesData.y);
            const keywordOfWeatherGif = `weather ${weather.weatherDesc.description}`;
            const gifSrc = await getWeatherGifByText(keywordOfWeatherGif);
    
            setGifValue(weather.weatherDesc.description, gifSrc);
            setTempValue(weather.main.temp);
            setHumidityValue(weather.main.humidity);
            setPressureValue(weather.main.pressure);
            setWindValue(weather.wind.speed);
        }
    })
}
