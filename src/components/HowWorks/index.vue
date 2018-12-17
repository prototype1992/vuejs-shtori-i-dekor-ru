<template>
  <div class="how-works">
    <div class="container">
      <h3 class="how-works__title">Как мы работаем</h3>
      <ul class="how-works__list">
        <li class="how-works__item">
          <img class="how-works__img" src="./images/1.png" alt="image">
          <p class="how-works__text">Вы оставляете заявку</p>
        </li>
        <li class="how-works__item">
          <img class="how-works__img" src="./images/2.png" alt="image">
          <p class="how-works__text">Наш менеджер связывается с Вами</p>
        </li>
        <li class="how-works__item">
          <img class="how-works__img" src="./images/3.png" alt="image">
          <p class="how-works__text">Дизайнер приезжает к вам домой </p>
        </li>
        <li class="how-works__item">
          <img class="how-works__img" src="./images/4.png" alt="image">
          <p class="how-works__text">
            Утверждаем дизайн проект, подписываем договор и приступаем к работе
          </p>
        </li>
        <li class="how-works__item">
          <img class="how-works__img" src="./images/5.png" alt="image">
          <p class="how-works__text">Устанавливаем карнизы</p>
        </li>
        <li class="how-works__item">
          <img class="how-works__img" src="./images/6.png" alt="image">
          <p class="how-works__text">Вешаем сшитые для Вас шторы</p>
        </li>
        <li class="how-works__item">
          <img class="how-works__img" src="./images/7.png" alt="image">
          <p class="how-works__text">
            Вы довольны и радуетесь красоте и уюту в Вашем доме
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowWorks',
};
</script>

<style lang="scss">
  @import "../../assets/styles/mixins";

  .how-works {
    padding: 50px 0;
    .how-works__title {
      @include block-title();
      margin-bottom: 40px;
    }
    .how-works__list {
      @include list-clear();
      text-align: center;
      font-size: 0;
    }
    .how-works__item {
      padding: 0 15px;
      width: 14%;
      font-size: 15px;
      display: inline-block;
      vertical-align: top;
      @media (max-width: 992px) {
        padding: 0 10px;
      }
      @media (max-width: 768px) {
        width: 33.33%;
        margin-bottom: 15px;
      }
      @media (max-width: 575px) {
        width: 100%;
      }
    }
    .how-works__img {
      filter: grayscale(100%);
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 5px;
    }
    .how-works__text {
      line-height: 18px;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
</style>
