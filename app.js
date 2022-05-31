//SIDENAV
const sideNav = document.querySelector('.sidenav');
// eslint-disable-next-line no-undef
M.Sidenav.init(sideNav, {});

//SLIDER
const slider = document.querySelector('.slider');
// eslint-disable-next-line no-undef
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 5000
});