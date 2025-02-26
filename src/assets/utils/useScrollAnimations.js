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
            delay: index * 0.2,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
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
            x: '-=50', // Mniejsze przesunięcie na małych ekranach
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
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
 * Funkcja inicjalizująca animację slide-in z lewej strony
 * @param {string} selector - Klasa lub selektor elementów do animacji
 */
 export function slideInFrom(selector) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element, index) => {
    gsap.fromTo(
      element,
      { x: '-=50', opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: element,
          start: 'top 70%',
          // markers: true,
          id: `slide-in-el-${index + 1}`,
        },
      }
    );
  });
}

/**
 * Funkcja do czyszczenia instancji ScrollTrigger
 */
export function clearScrollTriggers() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }