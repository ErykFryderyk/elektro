<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

defineProps({
  data: Array,
});
onMounted(() => {
  // Pobieramy wszystkie elementy z klasą 'box'
  const boxes = document.querySelectorAll('.img');
  const startPoint = document.querySelector('.timeline');
  ScrollTrigger.matchMedia({
    '(max-width: 1199px)': function () {
      // Animacja dla dużych ekranów
      boxes.forEach((box, index) => {
        gsap.fromTo(box,
          { opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            stagger: 0.5,
            scrollTrigger: {
              trigger: box,
              start: 'bottom 85%',
              //  markers: true,
              id: `appear-${index + 1}`,
            },
          }
        );
      });
    },
    // Warunek dla dużych ekranów (np. min-width: 768px)
    '(min-width: 1200px)': function () {
      boxes.forEach((box, index) => {
        gsap.fromTo(
          box,
          {
            y: '+=20',
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.3,
            scrollTrigger: {
              trigger: startPoint,
              start: 'top 50%',
              // markers: true,
              id: `large-${index + 1}`,
            },
          }
        );
      });
    },
  });
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});

</script>
<template>
  <div class="timeline">
    <ul class="timeline__lists">
      <li class="timeline__item" v-for="(item, index) in data" :key="index">
        <h2 class="title">
          {{ item.year }}
        </h2>
        <div class="underline"></div>
        <h3 class="subtitle">{{ item.title }}</h3>
        <p class="desc">
          {{ item.desc }}
        </p>
        <img class="img" :src="'img/' + item.srcImg" :alt="'image-' + item.title" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul li {
  margin: 0;
  padding: 0;
}

.timeline {
  width: 100%;
  margin-bottom: 50px;
  padding-top: 50px;
  padding-bottom: 20px;
  position: relative;
  overflow-y: hidden;


  & {
    --sb-track-color: #ffffff;
    --sb-thumb-color: #f9cb53;
    --sb-size: 10px;
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    width: var(--sb-size);
  }

  &::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 10px;
    border: 4px solid #ffffff;
  }

  &::before {
    content: "";
    width: 20px;
    position: absolute;
    top: 0;
    left: 50%;
    bottom: 0px;
    background: #e4e4e4;
    transform: translateX(-50%);
  }

  &__lists {
    display: flex;
    flex-direction: column;
  }

  &__item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 30px;

    &:nth-child(even) {
      align-items: end;
    }
  }
}

.title {
  color: #000;
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  position: relative;
  width: 100%;
}

.underline {
  width: 55%;
  height: 20px;
  transform: translateY(-10px);
  background-color: #f9cb53;
  margin-bottom: 24px;
}

.subtitle {
  color: #00405b;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.desc {
  color: #002332;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 15px;
}

.img {
  width: 100%;
  max-width: 500px;
  height: 194px;
  background-color: #d9d9d9;
  position: relative;
  margin-bottom: 24px;
  object-fit: cover;

}

.timeline__item {
  @media (max-width: 1199px) {
    &:nth-child(odd) {
      .title {
        text-align: left;
      }
    }

    &:nth-child(even) {
      .title {
        text-align: right;
      }

      .desc {
        text-align: right;
      }
    }
  }
}

@media (min-width: 1200px) {
  .timeline {
    width: 100%;
    display: flex;
    align-items: center;
    height: 670px;
    overflow-x: scroll;
  }

  .timeline::before {
    position: absolute;
    width: 100%;
    height: 10px;
    top: 50%;
  }

  .timeline__lists {
    flex-direction: row;
  }

  .timeline__item {
    width: 350px;
    display: flex;
    padding: 0 10px;

    &:nth-child(even) {
      transform: translateY(-30%);
      align-items: start;
    }


    &:nth-child(odd) {
      transform: translateY(30%);
    }
  }

  .subtitle {
    font-size: 18px;
  }

  .desc {
    font-size: 16px;
    margin-left: 33px;
    margin-bottom: 0px;
  }

  .underline {
    position: absolute;
    width: 30px;
    height: 55%;
    z-index: -1;
  }

  .img {
    object-fit: fill;
  }
}
</style>
