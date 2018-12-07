<template>
  <div id="app">

    <div class="wrapper">

      <app-header/>

      <div class="page-content">

        <app-first/>

        <app-our-benefits/>

        <app-we-offer/>

        <app-feedback/>

        <app-curtains-for-various/>

        <app-designer-house/>

        <app-gallery-of-works/>

        <app-benefits-bottom/>

        <app-how-works/>

        <app-feedback/>

        <app-about-our-warranties/>

        <app-index-contacts/>

      </div>

      <app-footer/>

    </div>

    <!--modals-->
    <div class="hidden">
      <div id="header-phone" class="phone-modal">
        <h3 class="header-phone__title">Заказать звонок</h3>

        <form method="post" class="js-order-form">
          <input type="text" name="order-name" class="phone-modal__input" placeholder="Ваше имя">
          <input
            type="tel"
            name="order-phone"
            class="phone-modal__input my-phone"
            placeholder="+7 XXX XXX XX XX"
          >
          <button type="submit" class="phone-modal__button">Отправить</button>
        </form>
      </div>

      <div id="designer-phone" class="phone-modal">
        <h3 class="header-phone__title">ВЫЗВАТЬ ДИЗАЙНЕРА НА ДОМ</h3>

        <form method="post" class="js-order-form">
          <input type="text" name="order-name" class="phone-modal__input" placeholder="Ваше имя">
          <input
            type="tel"
            name="order-phone"
            class="phone-modal__input my-phone"
            placeholder="+7 XXX XXX XX XX"
          >
          <button type="submit" class="phone-modal__button">Отправить</button>
        </form>
      </div>

      <div id="view-catalog" class="phone-modal">
        <p class="view-catalog-form-text">Заполните форму и мы вам отправим наши работы</p>

        <form method="post" class="js-order-form">
          <input type="text" name="order-name" class="phone-modal__input" placeholder="Ваше имя">
          <input type="email" name="order-email" class="phone-modal__input" placeholder="Ваш email">
          <input
            type="tel"
            name="order-phone"
            class="phone-modal__input my-phone"
            placeholder="+7 XXX XXX XX XX"
          >
          <button type="submit" class="phone-modal__button">Отправить</button>
        </form>
      </div>

    </div>
    <!--modals end-->

  </div>
</template>

<script>
import Header from '@/components/Header';
import First from '@/components/First';
import OurBenefits from '@/components/OurBenefits';
import WeOffer from '@/components/WeOffer';
import Feedback from '@/components/Feedback';
import CurtainsForVarious from '@/components/CurtainsForVarious';
import DesignerHouse from '@/components/DesignerHouse';
import GalleryOfWorks from '@/components/GalleryOfWorks';
import BenefitsBottom from '@/components/BenefitsBottom';
import HowWorks from '@/components/HowWorks';
import AboutOurWarranties from '@/components/AboutOurWarranties';
import IndexContacts from '@/components/IndexContacts';
import Footer from '@/components/Footer';

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-first': First,
    'app-our-benefits': OurBenefits,
    'app-we-offer': WeOffer,
    'app-feedback': Feedback,
    'app-curtains-for-various': CurtainsForVarious,
    'app-designer-house': DesignerHouse,
    'app-gallery-of-works': GalleryOfWorks,
    'app-benefits-bottom': BenefitsBottom,
    'app-how-works': HowWorks,
    'app-about-our-warranties': AboutOurWarranties,
    'app-index-contacts': IndexContacts,
    'app-footer': Footer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">

  @import "assets/styles/var";
  @import "assets/styles/mixins";
  @import "assets/styles/normalize";
  @import "assets/styles/grid";
  @import "assets/styles/base";
  @import "assets/styles/app";

</style>
