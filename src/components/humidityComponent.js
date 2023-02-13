export const createHumidityComponent = () => {
    const container = document.querySelector('.container');
    const weatherContainer = document.querySelector('.weather-container');
    
    const humidity = document.createElement('div');
    humidity.classList.add('humidity');
    const humidityDesc = document.createElement('p');
    const humidityValue = document.createElement('span');
    humidityValue.classList.add('humidity-value');

    humidityDesc.textContent = 'HUMIDITY: ';
    humidityValue.textContent = '--- %';
 
    humidity.appendChild(humidityDesc);
    humidity.appendChild(humidityValue);

    weatherContainer.appendChild(humidity);
    container.appendChild(weatherContainer);
}

export const setHumidityValue = (value) => {
    const weatherContainer = document.querySelector('.weather-container');
    const humidity = document.querySelector('.humidity');
    const humidityValue = document.querySelector('.humidity-value');

    humidityValue.textContent = `${value} %`;
    weatherContainer.appendChild(humidity);
    humidity.appendChild(humidityValue);
}