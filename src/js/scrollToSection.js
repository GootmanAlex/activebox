import {clearHamburger} from "./clearHamburger";

export function scrollToSection(selector, offset = 0) {
    const element = document.querySelectorAll(selector);

    if (element) {
        element.forEach(function (item) {
            item.addEventListener('click', function () {

                const scrollTop = document.pageYOffset || document.documentElement.scrollTop;
                const targetTop = item.getBoundingClientRect().top + scrollTop - offset;
                const start = document.pageYOffset || document.documentElement.scrollTop;

                let currentTime = 0;
                const increment = 20;
                const duration = 100;


                const animateScroll = function () {
                    currentTime += increment;
                    const val = currentTime / duration;
                    document.scrollTo(0, start + (targetTop - start) * val);
                    if (currentTime < duration) {
                        setTimeout(animateScroll, increment);
                    }
                };
                clearHamburger()
                animateScroll();

            })
        })


    }
}
