export const setWeatherIconByDescription = (desc) => {
    if(desc.includes('rain')) {
        return './icons/deszcz.svg';
    }
    else if(desc.includes('clouds')) {
        return './icons/zachmurzenie.svg';
    }
    else if(desc.includes('clear sky') || desc.includes('sun')) {
        return './icons/slonce.svg';
    }
    else {
        return './icons/test.png';
    }
}