<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useScrollAnimations, clearScrollTriggers, slideInFrom,appearAnimation } from '@/assets/utils/useScrollAnimations';

import FooterElektro from "../components/FooterElektro.vue";
import CustomButton from "@/components/CustomButton.vue";
import SplitSection from "@/components/SplitSection.vue";


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
  <div class="contact">
    <div class="container container--padding-b">
      <SplitSection>
        <template #right>
          <div class="image appear-animation"></div>

          <!-- <div class="image-wrapper"> -->
            <!-- <div class="rectangle rectangle--yellow"></div> -->
            <!-- <img src="../assets/img/b1e7971b36ecdc1ce6b2446a2fbea119.jpeg" alt="contact-hero-image" /> -->
          <!-- </div> -->
        </template>
        <template #left>
          <div class="path">
            <p class="path__text">
              <router-link to="/">Strona główna</router-link> > Kontakt
            </p>
          </div>
          <div class="" style="display: flex; flex-direction: column; justify-content: space-between; height: 92%;">

            <div class="">
              <h1 class="title title--h2 title--bold slide-in">Skantaktuj się z nami!</h1>
              <div class="underline underline--mb"></div>
            </div>
            <div class="">

              <h2 class="title title--h3 title--uppercase title-small title--medium">
                Szybko odbieramy telefony!
              </h2>
              <h2 class="title title--h2 title--uppercase title--small title--medium title--gray title-mb">
                Ale tylko od klientów
              </h2>
              <p class="text">
                Jesteśmy dostępni pod telefonem od poniedziałku do soboty od
                godziny 8.00 - 19.00. Chyba, ze coś pilnego, to wtedy tak samo.
              </p>
            </div>
          </div>
        </template>
      </SplitSection>
    </div>
    <div class="container container--padding-b">
      <h2 class="title title--h2 title--bold title--mb slide-in">Siedziba Firmy</h2>
      <div class="underline underline--mb slide-in"></div>
      <div class="contact-list">
        <ul>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <mask id="mask0_2042_218" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_2042_218)">
                <path
                  d="M12 19.5499C14.0333 17.6617 15.5417 15.9463 16.525 14.4038C17.5083 12.8612 18 11.4914 18 10.2945C18 8.45687 17.4208 6.95224 16.2625 5.78056C15.1042 4.60888 13.6833 4.02304 12 4.02304C10.3167 4.02304 8.89583 4.60888 7.7375 5.78056C6.57917 6.95224 6 8.45687 6 10.2945C6 11.4914 6.49167 12.8612 7.475 14.4038C8.45833 15.9463 9.96667 17.6617 12 19.5499ZM12 21.5476C11.7667 21.5476 11.5333 21.5055 11.3 21.4212C11.0667 21.3369 10.8583 21.2105 10.675 21.0419C9.59167 20.0304 8.63333 19.0441 7.8 18.0832C6.96667 17.1222 6.27083 16.1908 5.7125 15.2889C5.15417 14.3869 4.72917 13.5187 4.4375 12.6842C4.14583 11.8497 4 11.0531 4 10.2945C4 7.76567 4.80417 5.75106 6.4125 4.25063C8.02083 2.75021 9.88333 2 12 2C14.1167 2 15.9792 2.75021 17.5875 4.25063C19.1958 5.75106 20 7.76567 20 10.2945C20 11.0531 19.8542 11.8497 19.5625 12.6842C19.2708 13.5187 18.8458 14.3869 18.2875 15.2889C17.7292 16.1908 17.0333 17.1222 16.2 18.0832C15.3667 19.0441 14.4083 20.0304 13.325 21.0419C13.1417 21.2105 12.9333 21.3369 12.7 21.4212C12.4667 21.5055 12.2333 21.5476 12 21.5476ZM12 12.1152C12.55 12.1152 13.0208 11.9171 13.4125 11.5209C13.8042 11.1248 14 10.6485 14 10.0922C14 9.53583 13.8042 9.05957 13.4125 8.66339C13.0208 8.26721 12.55 8.06912 12 8.06912C11.45 8.06912 10.9792 8.26721 10.5875 8.66339C10.1958 9.05957 10 9.53583 10 10.0922C10 10.6485 10.1958 11.1248 10.5875 11.5209C10.9792 11.9171 11.45 12.1152 12 12.1152Z"
                  fill="#005C84" />
              </g>
            </svg>
            <p>Ul. Szmaragdowa 21 <br />62-504 Konin</p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <mask id="mask0_2042_221" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_2042_221)">
                <path
                  d="M19.95 21.2074C17.8667 21.2074 15.8083 20.748 13.775 19.8292C11.7417 18.9104 9.89167 17.608 8.225 15.9222C6.55833 14.2363 5.27083 12.365 4.3625 10.3082C3.45417 8.25148 3 6.16943 3 4.0621C3 3.75864 3.1 3.50576 3.3 3.30346C3.5 3.10115 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.08008 8.725 3.24024C8.90833 3.40039 9.01667 3.59005 9.05 3.80922L9.7 7.34954C9.73333 7.61928 9.725 7.84687 9.675 8.03232C9.625 8.21776 9.53333 8.37792 9.4 8.51279L6.975 10.991C7.30833 11.6148 7.70417 12.2175 8.1625 12.7991C8.62083 13.3807 9.125 13.9413 9.675 14.4808C10.1917 15.0034 10.7333 15.4881 11.3 15.9348C11.8667 16.3816 12.4667 16.7904 13.1 17.1613L15.45 14.7842C15.6 14.6325 15.7958 14.5187 16.0375 14.4428C16.2792 14.367 16.5167 14.3459 16.75 14.3796L20.2 15.0877C20.4333 15.1551 20.625 15.2773 20.775 15.4543C20.925 15.6314 21 15.8295 21 16.0486V20.1453C21 20.4487 20.9 20.7016 20.7 20.9039C20.5 21.1062 20.25 21.2074 19.95 21.2074ZM6.025 9.06912L7.675 7.40012L7.25 5.02304H5.025C5.10833 5.71425 5.225 6.39702 5.375 7.07137C5.525 7.74572 5.74167 8.41164 6.025 9.06912ZM14.975 18.1222C15.625 18.4088 16.2875 18.6364 16.9625 18.805C17.6375 18.9736 18.3167 19.0832 19 19.1338V16.9084L16.65 16.4279L14.975 18.1222Z"
                  fill="#005C84" />
              </g>
            </svg>
            <p>+48 513 487 427</p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <mask id="mask0_2042_224" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_2042_224)">
                <path
                  d="M4 20.1843C3.45 20.1843 2.97917 19.9862 2.5875 19.5901C2.19583 19.1939 2 18.7176 2 18.1613V6.02304C2 5.4667 2.19583 4.99045 2.5875 4.59427C2.97917 4.19809 3.45 4 4 4H20C20.55 4 21.0208 4.19809 21.4125 4.59427C21.8042 4.99045 22 5.4667 22 6.02304V18.1613C22 18.7176 21.8042 19.1939 21.4125 19.5901C21.0208 19.9862 20.55 20.1843 20 20.1843H4ZM20 8.04608L12.525 12.7749C12.4417 12.8255 12.3542 12.8635 12.2625 12.8887C12.1708 12.914 12.0833 12.9267 12 12.9267C11.9167 12.9267 11.8292 12.914 11.7375 12.8887C11.6458 12.8635 11.5583 12.8255 11.475 12.7749L4 8.04608V18.1613H20V8.04608ZM12 11.0806L20 6.02304H4L12 11.0806ZM4 8.29896V6.80697V6.83226V6.81961V8.29896Z"
                  fill="#005C84" />
              </g>
            </svg>
            <p>kostrzewa1968@interia.pl</p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <mask id="mask0_2042_228" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_2042_228)">
                <path
                  d="M13 11.7106V8.06912C13 7.78253 12.9042 7.54229 12.7125 7.34842C12.5208 7.15454 12.2833 7.0576 12 7.0576C11.7167 7.0576 11.4792 7.15454 11.2875 7.34842C11.0958 7.54229 11 7.78253 11 8.06912V12.0899C11 12.2248 11.025 12.3554 11.075 12.4819C11.125 12.6083 11.2 12.7221 11.3 12.8233L14.6 16.1613C14.7833 16.3467 15.0167 16.4395 15.3 16.4395C15.5833 16.4395 15.8167 16.3467 16 16.1613C16.1833 15.9758 16.275 15.7398 16.275 15.4532C16.275 15.1666 16.1833 14.9306 16 14.7452L13 11.7106ZM12 22.2304C10.6167 22.2304 9.31667 21.9649 8.1 21.4338C6.88333 20.9028 5.825 20.1821 4.925 19.2717C4.025 18.3613 3.3125 17.2908 2.7875 16.0601C2.2625 14.8295 2 13.5145 2 12.1152C2 10.7159 2.2625 9.40096 2.7875 8.17028C3.3125 6.93959 4.025 5.86907 4.925 4.9587C5.825 4.04833 6.88333 3.32762 8.1 2.79657C9.31667 2.26552 10.6167 2 12 2C13.3833 2 14.6833 2.26552 15.9 2.79657C17.1167 3.32762 18.175 4.04833 19.075 4.9587C19.975 5.86907 20.6875 6.93959 21.2125 8.17028C21.7375 9.40096 22 10.7159 22 12.1152C22 13.5145 21.7375 14.8295 21.2125 16.0601C20.6875 17.2908 19.975 18.3613 19.075 19.2717C18.175 20.1821 17.1167 20.9028 15.9 21.4338C14.6833 21.9649 13.3833 22.2304 12 22.2304ZM12 20.2074C14.2167 20.2074 16.1042 19.4192 17.6625 17.8429C19.2208 16.2667 20 14.3574 20 12.1152C20 9.873 19.2208 7.96376 17.6625 6.38747C16.1042 4.81118 14.2167 4.02304 12 4.02304C9.78333 4.02304 7.89583 4.81118 6.3375 6.38747C4.77917 7.96376 4 9.873 4 12.1152C4 14.3574 4.77917 16.2667 6.3375 17.8429C7.89583 19.4192 9.78333 20.2074 12 20.2074Z"
                  fill="#005C84" />
              </g>
            </svg>
            <p>Godziny otwarcia: Poniedziałek - Sobota: 8.00-19.00</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.6894827684705!2d18.220988712413156!3d52.19451677186073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471b317dddc4a7c1%3A0x31244be4d733ab70!2sELEKTRO%20Rafa%C5%82%20Kostrzewa%20Konin!5e0!3m2!1spl!2spl!4v1719522666553!5m2!1spl!2spl"
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="container container--padding-b appear-animation">
      <h2 class="title title--h2 title--bold">Skontaktuj się z nami!</h2>
      <div class="underline underline--mb"></div>
      <p class="text">
        Jesteśmy do Twojej dyspozycji od poniedziałku do piątku w godzinach
        8.00-16.00
      </p>
      <a href="tel:+48513487427">
        <CustomButton class="bg-granat">+48 513 487 427</CustomButton>
      </a>
    </div>
  </div>
  <FooterElektro />
</template>
<style lang="scss" scoped>
.contact {
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

.image {
  margin-left: 12px;
  min-height: 377px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#00000048, #00000048),
    url("../assets/img/b1e7971b36ecdc1ce6b2446a2fbea119.jpeg");
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

    @media (min-width: 922px) {
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

.contact-list {
  svg {
    margin-right: 12px;
  }

  li {
    list-style-type: none;
    display: flex;
    align-items: center;
  }
}

iframe {
  width: 100%;
  min-height: 396px;
  border: none;
}
</style>
