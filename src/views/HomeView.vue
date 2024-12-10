<script setup>
import { ref } from "vue";
import CustomButton from "@/components/CustomButton.vue";
import TunderIcon from "../assets/svg/TunderIcon.vue";
import LogoElectro from "../assets/svg/LogoElectro.vue";
import IconBox from "@/components/IconBox.vue";
import SwiperSlider from "@/components/SwiperSlider.vue";
import FooterElektro from "../components/FooterElektro.vue";
import BigTunderIcon from "@/assets/svg/BigTunderIcon.vue";
import SplitSection from "@/components/SplitSection.vue";
import DynamicGrid from "@/components/DynamicGrid.vue";
import DynamicIconBox from "@/components/DynamicIconBox.vue";

// Icons
import CableIcon from "@/assets/svg/CableIcon.vue";
import HeatIcon from "@/assets/svg/HeatIcon.vue";
import ClearDayIcon from "@/assets/svg/ClearDayIcon.vue";
import AvgPaceIcon from "@/assets/svg/AvgPaceIcon.vue";

const activeIndex = ref(null);
const slides = ref([
  {
    largeURL:
      "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
    thumbnailURL:
      "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg",
    width: 1875,
    height: 2500,
  },
  {
    largeURL:
      "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg",
    thumbnailURL:
      "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg",
    width: 1669,
    height: 2500,
  },
  {
    largeURL:
      "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg",
    thumbnailURL:
      "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
    width: 2500,
    height: 1666,
  },
  {
    largeURL:
      "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg",
    thumbnailURL:
      "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
    width: 2500,
    height: 1666,
  },
]);

function openGallery(index) {
  activeIndex.value = index;
  console.log(activeIndex.value);
}
</script>
<template>
  <div class="home">
    <div class="hero">
      <TunderIcon class="medium-no-visible" />
    </div>
    <div class="container">
      <div class="first-section">
        <BigTunderIcon class="mobile--no-visible" />
        <h1 class="main-title header-grid">
          Usługi elektryczne na najwyższym poziomie
        </h1>
        <CustomButton class="bg-granat contact-button-grid"
          >Skontaktuj się</CustomButton
        >
      </div>
    </div>
    <div class="container">
      <SplitSection>
        <template #left>
          <h2 class="title title--h2 title--bold title--mb">Elektro</h2>
          <p class="text">
            Firma Elektro istnieje od 2010 roku. Oferujemy szeroki wachlarz
            usług, począwszy od wykonania modernizacji, czy rozbudowy instalacji
            elektrycznych, po montaż domofonów, alarmów, telewizji przemysłowej
            a skończywszy na składaniu rozdzielni. Mim o, iż jesteśmy młodą
            firmą realizowaliśmy wiele zleceń na terenie Konina i okolic.
            Dokładamy wszelkich starań, aby klient był usatysfakcjonowany ze
            współpracy z nami. Największy nacisk kładziemy na dokładność i
            terminowość wykonywanych prac. Dążymy do rozwoju firmy oraz
            podnoszenia jakości świadczonych usług. Posiadamy potrzebne
            kwalifikacje, uprawnienia, licencje oraz niezbędne przy pracy
            elektryka doświadczenie
          </p>
          <CustomButton class="bg-granat">Sprawdź naszą ofertę</CustomButton>
        </template>
        <template #right>
          <div class="image image--deskop-visible">
            <LogoElectro />
          </div>
        </template>
      </SplitSection>
    </div>
    <div class="image image--mobile-visbile">
      <LogoElectro />
    </div>
    <div class="container">
      <h2 class="main-title">Czym się zajmujemy</h2>
    </div>
    <div class="container">
      <DynamicGrid :columns="4">
        <template #column-1>
          <DynamicIconBox
            :icon="CableIcon"
            title="Dynamiczna Ikona"
            :list="['Instalacje elektryczne w domach i firmach 1', 'Instalacje elektryczne w domach i firmach 2', 'Instalacje elektryczne w domach i firmach 3']"
          />
        </template>
        <template #column-2>
          <DynamicIconBox
            :icon="HeatIcon"
            title="Dynamiczna Ikona"
            :list="['Pozycja 1', 'Pozycja 2', 'Pozycja 3']"
          />
        </template>
        <template #column-3>
          <DynamicIconBox
            :icon="ClearDayIcon"
            title="Dynamiczna Ikona"
            :list="['Pozycja 1', 'Pozycja 2', 'Pozycja 3']"
          />
        </template>
        <template #column-4>
          <DynamicIconBox
            :icon="AvgPaceIcon"
            title="Dynamiczna Ikona"
            :list="['Pozycja 1', 'Pozycja 2', 'Pozycja 3']"
          />
        </template>
      </DynamicGrid>
    </div>
    <div class="container">
      <h2 class="main-title">Nasze Realizacje</h2>
      <div style="width: 100%; background-color: #f1f1f1">
        <SwiperSlider :slides="slides" @image-click="openGallery" />
      </div>
    </div>
    <div class="container">
      <h2 class="main-title">Skontaktuj się z nami</h2>
      <p class="text">
        Jesteśmy do Twojej dyspozycji od poniedziałku do piątku w godzinach
        8.00-16.00
      </p>
      <CustomButton class="bg-granat">Skontaktuj się</CustomButton>
    </div>
    <FooterElektro />
  </div>
</template>
<style lang="scss">
.home {
  background-color: #fff;
}
.hero {
  background-image: url("../assets/img/af6990db72693c8c4a8c981d5a92f0c3.jpeg");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (min-width: 768px) {
    background-position: center;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: #000;
    opacity: 0.2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
.first-section {
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(5, 0.2fr);
    grid-template-rows: 1fr 1fr;
  }
}

.header-grid {
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row: 1;
}
.contact-button-grid {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}
.big-tunder-grid {
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 3;
}

.image {
  margin-left: 12px;
  min-height: 377px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#00233299, #00233299),
    url("../assets/img/88a59046829488b05dab2f59283e2904.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    background: #f0c85e;
    bottom: 0;
    height: 332px;
    width: 20px;
    left: -12px;
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
//SIDER
.swiper-button-next,
.swiper-button-prev {
  color: white; /* Niebieski kolor */
  font-size: 24px; /* Powiększenie strzałek */
}
.swiper-pagination-bullet {
  width: 26px;
  height: 26px;
  background-color: #d9d9d9;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background-color: #f9cb53;
}

/* Dostosowanie galerii */
.vue-light-gallery {
  z-index: 1050;
}
</style>
