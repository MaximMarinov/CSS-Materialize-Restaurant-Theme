//SIDENAV
const sideNav = document.querySelector('.sidenav');
// eslint-disable-next-line no-undef
M.Sidenav.init(sideNav, {});

//SLIDER
const slider = document.querySelector('.slider');
// eslint-disable-next-line no-undef
M.Slider.init(slider, {
    indicators: false,
    height: 400,
    transition: 500,
    interval: 5000
});

//AUTOCOMPLETE
const autocomplete = document.querySelector('.autocomplete');
// eslint-disable-next-line no-undef
M.Autocomplete.init(autocomplete, {
    data: {
        "Pizza Peperone": null,
        "Pasta Carbonara": null,
        "Medium Rare Steak": null,
        "Sushi Alaska": null,
        "Pasta Bolognese": null,
        "Cheeseburger": null,
        "Ceaser Salad": null,
        "Cheese Cake": null,
        "Red Velvet Cake": null,
        "Seafood Risotto": null,
    }
});

//GALLERY
const materialBoxed = document.querySelectorAll('.materialboxed');
// eslint-disable-next-line no-undef
M.Materialbox.init(materialBoxed, {});