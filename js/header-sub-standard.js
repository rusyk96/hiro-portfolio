const headerSubHTML = `
    <div class="header__backdrop_sub"></div>

    <div class="header-container">
        <div class="header-left">
            <a href="/" class="header-logo-sub">
                <img src="/img/logo_gorisonal.svg" alt="HELEO" class="logo-sub-img">
            </a> 
        </div>
        
        <div class="header-center">
            </div>
        
        <div class="header-right">
            <a href="/#contacts" class="btn-connect">Связаться</a>
        </div>
    </div>
`;

// Рендерим в строго заданный компонент
document.getElementById('header-component').innerHTML = headerSubHTML;