<template>
  <section class="our-benefits">
    <h2 class="our-benefits__title">ВАШИ ВЫГОДЫ</h2>
    <p class="our-benefits__descr">
      При заказе штор или солнцезащитных систем в нашей студии Вы получаете:
    </p>

    <div class="container">
      <ul class="our-benefits__list">
        <li class="our-benefits__item">
          <img src="./images/1.png" class="our-benefits__img" alt="benefits">
          <p class="our-benefits__text">
            Бесплатный выезд<br>
            дизайнера и замерщика
          </p>
        </li>
        <li class="our-benefits__item">
          <img src="./images/2.png" class="our-benefits__img" alt="benefits">
          <p class="our-benefits__text">Бесплатные <br>эскизы</p>
        </li>
        <li class="our-benefits__item">
          <img src="./images/3.png" class="our-benefits__img" alt="benefits">
          <p class="our-benefits__text">Строгое соблюдение <br>сроков выполнения работ</p>
        </li>
        <li class="our-benefits__item our-benefits__item_no-mb">
          <img src="./images/4.png" class="our-benefits__img" alt="benefits">
          <p class="our-benefits__text">Любые формы оплаты,<br>
            в том числе безналичные</p>
        </li>
        <li class="our-benefits__item our-benefits__item_no-mb">
          <img src="./images/5.png" class="our-benefits__img" alt="benefits">
          <p class="our-benefits__text">Гарантийное
            обслуживание <br>2 годa</p>
        </li>
        <li class="our-benefits__item our-benefits__item_no-mb">
          <img src="./images/6.png" class="our-benefits__img" alt="benefits">
          <p class="our-benefits__text">Экономия до 15% <br>от
            аналогичного объема</p>
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

  .our-benefits {
    padding: 80px 0;
    .our-benefits__title {
      @include block-title();
      margin-bottom: 40px;
    }

    .our-benefits__descr {
      margin-top: 0;
      margin-bottom: 40px;
      text-align: center;
      font-size: 22px;
      line-height: 30px;
    }

    .our-benefits__list {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-left: 0;
      margin-top: 0;
      margin-bottom: 0;
      list-style-type: none;
    }

    .our-benefits__item {
      width: 30%;
      margin-bottom: 30px;
      @media (max-width: 768px) {
        width: 50%;
      }
    }

    .our-benefits__item_no-mb {
      margin-bottom: 0;
    }

    .our-benefits__img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 15px;
      height: 76px;
      width: auto;
      @media (max-width: 768px) {
        height: 50px;
      }
    }

    .our-benefits__text {
      text-align: center;
      margin-top: 0;
      margin-bottom: 0;
      font-size: 18px;
      line-height: 24px;
      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 18px;
      }
    }

    @media (max-width: 768px) {
      padding: 30px 0;
    }
  }
</style>
