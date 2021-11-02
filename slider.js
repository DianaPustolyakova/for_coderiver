/*document.addEventListener('DOMContentLoaded', function () {
    const slider = {
        loop: true,
        autoplay: true,
        interval: 1000,
    };
    new SimpleAdaptiveSlider('.slider', slider);

});*/
document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.container_first', {
        loop: true,
        autoplay: true,
        interval: 2000,
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.container_second', {
        loop: true,
        autoplay: true,
        interval: 2000,
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.container_third', {
        loop: true,
        autoplay: true,
        interval: 2000,
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.container_fourth', {
        loop: true,
        autoplay: true,
        interval: 2000,
    });
});