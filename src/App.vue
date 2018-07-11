<template>
  <div id="app">

    <div class="wrapper">
      <div class="main">
        <div class="all">

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

        </div>
      </div>
      <div class="footer">
        <div class="container">
          <p class="copyright">Copyright: 2018 - Студия дизайна "Шторы и Декор"</p>
          <a href="http://alisultanov.ru/" target="_blank" class="made-site">Разработка сайта - Alisultanov.ru</a>
        </div>
      </div>
    </div>

    <!--modals-->
    <div class="hidden">
      <div id="header-phone" class="phone-modal">
        <h3 class="header-phone__title">Заказать звонок</h3>

        <form method="post" class="js-order-form">
          <input type="text" name="order-name" class="phone-modal__input" placeholder="Ваше имя">
          <input type="tel" name="order-phone" class="phone-modal__input my-phone" placeholder="+7 XXX XXX XX XX">
          <button type="submit" class="phone-modal__button">Отправить</button>
        </form>
      </div>

      <div id="designer-phone" class="phone-modal">
        <h3 class="header-phone__title">ВЫЗВАТЬ ДИЗАЙНЕРА НА ДОМ</h3>

        <form method="post" class="js-order-form">
          <input type="text" name="order-name" class="phone-modal__input" placeholder="Ваше имя">
          <input type="tel" name="order-phone" class="phone-modal__input my-phone" placeholder="+7 XXX XXX XX XX">
          <button type="submit" class="phone-modal__button">Отправить</button>
        </form>
      </div>

      <div id="view-catalog" class="phone-modal">
        <p class="view-catalog-form-text">Заполните форму и мы вам отправим наши работы</p>

        <form method="post" class="js-order-form">
          <input type="text" name="order-name" class="phone-modal__input" placeholder="Ваше имя">
          <input type="email" name="order-email" class="phone-modal__input" placeholder="Ваш email">
          <input type="tel" name="order-phone" class="phone-modal__input my-phone" placeholder="+7 XXX XXX XX XX">
          <button type="submit" class="phone-modal__button">Отправить</button>
        </form>
      </div>

    </div>
    <!--modals end-->

  </div>
</template>

<script>
  import Header from './components/Header/index'
  import First from './components/First/index'
  import OurBenefits from './components/OurBenefits/index'
  import Feedback from './components/Feedback/index'
  import BenefitsBottom from './components/BenefitsBottom/index'
  import HowWorks from './components/HowWorks/index'
  import IndexContacts from './components/IndexContacts/index'
  import AboutOurWarranties from './components/AboutOurWarranties/index'
  import WeOffer from './components/WeOffer/index'
  import DesignerHouse from './components/DesignerHouse/index'
  import CurtainsForVarious from './components/CurtainsForVarious/index'
  import GalleryOfWorks from './components/GalleryOfWorks/index'

  export default {
    name: 'app',
    components: {
      'app-header': Header,
      'app-first': First,
      'app-our-benefits': OurBenefits,
      'app-feedback': Feedback,
      'app-benefits-bottom': BenefitsBottom,
      'app-how-works': HowWorks,
      'app-index-contacts': IndexContacts,
      'app-about-our-warranties': AboutOurWarranties,
      'app-we-offer': WeOffer,
      'app-designer-house': DesignerHouse,
      'app-curtains-for-various': CurtainsForVarious,
      'app-gallery-of-works': GalleryOfWorks,
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">

  @import "assets/styles/var";
  @import "assets/styles/mixins";
  @import "assets/styles/normalize";
  @import "assets/styles/grid";
  @import "assets/styles/base";
  @import "assets/styles/app";

</style>
