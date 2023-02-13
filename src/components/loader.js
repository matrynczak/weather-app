export const displayLoader = () => {
    const container = document.querySelector('.container');

    const daysList = document.querySelector('.days-list');
    daysList.textContent = 'Fetching the data of weather...';

    const loaderWrapper = document.createElement('div');
    loaderWrapper.classList.add('loader-wrapper');
    const loaderImage = document.createElement('img');
    loaderImage.classList.add('loader-image');
    loaderImage.setAttribute('src', './icons/loader.gif');

    loaderWrapper.appendChild(loaderImage);
    container.appendChild(loaderWrapper);
    loaderWrapper.classList.add('loader-displayed');
}

export const hideLoader = () => {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    const container = document.querySelector('.container');

    container.removeChild(loaderWrapper);
}

export const displaySmallLoader = () => {
    const gifContent = document.querySelector('.weather-gif-content');
    gifContent.setAttribute('src', './icons/loader.gif')
}