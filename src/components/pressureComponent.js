export const createPressureComponent = () => {
    const container = document.querySelector('.container');
    const weatherContainer = document.querySelector('.weather-container');
    
    const pressure = document.createElement('div');
    pressure.classList.add('pressure');
    const pressureDesc = document.createElement('p');
    const pressureValue = document.createElement('span');
    pressureValue.classList.add('pressure-value');

    pressureDesc.textContent = 'PRESSURE: ';
    pressureValue.textContent = '--- hPa';
 
    pressure.appendChild(pressureDesc);
    pressure.appendChild(pressureValue);

    weatherContainer.appendChild(pressure);
    container.appendChild(weatherContainer);
}

export const setPressureValue = (value) => {
    const weatherContainer = document.querySelector('.weather-container');
    const pressure = document.querySelector('.pressure');
    const pressureValue = document.querySelector('.pressure-value');

    pressureValue.textContent = `${value} hPa`;
    weatherContainer.appendChild(pressure);
    pressure.appendChild(pressureValue);
}