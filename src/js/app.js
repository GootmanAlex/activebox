import {scrollToSection} from "./scrollToSection";
import {clearHamburger} from "./clearHamburger";

addEventListener('DOMContentLoaded', () => {

    let lazyLoadInit = function () {
        const observer = lozad();
        observer.observe();
    }

    let hamburgerButton = function () {
        const button = document.querySelector('[data-hamburger-button]')
        button.addEventListener('click', function () {
            button.classList.toggle('active');
            document.querySelector('[data-hamburger-content]').classList.toggle('active');
            document.querySelector('body').classList.toggle('overflow');
        })

        window.addEventListener('resize', function () {
            clearHamburger()
        })
    }


    lazyLoadInit()
    hamburgerButton()
    scrollToSection('[data-scroll-link]')
});
