"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
;
var headerSwiper = new Swiper('.page-swiper', {
  // Navigation arrows
  slidesPerView: '1',
  navigation: {
    nextEl: '.page-swiper-next',
    prevEl: '.page-swiper-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    type: 'bullets'
  }
});
var cartSlider = new Swiper('.cart-slider', {
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 40,
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev'
  }
});
var acc = document.getElementsByClassName("menu-categories__name");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

;

var productCounter = function productCounter() {
  var counterBtns = document.querySelectorAll('.info-counter__btn');
  counterBtns.forEach(function (counterBtn) {
    counterBtn.addEventListener('click', function () {
      var direction = this.dataset.direction;
      var counterInput = this.parentElement.querySelector('.info-counter__input');
      var currentValue = +counterInput.value;
      var newValue;

      if (direction === 'plus') {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 1 ? currentValue - 1 : 1;
      }

      counterInput.value = newValue;
    });
  });
};

productCounter();
var menuIcon = document.querySelector('.header-menu__icon');
var mobMenu = document.querySelector('.header-menu_mob');
menuIcon.addEventListener('click', function () {
  menuIcon.classList.toggle('active');
  mobMenu.classList.toggle('active');
});
var menuIconFooter = document.querySelector('.footer-menu__icon');
var mobMenuFooter = document.querySelector('.footer-menu__body');
var footer = document.querySelector('.footer');
menuIconFooter.addEventListener('click', function () {
  menuIconFooter.classList.toggle('active');
  mobMenuFooter.classList.toggle('active');
  footer.classList.toggle('active');
}); 


var productsSlider = new Swiper('.products-slider', {
  slidesPerView: 'auto',
  pagination: {
    el: '.products-pagination',
    clickable: true,
    hideOnClick: true,
    bulletClass: 'products-pagination__bullet',
    bulletActiveClass: 'products-pagination__bullet_active',
    renderBullet: function renderBullet(index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  }
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 'auto',
  // touchRatio: 0.2,
  slideToClickedSlide: true
});
galleryThumbs.controller.control = galleryTop;
galleryTop.controller.control = galleryThumbs;
var slider = document.getElementById('slider');
noUiSlider.create(slider, {
  start: [20, 80],
  padding: [3],
  // Or just 10
  connect: true,
  range: {
    'min': 0,
    'max': 100
  }
});