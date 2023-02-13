import { getDateFromTimestamp } from "../utils/timestampConversion";
import { fahrenheitToCelsius } from "../utils/tempConversion";
import { setWeatherIconByDescription } from "../utils/setWeatherIcon";

export const createSingleDayForecastComponent = () => {
    const weatherContainer = document.querySelector('.weather-container');
    const daysList = document.createElement('ul');
    daysList.classList.add('days-list');
    daysList.textContent = 'To get the data, please select the city first.'

    weatherContainer.appendChild(daysList);
}

export const setLongTermForecast = (weatherData) => {
    const daysList = document.querySelector('.days-list');
    daysList.textContent = '';
    weatherData.forEach(day => {
        const singleDay = document.createElement('li');
        const descContainer = document.createElement('div');
        descContainer.classList.add('desc-container');

        const dateContainer = document.createElement('div');
        const dateDay = document.createElement('p');
        const dateHour = document.createElement('p');
        dateContainer.classList.add('long-term-date');
        dateContainer.appendChild(dateDay);
        dateContainer.appendChild(dateHour);
        
        const weatherIconAndDesc = document.createElement('div');
        weatherIconAndDesc.classList.add('desc-icon-container');

        const description = document.createElement('p');
        description.classList.add('long-term-desc');

        const weatherIcon = document.createElement('img');
        weatherIcon.classList.add('weather-icon');
        weatherIcon.setAttribute('src', setWeatherIconByDescription(day.weatherDesc.description));
        weatherIconAndDesc.appendChild(description);
        weatherIconAndDesc.appendChild(weatherIcon);
        weatherIcon.setAttribute('alt', 'Icon of the weather conditions.')

        const weatherMetrics = document.createElement('div');
        weatherMetrics.classList.add('weather-metrics');

        const tempContainer = document.createElement('div');
        const temp = document.createElement('p');
        const tempValue = document.createElement('p');
        temp.textContent = `Temperature`;
        tempValue.textContent = `${fahrenheitToCelsius(day.main.temp)} °C`
        tempContainer.appendChild(temp);
        tempContainer.appendChild(tempValue);

        const windContainer = document.createElement('div');
        const wind = document.createElement('p');
        const windValue = document.createElement('p');
        wind.textContent = `Wind`;
        windValue.textContent = `${day.wind.speed} m/s`;
        windContainer.appendChild(wind);
        windContainer.appendChild(windValue);

        const humidityContainer = document.createElement('div');
        const humidity = document.createElement('p');
        const humidityValue = document.createElement('p');
        humidity.textContent = `Humidity`;
        humidityValue.textContent = `${day.main.humidity} %`;
        humidityContainer.appendChild(humidity);
        humidityContainer.appendChild(humidityValue);

        weatherMetrics.appendChild(tempContainer);
        weatherMetrics.appendChild(windContainer);
        weatherMetrics.appendChild(humidityContainer);

        dateDay.textContent = `${getDateFromTimestamp(day.dt)[0]}`;
        dateHour.textContent = `${getDateFromTimestamp(day.dt)[1]}`;
        description.textContent = `${day.weatherDesc.description}`;
        descContainer.appendChild(dateContainer);

        descContainer.appendChild(weatherIconAndDesc);
        singleDay.appendChild(descContainer);
        singleDay.appendChild(weatherMetrics);

        daysList.appendChild(singleDay);
    })
}

export const hideForecast = () => {
    const daysList = document.querySelector('.days-list');
    daysList.textContent = 'To get the data, please select the city first.'
}