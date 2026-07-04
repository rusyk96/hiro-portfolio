
// ==========================================================================
// 4. ЛОУДЕР
// ==========================================================================
const loader = document.getElementById("loader");
if (loader) {
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 600);
}

// Железобетонная проверка: Хром имеет встроенный объект window.chrome
const isChrome = !!window.chrome;

if (isChrome) {
    document.body.classList.add('is-chrome');
} else {
    // Для всех остальных (Safari, Firefox) отдаем нативный эппловский вариант
    document.body.classList.add('is-safari');
}