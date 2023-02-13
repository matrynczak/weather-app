export const createGifComponent = () => {
    const container = document.querySelector('.container');
    const weatherContainer = document.querySelector('.weather-container');
    
    const gif = document.createElement('div');
    gif.classList.add('weather-gif');
    const gifContent = document.createElement('img');
    gifContent.classList.add('weather-gif-content');
    gifContent.setAttribute('src', './icons/square.gif');
    gifContent.setAttribute('alt', 'Gif presenting what the weather looks like')

    gif.textContent = 'The weather looks like: ';

    const weatherDescription = document.createElement('h2');
    weatherDescription.textContent = '';
 
    gif.appendChild(weatherDescription);
    gif.appendChild(gifContent);

    weatherContainer.appendChild(gif);
    container.appendChild(weatherContainer);
}

export const setGifValue = (desc, gifUrl) => {
    const weatherContainer = document.querySelector('.weather-container');
    const gif = document.querySelector('.weather-gif');
    const gifContent = document.querySelector('.weather-gif-content');

    const weatherDescription = document.querySelector('h2');
    weatherDescription.textContent = desc;

    gifContent.setAttribute('src', gifUrl)
    gif.appendChild(weatherDescription);
    gif.appendChild(gifContent);
    weatherContainer.appendChild(gif);
}