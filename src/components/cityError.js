export const displayCityError = () => {
    const cityError = document.querySelector('.city-error');
    cityError.classList.add('error-display');
    cityError.classList.remove('error-hidden');
}

export const hideCityError = () => {
    const cityError = document.querySelector('.city-error');
    cityError.classList.remove('error-display');
    cityError.classList.add('error-hidden');
}