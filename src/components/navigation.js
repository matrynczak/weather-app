export const createNavigation = () => {
    const container = document.querySelector('.container');
    const navigation = document.querySelector('.navigation');
    const today = document.createElement('li');
    const hour = document.createElement('li');
    const longTerm = document.createElement('li');
    today.classList.add('nav-today');
    today.classList.add('tab-clicked');
    longTerm.classList.add('nav-long-term');
    today.textContent = "Today";
    hour.textContent = 'Hourly';
    longTerm.textContent = "Long term";
    navigation.appendChild(today);
    navigation.appendChild(longTerm);

    const allTabs = document.querySelectorAll('.navigation li');
    allTabs.forEach(tab => 
        tab.addEventListener('click', () => {
            for(let i=0; i<allTabs.length; i++){
                if(allTabs[i].classList.contains('tab-clicked')){
                    allTabs[i].classList.remove('tab-clicked');
                }
            }
            tab.classList.add('tab-clicked');
        }
    ));
}