// js/header-standard.js

const backdropStylePath = '/css/backdrops/header__backdrop.css';
if (!document.querySelector(`link[href="${backdropStylePath}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = backdropStylePath;
    document.head.appendChild(link);
}

const headerContainer = document.getElementById('header-component');

if (headerContainer) {
    headerContainer.innerHTML = `
    <header class="site-header">
        <div class="header__backdrop"></div>
        
        <div class="header-container">
            <div class="header-left">
                <a href="https://t.me/rusyk96" target="_blank" class="btn-connect">Связаться</a>
            </div>
            
            <div class="header-center">
                <a href="/" class="logo">
                    <img src="/img/logo.svg" alt="HIRO" class="logo-img">
                </a>
            </div>
            
            <div class="header-right">
                <button class="nav-trigger">навигация</button>
            </div>
        </div>
    </header>
    `;
}