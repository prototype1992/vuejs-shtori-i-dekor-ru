<template>
  <section class="benefits-bottom">
    <div class="container">
      <h2 class="benefits-bottom__title">НАШИ ПРЕИМУЩЕСТВА</h2>
      <ul class="benefits-bottom__list">
        <li class="benefits-bottom__item">
          <img src="./images/1.png" alt="img" class="benefits-bottom__img">
          <p class="benefits-bottom__text">Наличие салона и собственного пошивочного цеха</p>
        </li>
        <li class="benefits-bottom__item">
          <img src="./images/2.png" alt="img" class="benefits-bottom__img">
          <p class="benefits-bottom__text">Большой выбор тканей со склада (более 18,5 тыс
            вариантов)</p>
        </li>
        <li class="benefits-bottom__item">
          <img src="./images/3.png" alt="img" class="benefits-bottom__img">
          <p class="benefits-bottom__text">Дипломированные дизайнеры с опытом работы более 8
            лет</p>
        </li>
        <li class="benefits-bottom__item">
          <img src="./images/4.png" alt="img" class="benefits-bottom__img">
          <p class="benefits-bottom__text">Профессиональные замерщики-установщики с опытом работы
            более 10 лет</p>
        </li>
        <li class="benefits-bottom__item benefits-bottom__item_nomargin">
          <img src="./images/5.png" alt="img" class="benefits-bottom__img">
          <p class="benefits-bottom__text">Квалифицированные швеи со стажем более 15 лет</p>
        </li>
        <li class="benefits-bottom__item benefits-bottom__item_nomargin">
          <img src="./images/6.png" alt="img" class="benefits-bottom__img">
          <p class="benefits-bottom__text">Заключение официального Договора</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  @import "../../assets/styles/mixins";

  .benefits-bottom {
    padding: 50px 0;
    overflow-x: hidden;
    background-color: #ffffff;
    background-image: url('./images/benefits-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    .benefits-bottom__title {
      @include block-title();
      margin-bottom: 40px;
    }
    .benefits-bottom__list {
      @include list-clear();

      border: 5px solid rgba(210, 186, 101, 1);
      background-color: transparent;
      border-radius: 0;

      position: relative;
      color: #313140;

      max-width: 860px;
      margin-left: auto;
      margin-right: auto;

      display: flex;
      flex-wrap: wrap;
    }
    .benefits-bottom__item {
      padding: 20px;
      position: relative;
      font-size: 18px;
      margin-bottom: 25px;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      width: 48%;
      @media (max-width: 991px) {
        font-size: 14px;
        margin-bottom: 15px;
        padding: 12px;
      }
      @media (max-width: 575px) {
        width: 100%;
        padding: 20px;
        margin-bottom: 0;
      }
    }
    .benefits-bottom__item_nomargin {
      margin-bottom: 0;
    }

    .benefits-bottom__img {
      margin-right: 20px;
      width: 87px;
      @media (max-width: 991px) {
        width: 60px;
      }
    }

    .benefits-bottom__text {
      margin-top: 0;
      margin-bottom: 0;
      max-width: 270px;
      @media (max-width: 575px) {
        max-width: 405px;
      }
    }

    @media (max-width: 991px) {
      padding: 30px 0;
    }
  }
</style>
