<template>
  <div>
    <section class="curtains-for-various">
      <div class="container">
        <div class="curtains-for-various__part">
          <h2 class="curtains-for-various__title">ШТОРЫ ДЛЯ РАЗЛИЧНЫХ ПОМЕЩЕНИЙ</h2>
          <p class="curtains-for-various__descr">
            Функции разных помещений дома влияют на особенности оформление окон.
            Мы предложим Вам рациональный выбор моделей и материалов штор, карнизов, жалюзи,
            плиссе и др. Это позволит сделать помещения удобными,
            а также, сэкономить ваше время и деньги!
          </p>
          <ul class="curtains-for-various__list">
            <li class="curtains-for-various__item">
              <img class="curtains-for-various__img" src="./images/1.jpg"
                   alt="">
              <p class="curtains-for-various__text">Детская</p>
            </li>
            <li class="curtains-for-various__item">
              <img class="curtains-for-various__img" src="./images/2.jpg"
                   alt="">
              <p class="curtains-for-various__text">Гостиная</p>
            </li>
            <li class="curtains-for-various__item">
              <img class="curtains-for-various__img" src="./images/3.jpg"
                   alt="">
              <p class="curtains-for-various__text">Кабинет</p>
            </li>
            <li class="curtains-for-various__item">
              <img class="curtains-for-various__img" src="./images/4.jpg"
                   alt="">
              <p class="curtains-for-various__text">Кухня</p>
            </li>
            <li class="curtains-for-various__item">
              <img class="curtains-for-various__img" src="./images/5.jpg"
                   alt="">
              <p class="curtains-for-various__text">Спальня</p>
            </li>
            <li class="curtains-for-various__item">
              <img class="curtains-for-various__img" src="./images/6.jpg"
                   alt="">
              <p class="curtains-for-various__text">Ванная</p>
            </li>
          </ul>
        </div>
        <div class="curtains-for-various__part">
          <h2 class="curtains-for-various__title">ШТОРЫ В РАЗЛИЧНЫХ СТИЛЯХ</h2>
          <p class="curtains-for-various__descr">
            Как соответствовать любимому стилю при оформлении окон? Какие варианты штор, тканей,
            карнизов предпочесть? Дизайнер подскажет Вам правильные решения, подготовит эскизы и
            предложит образцы тканей в любом из существующих стилей!
          </p>
          <ul class="curtains-for-various__list">
            <li class="curtains-for-various__item">
              <img class="curtains-for-various__img" src="./images/7.jpg"
                   alt="">
              <p class="curtains-for-various__text">Классический</p>
            </li>
            <li class="curtains-for-various__item">
              <img class="curtains-for-various__img" src="./images/8.jpg"
                   alt="">
              <p class="curtains-for-various__text">Этнический</p>
            </li>
            <li class="curtains-for-various__item">
              <img class="curtains-for-various__img" src="./images/9.jpg"
                   alt="">
              <p class="curtains-for-various__text">Фьюжн</p>
            </li>
            <li class="curtains-for-various__item">
              <img class="curtains-for-various__img"
                   src="./images/10.jpg"
                   alt="">
              <p class="curtains-for-various__text">Деревенский</p>
            </li>
            <li class="curtains-for-various__item">
              <img class="curtains-for-various__img"
                   src="./images/11.jpg"
                   alt="">
              <p class="curtains-for-various__text">Прованс</p>
            </li>
            <li class="curtains-for-various__item">
              <img class="curtains-for-various__img"
                   src="./images/12.jpg"
                   alt="">
              <p class="curtains-for-various__text">Современный</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  @import "../../assets/styles/mixins";

  .curtains-for-various {
    padding: 40px 0;
    .curtains-for-various__part {
      padding: 40px 0;
      @media (max-width: 991px) {
        padding: 15px 0;
      }
    }
    .curtains-for-various__title {
      @include block-title();
      margin-bottom: 40px;
    }
    .curtains-for-various__descr {
      text-align: center;
      margin-top: 0;
      margin-bottom: 40px;
    }
    .curtains-for-various__list {
      list-style-type: none;
      margin-top: 0;
      margin-bottom: 0;
      padding-left: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: center;
    }
    .curtains-for-various__item {
      margin-bottom: 30px;
      width: 30%;
      margin-left: 1%;
      margin-right: 1%;
      text-align: center;
      @media (max-width: 767px) {
        width: 48%;
      }
      @media (max-width: 575px) {
        width: 100%;
      }
    }
    .curtains-for-various__img {
      width: 100%;
      height: auto;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 20px;
    }
    .curtains-for-various__text {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 18px;
      text-transform: uppercase;
    }
    @media (max-width: 991px) {
      padding: 30px 0;
    }
  }
</style>
