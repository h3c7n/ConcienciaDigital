let lastScrollPosition = 0;
const header = document.querySelector('.main-header');
const headerContent = document.querySelector('.header-content');
const logo = document.querySelector('.logo');
const siteTitle = document.querySelector('.site-title');
const navList = document.querySelector('.nav-list');

function retractHeader() {
    if (window.innerWidth <= 768) {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScrollPosition && currentScroll > 50) {
            // Scrolling down
            header.classList.add('retracted');
            headerContent.classList.add('retracted');
            logo.classList.add('retracted');
            siteTitle.classList.add('retracted');
            navList.classList.add('retracted');
        } else {
            // Scrolling up
            header.classList.remove('retracted');
            headerContent.classList.remove('retracted');
            logo.classList.remove('retracted');
            siteTitle.classList.remove('retracted');
            navList.classList.remove('retracted');
        }
        
        lastScrollPosition = currentScroll;
    }
}

window.addEventListener('scroll', retractHeader);
