document.addEventListener("DOMContentLoaded", () => {
    const footerContainer = document.getElementById('footer-component');
    
    if (footerContainer) {
        footerContainer.innerHTML = `
        <footer class="site-footer">
            <div class="footer-container">
                <div class="footer-left">
                    <a href="mailto:rusyabar.rb@gmail.com" class="footer-link mail-link">rusyabar.rb@gmail.com</a>
                </div>

                <nav class="footer-socials">
                    <a href="https://vk.com/твой_ник" target="_blank" class="footer-link">vk</a>
                    <a href="https://t.me/твой_ник" target="_blank" class="footer-link">telegram</a>
                    <a href="https://instagram.com/твой_ник" target="_blank" class="footer-link">instagram</a>
                </nav>

                <div class="footer-right">
                    <a href="tel:79819448779" class="footer-link phone-link">8 800 666 89 00</a>
                </div>
            </div>
        </footer>
        `;
    }
});