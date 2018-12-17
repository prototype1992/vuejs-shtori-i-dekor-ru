<template>
  <div>
    <section class="we-offer">
      <h2 class="we-offer__title">МЫ ПРЕДЛАГАЕМ ЛЮБОЕ ОФОРМЛЕНИЕ ОКОН И ТЕКСТИЛЬ</h2>

      <div class="container">
        <ul class="we-offer__list">
          <li class="we-offer__item">
            <img src="./images/1.jpg" class="we-offer__img" alt="benefits">
            <p class="we-offer__text">Шторы и ламбрекены</p>
          </li>
          <li class="we-offer__item">
            <img src="./images/2.jpg" class="we-offer__img" alt="benefits">
            <p class="we-offer__text">Жалюзи</p>
          </li>
          <li class="we-offer__item">
            <img src="./images/3.jpg" class="we-offer__img" alt="benefits">
            <p class="we-offer__text">Карнизы для штор</p>
          </li>
          <li class="we-offer__item">
            <img src="./images/4.jpg" class="we-offer__img" alt="benefits">
            <p class="we-offer__text">Рулонные шторы</p>
          </li>
          <li class="we-offer__item">
            <img src="./images/5.jpg" class="we-offer__img" alt="benefits">
            <p class="we-offer__text">Шторы плиссе</p>
          </li>
          <li class="we-offer__item">
            <img src="./images/6.jpg" class="we-offer__img" alt="benefits">
            <p class="we-offer__text">Домашний текстиль</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WeOffer',
};
</script>

<style lang="scss">
  @import "../../assets/styles/mixins";

  .we-offer {
    padding: 80px 0;
    .we-offer__title {
      @include block-title();
      margin-bottom: 40px;
    }

    .we-offer__list {
      list-style-type: none;
      margin-top: 0;
      margin-bottom: 0;
      padding-left: 0;

      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: center;
    }

    .we-offer__item {
      margin-bottom: 30px;
      width: 30%;
      margin-right: 1%;
      margin-left: 1%;
      text-align: center;

      @media (max-width: 768px) {
        width: 45%;
        margin-left: auto;
        margin-right: auto;
      }
      @media (max-width: 480px) {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
      }
    }

    .we-offer__img {
      width: 100%;
      height: auto;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 15px;
    }

    .we-offer__text {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 18px;
      text-transform: uppercase;
    }

    @media (max-width: 768px) {
      padding: 30px 0;
    }
  }
</style>
