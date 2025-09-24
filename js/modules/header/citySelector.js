export function initCitySelector() {
    const cityBtn = document.querySelector('.location__city');
    const cityName = document.querySelector('.location__city-name');
    const sublist = document.querySelector('.location__sublist');
    const sublinks = document.querySelectorAll('.location__sublink');

    if (!cityBtn || !cityName || !sublist) return;

    cityBtn.addEventListener('click', () => {
        cityBtn.classList.toggle('location__city--active');
        sublist.classList.toggle('location__sublist--active');
    });

    sublinks.forEach((link) => {
        link.addEventListener('click', () => {
            cityName.textContent = link.textContent;
            cityBtn.classList.remove('location__city--active');
            sublist.classList.remove('location__sublist--active');
        });
    });
}
