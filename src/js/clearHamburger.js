export function clearHamburger() {
    const button = document.querySelector('[data-hamburger-button]')

    if (button.classList.contains('active')) {
        button.classList.remove('active');
        document.querySelector('[data-hamburger-content]').classList.remove('active');
        document.querySelector('body').classList.remove('overflow');
    }

}
