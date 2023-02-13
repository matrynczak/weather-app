import { fahrenheitToCelsius } from "../utils/tempConversion";

export const createTemperatureComponent = () => {
    const container = document.querySelector('.container');
    const weatherContainer = document.querySelector('.weather-container');
    
    const temperature = document.createElement('div');
    temperature.classList.add('temperature');
    const tempDesc = document.createElement('p');
    const tempValue = document.createElement('span');
    tempValue.classList.add('temp-value');

    tempDesc.textContent = 'TEMPERATURE: ';
    tempValue.textContent = '--- °C'
 
    temperature.appendChild(tempDesc);
    temperature.appendChild(tempValue);

    weatherContainer.appendChild(temperature);
    container.appendChild(weatherContainer);
}

export const setTempValue = (value) => {
    const celsiusValue = fahrenheitToCelsius(value);
    const weatherContainer = document.querySelector('.weather-container');
    const temperature = document.querySelector('.temperature');
    const tempValue = document.querySelector('.temp-value');

    tempValue.textContent = value === '---' ? '---' : `${celsiusValue} °C`;
    weatherContainer.appendChild(temperature);
    temperature.appendChild(tempValue);
}