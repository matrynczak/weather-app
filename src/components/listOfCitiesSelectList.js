import { listOfCities } from "../constants/citiesList";

const container = document.querySelector('.container');

export const createCityInput = () => {
    const cityInputContainer = document.createElement('div');
    const cityInput = document.createElement('input');
    cityInputContainer.classList.add('city-container');
    const cityLabel = document.createElement('label');
    cityLabel.textContent = 'Type the city you are looking for: ';
    cityLabel.setAttribute('for', 'city');

    cityInput.setAttribute('id', 'city');
    cityInput.setAttribute('name', 'city');
    cityInput.setAttribute('placeholder', 'for example: london')

    const cityError = document.createElement('p');
    cityError.classList.add('city-error');
    cityError.classList.add('error-hidden');
    cityError.textContent = 'No such city. Please type correct name.'

    cityInputContainer.appendChild(cityLabel);
    cityInputContainer.appendChild(cityInput);
    cityInputContainer.appendChild(cityError);
    container.appendChild(cityInputContainer);
}

//TODO old version with the list of cities

//export const createCityOptionsList = () => {
//    const selectContainer = document.createElement('div');
//    selectContainer.classList.add('select-city-container');
//    const selectCityLabel = document.createElement('label');
//    selectCityLabel.textContent = 'Select city from the list ';
//    selectCityLabel.setAttribute('for', 'city');

//    const selectCityList = document.createElement('select');
//    selectCityList.setAttribute('id', 'city');
//    selectCityList.setAttribute('name', 'city');
//    listOfCities.forEach(city => {
//        const cityOption = document.createElement('option');
//        cityOption.setAttribute('value', city.value);
//        cityOption.textContent = city.name;
//        selectCityList.appendChild(cityOption);
//    })

//    selectContainer.appendChild(selectCityLabel);
//    selectContainer.appendChild(selectCityList);
//    container.appendChild(selectContainer);
//}