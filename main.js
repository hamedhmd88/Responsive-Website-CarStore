const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')

 /////////////////////////////////

 function scrollHeader() {
    const header = document.getElementById("header");
  
    if (this.scrollY >= 10) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  }
  window.addEventListener("scroll", scrollHeader);

    ///////////////////// SHOW SCROLL UP //////////////////

function scrollup() {
    const scrollup = document.getElementById("scroll-up");
  
    if (this.scrollY >= 150) {
      scrollup.classList.add("show-scroll");
    } else {
      scrollup.classList.remove("show-scroll");
    }
  }
  
  window.addEventListener("scroll", scrollup);

  ////////////////////////////////////////////////


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4400,
      disableOnInteraction: false,
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /////////////////////////////////////////

  var swiper = new Swiper(".mySwiper-origin", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination-origin",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next-origin",
      prevEl: ".swiper-button-prev-origin",
    },
  });