import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

let discoverSwiper = null;
let gameSwiper = null;

const desktopMediaQuery = window.matchMedia('(min-width: 1440px)');

function initDiscoverSwiper() {
  if (desktopMediaQuery.matches) {
    if (discoverSwiper) {
      discoverSwiper.destroy(true, true);
      discoverSwiper = null;
    }

    return;
  }

  if (discoverSwiper) return;

  discoverSwiper = new Swiper('.discover-swiper', {
    modules: [Navigation],

    slidesPerView: 1,
    spaceBetween: 16,

    navigation: {
      prevEl: '.discover-prev',
      nextEl: '.discover-next',
    },
  });
}

function initGameSwiper() {
  if (gameSwiper) return;

  gameSwiper = new Swiper('.game-swiper', {
    modules: [Navigation],

    slidesPerView: 1,
    spaceBetween: 16,

    navigation: {
      prevEl: '.game-prev',
      nextEl: '.game-next',
    },

    breakpoints: {
      1440: {
        slidesPerView: 4.1,
        spaceBetween: 24,
      },
    },
  });
}

function handleSwipers() {
  initDiscoverSwiper();
  initGameSwiper();
}

handleSwipers();

desktopMediaQuery.addEventListener('change', handleSwipers);