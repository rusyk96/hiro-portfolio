// js/init.js
import { initTimeline } from './components/timeline-component.js';
import { initFooter } from './components/footer.js';
import { initHeaderStandard } from './components/header-standard.js';
import { initHeaderSubStandard } from './components/header-sub-standard.js';
import { initLoader } from './components/loader.js';

export function initAll() {
    console.log("Запуск хаба компонентов...");

    // Лоудер запускаем всегда, если он есть в HTML
    if (document.getElementById('loader')) {
        initLoader();
    }

    // Хедер стандартный
    if (document.getElementById('header-component')) {
        initHeaderStandard();
    }

    // Хедер для внутренних страниц (если используешь этот контейнер)
    if (document.getElementById('header-sub-component')) {
        initHeaderSubStandard();
    }

    // Таймлайн оживает только там, где есть его контейнер
    if (document.getElementById('timeline-component')) {
        initTimeline();
    }

    // Футер
    if (document.getElementById('footer-component')) {
        initFooter();
    }
}