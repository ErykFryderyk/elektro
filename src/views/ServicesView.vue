<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useScrollAnimations, clearScrollTriggers, slideInFrom } from '@/assets/utils/useScrollAnimations';

// COMPONENTS
import FooterElektro from "../components/FooterElektro.vue";
import CustomButton from "@/components/CustomButton.vue";
import SplitSection from "@/components/SplitSection.vue";
import SectionImage from '@/components/SectionImage.vue';
// ICON
import SmallThunderIcon from "@/assets/svg/SmallThunderIcon.vue";
import ClearDayIcon from "@/assets/svg/ClearDayIcon.vue";
import HeatIcon from "@/assets/svg/HeatIcon.vue";
import AvgPaceIcon from "@/assets/svg/AvgPaceIcon.vue";
import InstantMixIcon from "@/assets/svg/InstantMixIcon.vue";

onMounted(() => {
  // Wywołanie funkcji z selektorem elementów do animacji
  useScrollAnimations('.slide-up');
  slideInFrom('.slide-in');
});

onUnmounted(() => {
  // Czyszczenie instancji ScrollTrigger po zniszczeniu komponentu
  clearScrollTriggers();
});
</script>
<template>
  <div class="services">
    <div class="container container--padding-b">
      <div class="">
        <SplitSection>
          <template #left>
            <div class="path">
              <p class="path__text">
                <router-link to="/">Strona główna</router-link> > Nasza oferta
              </p>
            </div>
            <div class="services-content">
              <div class="services-contnet__header">
                <h1 class="title title--h2 title--bold slide-in">Co oferujemy?</h1>
                <div class="underline underline--mb slide-in"></div>
              </div>
              <div class="services-content__text">

                <h2 class="title title--h2 title--uppercase title-small title--medium">
                  Wszystko czego potrzebujesz!
                </h2>
                <h2 class="title title--h2 title--uppercase title-small title--medium title--gray title-mb">
                  Z zakresu elektryki
                </h2>
                <p class="text slide-up">
                  Jesteśmy doświadczonymi elektrykami z wiedzą w zakresie
                  różnorodnych instalacji elektrycznych. Zapewniamy kompleksowe
                  usługi elektryczne, zgodne z najnowszymi standardami i przepisami.
                </p>
              </div>
            </div>
          </template>
          <template #right>
            <div class="image"></div>
            <!-- <SectionImage /> -->
            <!-- <div class="image-wrapper"> -->
            <!-- <div class="rectangle rectangle--yellow"></div> -->
            <!-- <img src="../assets/img/services.jpeg" alt="services-hero-image" /> -->
            <!-- </div> -->
          </template>
        </SplitSection>
      </div>
    </div>
    <div class="container container--padding-b">
      <div class="services-icon">
        <div class="services-icon__rect"></div>
        <SmallThunderIcon class="transform" />
        <h2 class="title title--h2 title--bold">Prace elektryczne</h2>
      </div>
      <p class="text text--bold">Prace elektryczne:</p>
      <ul>
        <li class="text">
          Projektowanie, instalacja i konserwacja systemów elektrycznych w
          różnych budynkach.
        </li>
        <li class="text">
          Naprawa awarii elektrycznych oraz dostosowywanie instalacji do
          obowiązujących norm.
        </li>
        <li class="text">
          podłączanie urządzeń elektrycznych, montaż systemów alarmowych i
          automatyki.
        </li>
      </ul>
      <div class="services-icon">
        <div class="services-icon__rect"></div>
        <ClearDayIcon class="transform" />
        <h2 class="title title--h2 title--bold">Fotowoltaika</h2>
      </div>
      <p class="text text--bold">Instalacje Fotowoltaiczne:</p>
      <ul>
        <li class="text">
          Ocena miejsca instalacji, projektowanie i montaż paneli
          fotowoltaicznych.
        </li>
        <li class="text">
          nstalacja inwertera oraz połączenia elektryczne między panelami a
          systemem energetycznym.
        </li>
        <li class="text">
          Testowanie, uruchamianie i konserwacja systemu fotowoltaicznego.
        </li>
      </ul>
      <div class="services-icon">
        <div class="services-icon__rect"></div>
        <HeatIcon class="transform" />
        <h2 class="title title--h2 title--bold">Pompy ciepła</h2>
      </div>
      <p class="text text--bold">Montaż Pomp Ciepła:</p>
      <ul>
        <li class="text">
          Ocena miejsca montażu pompy ciepła i podłączenie do źródła
          zasilania.
        </li>
        <li class="text">Montaż sterownika i integracja z systemem grzewczym budynku.</li>
        <li class="text">
          Prace na instalacji elektrycznej, testowanie, uruchamianie i
          utrzymanie pompy ciepła.
        </li>
      </ul>
      <div class="services-icon">
        <div class="services-icon__rect"></div>
        <AvgPaceIcon class="transform" />
        <h2 class="title title--h2 title--bold">Pomiary</h2>
      </div>
      <p class="text text--bold">Pomiary Ogólne:</p>
      <ul>
        <li class="text">Pomiar oporu izolacji</li>
        <li class="text">Pomiar rezystancji uziemienia</li>
        <li class="text">Pomiar napięcia i prądu</li>
      </ul>
      <p class="text text--bold">Pomiary Instalacji Elektrycznych:</p>
      <ul>
        <li class="text">Pomiar impedancji pętli zwarcia</li>
        <li class="text">Pomiar napięcia skokowego</li>
        <li class="text">Kontrola parametrów ochronnych</li>
      </ul>
      <p class="text text--bold">Pomiary Oświetlenia:</p>
      <ul>
        <li class="text">Pomiar natężenia światła</li>
        <li class="text">Pomiar mocy oświetlenia</li>
        <li class="text">Diagnostyka i poprawa efektywności energetycznej oświetlenia</li>
      </ul>
      <p class="text text--bold">Pomiary Aparatury Elektrycznej:</p>
      <ul>
        <li class="text">Badanie stanu technicznego urządzeń</li>
        <li class="text">Pomiar izolacji transformatorów</li>
        <li class="text">Analiza skuteczności układów zabezpieczających</li>
      </ul>
      <div class="services-icon">
        <div class="services-icon__rect"></div>
        <InstantMixIcon class="transform" />
        <h2 class="title title--h2 title--bold">Rozdzielnice</h2>
      </div>
      <p class="text">
        Zaufaj profesjonalizmowi naszej firmy w zakresie składania rozdzielnic
        elektrycznych. Oferujemy kompleksowe usługi projektowania, montażu i
        konserwacji rozdzielnic, dostosowując się do indywidualnych potrzeb
        każdego klienta.
      </p>
      <p class="text text--bold">Projektowanie Rozdzielnic:</p>
      <ul>
        <li class="text">
          Indywidualne podejście do projektowania z uwzględnieniem specyfiki
          instalacji klienta.
        </li>
        <li class="text">
          Optymalizacja rozdzielnic pod kątem efektywności energetycznej.
        </li>
      </ul>
      <p class="text text--bold">Montaż Rozdzielnic:</p>
      <ul>
        <li class="text">Montaż rozdzielnic niskonapięciowych i średnionapięciowych.</li>
        <li class="text">
          Przygotowanie instalacji pod rozdzielnie, włączając w to
          okablowanie.
        </li>
      </ul>
      <p class="text text--bold">Modernizacja Istniejących Rozdzielnic:</p>
      <ul>
        <li class="text">
          Diagnoza istniejących rozdzielnic pod kątem zgodności z normami.
        </li>
        <li class="text">
          Modernizacja i dostosowanie rozdzielnic do aktualnych standardów
          bezpieczeństwa.
        </li>
      </ul>
      <p class="text text--bold">Konserwacja i Serwis:</p>
      <ul>
        <li class="text">
          egularna konserwacja rozdzielnic w celu zapewnienia ich
          niezawodności.
        </li>
        <li class="text">Szybka interwencja w przypadku awarii.</li>
      </ul>
    </div>
    <div class="container container--padding-b">
      <h2 class="title title--h2 title--bold">Dlaczego my?</h2>
      <div class="underline underline--mb"></div>
      <p class="text text--bold">Dlaczego Wybrać Nasze Usługi:</p>
      <ul>
        <li class="text">
          Doświadczeni elektrycy z wiedzą w zakresie różnorodnych instalacji
          elektrycznych
        </li>
        <li class="text">
          Specjalizacja w instalacjach fotowoltaicznych, dostarczając energię
          ze źródeł odnawialnych
        </li>
        <li class="text">
          ompleksowe podejście do montażu pomp ciepła, z uwzględnieniem
          integracji z systemem grzewczym
        </li>
        <p class="text text--bold">Skontaktuj się z Nami Dziś:</p>
        <li class="text">
          Zespół doświadczonych elektryków gotów do obsługi różnorodnych
          projektów
        </li>
        <li class="text">
          Zapewniamy kompleksowe usługi elektryczne, zgodne z najnowszymi
          standardami i przepisami
        </li>
      </ul>
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
.services {
  padding-top: 10px;
  background: #fff;
}

.path {
 margin-bottom: 24px;
  &__text {
    font-size: 16px;
    color: #797979;
    margin-bottom: 24px
  }
}
.services-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
}

.image {
  margin-left: 12px;
  min-height: 377px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#00000041, #00000042),
    url("../assets/img/services.jpeg");
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

.services-icon {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  h2 {
    width: 100%;
  }

  @media (min-width: 768px) {
    transform: translateX(-50%);

    h2 {
      width: auto;
    }
  }

  @media (min-width: 1441px) {
    transform: translateX(-140px);
  }

  &__rect {
    width: 50%;
    height: 35px;
    flex-shrink: 0;
    background-color: #f9cb53;


    @media (min-width: 1441px) {
      width: 100px;
      height: 35px;
    }
  }

  .transform {
    transform: translateX(-26px);
  }
}

li {
  list-style: none;
  margin-left: 20px;
}

li::before {
  content: "•";
  font-size: 25px;
  color: #f9cb53;
  display: inline-block;
  width: 15px;
}
</style>
