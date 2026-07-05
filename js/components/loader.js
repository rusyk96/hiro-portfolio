// js/components/loader.js

export function initLoader() {
    console.log("Лоудер инициализирован");

    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }, 600);
    }

    // Твоя железобетонная проверка браузера
    const isChrome = !!window.chrome;
    if (isChrome) {
        document.body.classList.add('is-chrome');
    } else {
        document.body.classList.add('is-safari');
    }
}