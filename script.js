class MobileNavbar {
    constructor(mobileMenu, navigation, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navigation = document.querySelector(navigation);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
        
    }

    handleClick() {
        this.navigation.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".navigation",
    ".navigation ul",
);
mobileNavbar.init();


// Scroll Fixed
window.addEventListener('scroll', function() {
    var sticky = this.document.querySelector('#header'),
    scroll = this.window.pageYOffset;
    if (scroll >= 150) sticky.classList.add('fixed');
    else sticky.classList.remove('fixed');
})
// End Scroll Fixed