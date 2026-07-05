// js/components/timeline-component.js

export function initTimeline() {
    console.log("Таймлайн инициализирован");

const timelineStylePath = 'css/backdrops/timeline__backdrop.css';
if (!document.querySelector(`link[href="${timelineStylePath}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = timelineStylePath;
    document.head.appendChild(link);
}

// Обернем всё в DOMContentLoaded, чтобы дождаться появления всех элементов
    const timelineContainer = document.getElementById('timeline-component');

    if (timelineContainer) {
        timelineContainer.innerHTML = `
        <nav class="timeline-nav" id="timelineNav">
            <div class="timeline-content-wrapper">
                <div class="timeline-line">
                    <div class="timeline-progress" id="timelineProgress"></div>
                </div>
                <div class="timeline-dots">
                    <a href="#about" class="timeline-dot" data-step="1"><span class="dot-label">обо мне</span></a>
                    <a href="#design" class="timeline-dot" data-step="2"><span class="dot-label">дизайн проекты</span></a>
                    <a href="#photography" class="timeline-dot" data-step="3"><span class="dot-label">фотография</span></a>
                </div>
            </div>
        </nav>
        `;

        // Теперь вызываем логику
        initTimelineLogic();
    }
}

function initTimelineLogic() {
    const timeline = document.getElementById('timelineNav');
    if (!timeline) return;
    
    // ==========================================================================
    // 1. ЛОГИКА НАВЕДЕНИЯ, КЛИКОВ И ЗАКРЫТИЯ (С ПРОВЕРКОЙ МЫШИ)
    // ==========================================================================
    const setupEvents = (trigger) => {
        let isPinned = false;
        let isAnimating = false;

        trigger.addEventListener('mouseenter', () => {
            if (isAnimating) return;
            timeline.classList.add('is-visible');
        });

        document.addEventListener('mousemove', (e) => {
            if (!timeline.classList.contains('is-visible') || isPinned || isAnimating) return;
            if (!trigger.contains(e.target) && !timeline.contains(e.target)) {
                triggerClose();
            }
        });

        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            if (isAnimating) return;
            isPinned = !isPinned;
            isPinned ? timeline.classList.add('is-visible') : triggerClose();
        });

        function triggerClose() {
            isAnimating = true;
            timeline.classList.remove('is-visible');
            setTimeout(() => { isAnimating = false; }, 460);
        }
    };

    // Защита MutationObserver для отслеживания триггера в хедере
    const existingTrigger = document.querySelector('.nav-trigger');
    if (existingTrigger) {
        setupEvents(existingTrigger);
    } else {
        const observer = new MutationObserver((mutations, obs) => {
            const trigger = document.querySelector('.nav-trigger');
            if (trigger) {
                setupEvents(trigger);
                obs.disconnect();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // ==========================================================================
    // 2. ЗАПОЛНЕНИЕЛИНИИ ПРОГРЕССА (SCROLL BAR)
    // ==========================================================================
    window.addEventListener('scroll', () => {
        const progress = document.getElementById('timelineProgress');
        if (progress) {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progress.style.height = `${scrollPercent}%`;
        }
    });

    // ==========================================================================
    // 3. ТРЕКЕР СЕКЦИЙ И АКТИВНЫХ ЧЕКПОИНТОВ (INTERSECTION OBSERVER)
    // ==========================================================================
    const sections = document.querySelectorAll('.vertical-section');
    const dots = document.querySelectorAll('.timeline-dot');

    if (sections.length && dots.length) {
        // Настройки отступа детектора (срабатывает, когда секция занимает центр экрана)
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -45% 0px', 
            threshold: 0.1
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeId = entry.target.getAttribute('id');
                    // Ищем точку таймлайна, у которой href совпадает с id текущей секции
                    const currentDot = document.querySelector(`.timeline-dot[href="#${activeId}"]`);

                    // Если для этой секции предусмотрен чекпоинт
                    if (currentDot) {
                        // Сбрасываем старые состояния у всех точек
                        dots.forEach(dot => dot.classList.remove('active', 'passed'));
                        
                        // Делаем текущую точку активной
                        currentDot.classList.add('active');

                        // Маркируем все предыдущие точки как пройденные (.passed)
                        let beforeActive = true;
                        dots.forEach(dot => {
                            if (dot === currentDot) {
                                beforeActive = false; // Дошли до текущей, стоп маркировка пройденных
                            } else if (beforeActive) {
                                dot.classList.add('passed');
                            }
                        });
                    }
                }
            });
        }, observerOptions);

        // Включаем слежку за каждой секцией
        sections.forEach(section => sectionObserver.observe(section));
    }
}
