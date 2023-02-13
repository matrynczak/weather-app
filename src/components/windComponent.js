export const createWindComponent = () => {
    const container = document.querySelector('.container');
    const weatherContainer = document.querySelector('.weather-container');
    
    const wind = document.createElement('div');
    wind.classList.add('wind');
    const windDesc = document.createElement('p');
    const windValue = document.createElement('span');
    windValue.classList.add('wind-value');

    windDesc.textContent = 'WIND: ';
    windValue.textContent = '--- m/s';
 
    wind.appendChild(windDesc);
    wind.appendChild(windValue);

    weatherContainer.appendChild(wind);
    container.appendChild(weatherContainer);
}

export const setWindValue = (value) => {
    const weatherContainer = document.querySelector('.weather-container');
    const wind = document.querySelector('.wind');
    const windValue = document.querySelector('.wind-value');

    windValue.textContent = `${value} m/s`;
    weatherContainer.appendChild(wind);
    wind.appendChild(windValue);
}