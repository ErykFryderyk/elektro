<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useScrollAnimations, clearScrollTriggers, slideInFrom } from '@/assets/utils/useScrollAnimations';

// COMPONENTS
import FooterElektro from "../components/FooterElektro.vue";
import CustomButton from "@/components/CustomButton.vue";
import SplitSection from "@/components/SplitSection.vue";
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
    <div class="container">
      <div class="">
        <SplitSection>
          <template #left>
            <div class="">
              <p style="font-size: 16px; color: #797979; margin-bottom: 24px">
                Strona główna > Nasza oferta
              </p>
            </div>
            <!-- eslint-disable-next-line -->

            <h1 class="title title--h2 title--bold slide-in">Co oferujemy?</h1>
            <div class="underline underline--mb slide-in"></div>
            <h2
              class="title title--h2 title--uppercase title-small title--medium"
            >
              Wszystko czego potrzebujesz!
            </h2>
            <h2
              class="title title--h2 title--uppercase title-small title--medium title--gray title-mb"
            >
              Z zakresu elektryki
            </h2>
            <!-- eslint-disable-next-line -->
            <p class="text slide-up">
              Jesteśmy doświadczonymi elektrykami z wiedzą w zakresie
              różnorodnych instalacji elektrycznych. Zapewniamy kompleksowe
              usługi elektryczne, zgodne z najnowszymi standardami i przepisami.
            </p>
          </template>
          <template #right>
            <div class="image-wrapper">
              <div class="rectangle rectangle--yellow"></div>
              <img
                src="../assets/img/services.jpeg"
                alt="services-hero-image"
              />
            </div>
          </template>
        </SplitSection>
      </div>
      <div class="">
        <div class="services-icon">
          <div class="services-icon__rect"></div>
          <SmallThunderIcon class="transform" />
        </div>
        <h2 class="title title--h2 title--bold">Prace elektryczne</h2>
        <!-- eslint-disable-next-line -->
        <p class="text">Prace elektryczne ogólne:</p>
        <ul>
          <li>
            Projektowanie, instalacja i konserwacja systemów elektrycznych w
            różnych budynkach.
          </li>
          <li>
            Naprawa awarii elektrycznych oraz dostosowywanie instalacji do
            obowiązujących norm.
          </li>
          <li>
            odłączanie urządzeń elektrycznych, montaż systemów alarmowych i
            automatyki.
          </li>
        </ul>
        <div class="services-icon">
          <div class="services-icon__rect"></div>
          <ClearDayIcon class="transform" />
        </div>
        <h2 class="title title--h2 title--bold">Fotowoltaika</h2>
        <!-- eslint-disable-next-line -->
        <p class="text">Instalacje Fotowoltaiczne:</p>
        <ul>
          <li>
            Ocena miejsca instalacji, projektowanie i montaż paneli
            fotowoltaicznych.
          </li>
          <li>
            nstalacja inwertera oraz połączenia elektryczne między panelami a
            systemem energetycznym.
          </li>
          <li>
            Testowanie, uruchamianie i konserwacja systemu fotowoltaicznego.
          </li>
        </ul>
        <div class="services-icon">
          <div class="services-icon__rect"></div>
          <HeatIcon class="transform" />
        </div>
        <h2 class="title title--h2 title--bold">Pompy ciepła</h2>
        <!-- eslint-disable-next-line -->
        <p class="text">Montaż Pomp Ciepła:</p>
        <ul>
          <li>
            Ocena miejsca montażu pompy ciepła i podłączenie do źródła
            zasilania.
          </li>
          <li>Montaż sterownika i integracja z systemem grzewczym budynku.</li>
          <li>
            Prace na instalacji elektrycznej, testowanie, uruchamianie i
            utrzymanie pompy ciepła.
          </li>
        </ul>
        <div class="services-icon">
          <div class="services-icon__rect"></div>
          <AvgPaceIcon class="transform" />
        </div>
        <h2 class="title title--h2 title--bold">Pomiary</h2>
        <!-- eslint-disable-next-line -->
        <p class="text">Pomiary Ogólne:</p>
        <ul>
          <li>Pomiar oporu izolacji</li>
          <li>Pomiar rezystancji uziemienia</li>
          <li>Pomiar napięcia i prądu</li>
        </ul>
        <p class="text">Pomiary Instalacji Elektrycznych:</p>
        <ul>
          <li>Pomiar impedancji pętli zwarcia</li>
          <li>Pomiar napięcia skokowego</li>
          <li>Kontrola parametrów ochronnych</li>
        </ul>
        <p class="text">Pomiary Oświetlenia:</p>
        <ul>
          <li>Pomiar natężenia światła</li>
          <li>Pomiar mocy oświetlenia</li>
          <li>Diagnostyka i poprawa efektywności energetycznej oświetlenia</li>
        </ul>
        <p class="text">Pomiary Aparatury Elektrycznej:</p>
        <ul>
          <li>Badanie stanu technicznego urządzeń</li>
          <li>Pomiar izolacji transformatorów</li>
          <li>Analiza skuteczności układów zabezpieczających</li>
        </ul>
        <div class="services-icon">
          <div class="services-icon__rect"></div>
          <InstantMixIcon class="transform" />
        </div>
        <h2 class="title title--h2 title--bold">Rozdzielnice</h2>
        <!-- eslint-disable-next-line -->
        <p class="text">
          Zaufaj profesjonalizmowi naszej firmy w zakresie składania rozdzielnic
          elektrycznych. Oferujemy kompleksowe usługi projektowania, montażu i
          konserwacji rozdzielnic, dostosowując się do indywidualnych potrzeb
          każdego klienta.
        </p>
        <p class="text">Projektowanie Rozdzielnic:</p>
        <ul>
          <li>
            Indywidualne podejście do projektowania z uwzględnieniem specyfiki
            instalacji klienta.
          </li>
          <li>
            Optymalizacja rozdzielnic pod kątem efektywności energetycznej.
          </li>
        </ul>
        <p class="text">Montaż Rozdzielnic:</p>
        <ul>
          <li>Montaż rozdzielnic niskonapięciowych i średnionapięciowych.</li>
          <li>
            Przygotowanie instalacji pod rozdzielnie, włączając w to
            okablowanie.
          </li>
        </ul>
        <p class="text">Modernizacja Istniejących Rozdzielnic:</p>
        <ul>
          <li>
            Diagnoza istniejących rozdzielnic pod kątem zgodności z normami.
          </li>
          <li>
            Modernizacja i dostosowanie rozdzielnic do aktualnych standardów
            bezpieczeństwa.
          </li>
        </ul>
        <p class="text">Konserwacja i Serwis:</p>
        <ul>
          <li>
            egularna konserwacja rozdzielnic w celu zapewnienia ich
            niezawodności.
          </li>
          <li>Szybka interwencja w przypadku awarii.</li>
        </ul>
      </div>
      <div class="">
        <!-- eslint-disable-next-line -->
        <h2 class="title title--h2 title--bold">Dlaczego my?</h2>
        <div class="underline underline--mb"></div>
        <!-- eslint-disable-next-line -->
        <p class="text">Dlaczego Wybrać Nasze Usługi:</p>
        <ul>
          <li>
            Doświadczeni elektrycy z wiedzą w zakresie różnorodnych instalacji
            elektrycznych
          </li>
          <li>
            Specjalizacja w instalacjach fotowoltaicznych, dostarczając energię
            ze źródeł odnawialnych
          </li>
          <li>
            ompleksowe podejście do montażu pomp ciepła, z uwzględnieniem
            integracji z systemem grzewczym
          </li>
          <p>Skontaktuj się z Nami Dziś:</p>
          <li>
            espół doświadczonych elektryków gotów do obsługi różnorodnych
            projektów
          </li>
          <li>
            Zapewniamy kompleksowe usługi elektryczne, zgodne z najnowszymi
            standardami i przepisami
          </li>
        </ul>
      </div>
      <div class="">
        <!-- eslint-disable-next-line -->
        <h2 class="title title--h2 title--bold">Skontaktuj się z nami!</h2>
        <div class="underline underline--mb"></div>
        <p class="text">
          <!-- eslint-disable-next-line -->
          Jesteśmy do Twojej dyspozycji od poniedziałku do piątku w godzinach
          8.00-16.00
        </p>
        <CustomButton class="bg-granat">Skontaktuj się</CustomButton>
      </div>
    </div>
    <FooterElektro />
  </div>
</template>
<style lang="scss" scoped>
.services {
  padding-top: 10px;
  background: #fff;
}
.services-icon {
  display: flex;
  align-items: center;
  &__rect {
    width: 50%;
    height: 35px;
    flex-shrink: 0;
    background-color: #f9cb53;
  }
  .transform {
    transform: translateX(-26px);
  }
}
</style>
