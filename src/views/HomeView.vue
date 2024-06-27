<script setup>
import CustomButton from "@/components/CustomButton.vue";
import TunderIcon from "../assets/svg/TunderIcon.vue";
import LogoElectro from "../assets/svg/LogoElectro.vue";
import IconBox from "@/components/IconBox.vue";
import FooterElektro from "../components/FooterElektro.vue";
</script>
<template>
  <div class="home">
    <div class="hero">
      <TunderIcon />
    </div>
    <div class="container">
      <!-- eslint-disable-next-line -->
      <h1 class="title title--h2">Usługi elektryczne na najwyższym poziomie</h1>
      <div class="underline underline--mb"></div>
      <CustomButton class="bg-granat">Skontaktuj się</CustomButton>
    </div>
    <div class="container">
      <h2 class="title title--h2 title--mb">Elektro</h2>
      <!-- eslint-disable-next-line -->
      <p class="text">Firma Elektro istnieje od 2010 roku. Oferujemy szeroki wachlarz usług, począwszy od wykonania modernizacji, czy rozbudowy instalacji elektrycznych, po montaż domofonów, alarmów, telewizji przemysłowej a skończywszy na składaniu rozdzielni. Mimo, iż jesteśmy młodą firmą realizowaliśmy wiele zleceń na terenie Konina i okolic. Dokładamy wszelkich starań, aby klient był usatysfakcjonowany ze współpracy z nami. Największy nacisk kładziemy na dokładność i terminowość wykonywanych prac. Dążymy do rozwoju firmy oraz podnoszenia jakości świadczonych usług. Posiadamy potrzebne kwalifikacje, uprawnienia, licencje oraz niezbędne przy pracy elektryka doświadczenie</p>
      <CustomButton class="bg-granat">Sprawdź naszą ofertę</CustomButton>
    </div>
    <div class="image">
      <LogoElectro />
    </div>
    <div class="container">
      <h2 class="title title--h2">Czym się zajmujemy</h2>
      <div class="underline"></div>
    </div>
    <div class="container">
      <div class="icon-box-wrapper">
        <icon-box>
          <template #icon-box-title>To jest zastepczy tekst</template>
          <template #icon-box-list>
            <!-- <li>Instalacje elektryczne w domach i f irmach</li> -->
            <!-- <li>Instalacje oświetlenia zewnętrzne i wewnętrzne</li> -->
          </template>
        </icon-box>
        <icon-box>
          <template #icon-box-title>To jest zastepczy tekst</template>
          <template #icon-box-list>
            <!-- <li class="icon-box__list-el"> -->
            <!-- Instalacje elektryczne w domach i f irmach -->
            <!-- </li> -->
            <!-- <li>Instalacje oświetlenia zewnętrzne i wewnętrzne</li> -->
          </template>
        </icon-box>
        <icon-box>
          <template #icon-box-title>To jest zastepczy tekst</template>
          <template #icon-box-list>
            <!-- <li>Instalacje elektryczne w domach i f irmach</li> -->
            <!-- <li>Instalacje oświetlenia zewnętrzne i wewnętrzne</li> -->
          </template>
        </icon-box>
        <icon-box>
          <template #icon-box-title>To jest zastepczy tekst</template>
          <template #icon-box-list>
            <!-- <li>Instalacje elektryczne w domach i f irmach</li> -->
            <!-- <li>Instalacje oświetlenia zewnętrzne i wewnętrzne</li> -->
          </template>
        </icon-box>
      </div>
    </div>
    <div class="container">
      <h2 class="title title--h2">Nasze Realizacje</h2>
      <div class="underline"></div>
    </div>
    <!-- Slider -->
    <div class="container">
      <h2 class="title title--h2">Skontaktuj się z nami</h2>
      <div class="underline"></div>
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 400px;
  display: flex;
  justify-content: center;
}
.image {
  min-height: 377px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#00233299, #00233299),
    url("../assets/img/88a59046829488b05dab2f59283e2904.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.icon-box-wrapper {
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    gap: 20px;
  }
}
</style>
