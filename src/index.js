import { createCurrentWeatherPage } from "./pages/currentWeather";
import { createLongTermWeatherPage } from "./pages/longTermWeather";
import { createNavigation } from "./components/navigation";

createNavigation();

createCurrentWeatherPage();

const switchPages = () => {
    const today = document.querySelector('.nav-today');
    const longTerm = document.querySelector('.nav-long-term');

    today.addEventListener('click', createCurrentWeatherPage)
    longTerm.addEventListener('click', createLongTermWeatherPage);
}

switchPages();