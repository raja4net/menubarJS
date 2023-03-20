function addVisibility () {
    const subnavContent = document.querySelector(".subnav-content")
    subnavContent.classList.toggle("visible")

}

function addMobileVisibility () {
    const mobileSubnavContent = document.querySelector(".mobile-subnav-content")
    mobileSubnavContent.classList.toggle("visible-mobile")
    
}

function showMobileNav() {
const mobileLinks = document.querySelector(".mobile-links")
mobileLinks.classList.toggle("visible-mobile")
}

const subnav = document.querySelector(".subnavbtn")
const mobileProducts = document.getElementById("mobile-products")
const icon = document.getElementById("icon")
icon.addEventListener("click",showMobileNav)
subnav.addEventListener("click", addVisibility)
mobileProducts.addEventListener("click", addMobileVisibility)
