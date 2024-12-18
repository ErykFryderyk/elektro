import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Funkcja inicjalizująca animacje dla elementów z klasą `trigger`
 * @param {string} selector - Klasa lub selektor elementów do animacji
 */
export function useScrollAnimations(selector) {
  const animatedItems = document.querySelectorAll(selector);



ScrollTrigger.matchMedia({
    // Warunek dla dużych ekranów (np. min-width: 768px)
    '(min-width: 768px)': function () {
      animatedItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            y: '+=100',
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'bottom 80%',
              scrub: true,
              markers: true,
              id: `large-${index + 1}`,
            },
          }
        );
      });
    },

    // Warunek dla małych ekranów (np. max-width: 767px)
    '(max-width: 767px)': function () {
      animatedItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            x: '-=100', // Mniejsze przesunięcie na małych ekranach
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'top 50%',
              scrub: true,
              markers: true,
              id: `small-${index + 1}`,
            },
          }
        );
      });
    },
  });
}

/**
 * Funkcja do czyszczenia instancji ScrollTrigger
 */
export function clearScrollTriggers() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }