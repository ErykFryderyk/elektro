<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useScrollAnimations, clearScrollTriggers, slideInFrom, appearAnimation } from '@/assets/utils/useScrollAnimations';
import CustomButton from "@/components/CustomButton.vue";
import FooterElektro from "../components/FooterElektro.vue";
import TheTimeLine from "@/components/TheTimeLine.vue";
import SplitSection from "@/components/SplitSection.vue";
// import SectionImage from '@/components/SectionImage.vue';

const timeLineData = ref([
  {
    year: 2010,
    title: "Początek działalności",
    srcImg: "time-line-1.jpg",
    desc: `Rozpoczęcie działalności jako firma elektryczna, oferująca kompleksowe usługi instalacyjne dla klientów indywidualnych i firm.`,
  },
  {
    year: 2011,
    title: "Rozszerzenie oferty",
    srcImg: "time-line-2.jpg",
    desc: `Rozszerzenie oferty o usługi serwisowe oraz montażowe, w tym instalacje elektryczne, alarmowe i monitoring.`,
  },
  {
    year: 2014,
    title: "Współpraca z deweloperami",
    srcImg: "time-line-4.webp",
    desc: `Podpisanie pierwszych umów z dużymi deweloperami na realizację instalacji elektrycznych w kompleksach mieszkaniowych.`,
  },
  {
    year: 2015,
    title: "Nowoczesne technologie",
    srcImg: "time-line-3.webp",
    desc: `Inwestycja w nowoczesne technologie, takie jak fotowoltaika i systemy energooszczędne, umożliwiające klientom redukcję kosztów energii.`,
  },
  {
    year: 2019,
    title: "1000 zadowolonych klientów",
    srcImg: "time-line-5.webp",
    desc: `Przekroczenie liczby 1000 zrealizowanych projektów oraz dalszy dynamiczny rozwój firmy.`,

  },
  {
    year: 2022,
    title: "Przyszłość pełna energii",
    srcImg: "time-line-6.webp",
    desc: `Kontynuujemy naszą misję dostarczania nowoczesnych i bezpiecznych rozwiązań elektrycznych, pomagając klientom oszczędzać energię i dbać o środowisko.`,

  },
]);


//animation 
onMounted(() => {
  useScrollAnimations('.slide-up');
  slideInFrom('.slide-in');
  appearAnimation('.appear-animation');
});

onUnmounted(() => {
  clearScrollTriggers();
});
</script>

<template>
  <div class="about">
    <div class="container container--padding-b">
      <SplitSection>
        <template #left>
          <div class="path">
            <p class="path__text">
              <router-link to="/">Strona główna</router-link> > O nas
            </p>
          </div>
          <div class="" style="display: flex; flex-direction: column; justify-content: space-between; height: 94%;">

            <div>
              <h1 class="title title--h2 title--bold slide-in">O nas</h1>
              <div class="underline underline--mb"></div>
            </div>

            <div>
              <h2 class="title title--h2 title--uppercase title--small title--medium">
                PHU ELEKTRO Rafał Kostrzewa
              </h2>
              <p class="text slide-up">
                Elektro to jedna z wiodących firm elektrycznych na rynku w regionie Konińskim, specjalizująca się w
                kompleksowych usługach elektrycznych. Dzięki wieloletniemu doświadczeniu oraz innowacyjnemu podejściu
                dostarczamy bezpieczne, nowoczesne i energooszczędne rozwiązania elektryczne.<br><br>
                Dlaczego warto nam zaufać?<br>
                🔹 Działamy na rynku od wielu lat, zdobywając zaufanie klientów i
                partnerów biznesowych.<br>
                🔹 Nowoczesne technologie – inwestujemy w innowacyjne rozwiązania, które pozwalają oszczędzać energię i
                zwiększać komfort użytkowników.<br>
                🔹 Indywidualne podejście – każde zlecenie traktujemy priorytetowo, dopasowując rozwiązania do potrzeb
                klienta.<br>
                🔹 Bezpieczeństwo i jakość – nasze instalacje spełniają wszystkie normy i są wykonywane zgodnie z
                najwyższymi standardami.
              </p>
            </div>
          </div>
        </template>
        <template #right>
          <div class="image appear-animation"></div>
          <!-- <div class="image-wrapper"> -->
          <!-- <div class="rectangle rectangle--yellow"></div> -->
          <!-- <img src="../assets/img/b13d1eb03bc2495b181658cfbf381fad.jpeg" alt="services-hero-image" /> -->
          <!-- </div> -->
          <!-- <SectionImage img="video.acd58b90.png">
            <LogoElectro />
          </SectionImage> -->
        </template>
      </SplitSection>
    </div>
    <div class="container container--padding-b">
      <h1 class="main-title main-title--small-size slide-in">Nasz skład</h1>

      <SplitSection>
        <template #right>
          <div class="our-team-image-wrapper">
            <img class="our-team-img image appear-animation" src="../assets/img/elektryk-elektro-boss.png" alt="boss-image"/>
          </div>
        </template>
        <template #left>
          <div class="our-team-content">
            <h3 class="title title--h2 slide-up">Rafał</h3>
            <p class="text text--mb-40 text--justify slide-up">
              Jestem założycielem oraz właścicielem firmy <b>Elektro</b>, jednego z wiodących przedsiębiorstw
              elektrycznych w naszym regionie. Zaczynałem ponad 15 lat temu jako elektryk, pracując w różnych firmach i
              zdobywając doświadczenie. Dziś prowadzę dynamicznie rozwijającą się firmę, która zatrudnia kilku
              wykwalifikowanych specjalistów i realizuje projekty na terenie wielkopolski i nie tylko.
            </p>
          </div>
        </template>
      </SplitSection>

      <SplitSection>
        <template #left>
          <div class="our-team-image-wrapper our-team-image-wrapper--reverse">
            <img class="our-team-img our-team-img--reverse appear-animation" src="../assets/img/elektryk-elektro-employee.png" alt="worker-image" />
          </div>
        </template>
        <template #right>
          <div class="our-team-content">
            <h3 class="title title--h2 slide-up">Ryszard</h3>
            <p class="text text--mb-40 text--justify slide-up">
              Jestem Ryszard i jestem jednym z pracowników w firmie Elektro. Pracuję tutaj już od kilku lat i mogę
              śmiało powiedzieć, że to miejsce, w którym naprawdę można się rozwijać i pracować z najlepszymi
              specjalistami w branży. Na co dzień zajmuję się montażem i serwisem instalacji elektrycznych w budynkach mieszkalnych, biurowych i
              przemysłowych.
            </p>
          </div>
        </template>
      </SplitSection>
    </div>
    <div class="container container--padding-b">
      <div class="">
        <h1 class="title title--h2 title--bold">Nasza oś czasu</h1>
        <div class="underline underline--mb"></div>
      </div>
      <div class="">
        <TheTimeLine :data="timeLineData" />
      </div>
    </div>
    <div class="container container--padding-b">
      <div class="video slide-up">
        <iframe width="100%" height="300px" src="https://www.youtube.com/embed/-XTUbvmptRs?si=z8r-yTsvTWpsaNXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
    <div class="container container--padding-b">
      <h2 class="title title--h2 title--bold">Skontaktuj się z nami!</h2>
      <div class="underline underline--mb"></div>
      <p class="text">
        Jesteśmy do Twojej dyspozycji od poniedziałku do piątku w godzinach
        8.00-16.00
      </p>
      <router-link to="/contact">
        <CustomButton class="bg-granat">Skontaktuj się</CustomButton>
      </router-link>
    </div>
  </div>
  <FooterElektro />
</template>
<style lang="scss" scoped>
.about {
  background: #fff;
  padding-top: 10px;
}

.path {
  margin-bottom: 24px;

  &__text {
    font-size: 16px;
    color: #797979;
    margin-bottom: 24px;
  }
}

h2 {
  color: #00405b;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
}

.video {
  margin: 80px 0;

  iframe {
    border: none;
    border-radius: 5px;

    @media (min-width: 768px) {
      height: 400px; 
    }
    @media (min-width: 992px) {
      height: 500px; 
    }
  }
}

.image {
  margin-left: 12px;
  min-height: 377px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#00000048, #00000048),
    url("../assets/img/b13d1eb03bc2495b181658cfbf381fad.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  box-shadow: 0 0 13px 0px black;

  @media (min-width: 922px) {
    min-height: 477px;
  }

  &::before {
    content: "";
    position: absolute;
    background: #f0c85e;
    bottom: 0;
    height: 330px;
    width: 12px;
    left: -12px;

    @media (min-width: 992px) {
      height: 400px;
    }
  }

  &--mobile-visbile {
    @media (min-width: 992px) {
      display: none;
    }
  }

  &--deskop-visible {
    @media (max-width: 992px) {
      display: none;
    }
  }
}

.our-team-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &--reverse {
    text-align: right;
  }
}

.our-team-image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:nth-child(1) {
    margin-bottom: 50px;
  }
  
  &::before {
    content: "";
    position: absolute;
    background: #f0c85e;
    bottom: 0;
    height: 330px;
    width: 12px;
    right: -18px;
    z-index: 1;
  }
  &::after {
    content: "";
    position: absolute;
    background: #f0c85e;
    bottom: 0;
    height: 12px;
    width: 330px;
    right: -18px;
    z-index: 1;
  }

  &--reverse {
    &::before {
      left: -12px;
      bottom: 0;
    }
    &::after {
      bottom: 0;
      left: 0;
    }
  }
}

.our-team-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(10% 0, 100% 0%, 100% 100%, 10% 100%, 0% 50%);

  &--reverse {
    clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%);
  }
}
</style>
