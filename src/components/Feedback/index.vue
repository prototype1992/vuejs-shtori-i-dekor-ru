<template>
  <div>
    <section class="feedback">
      <h2 class="feedback-title">
        НУЖНА КОНСУЛЬТАЦИЯ? <br>
        <span>ОСТАВЬТЕ ЗАЯВКУ</span> - МЫ ПЕРЕЗВОНИМ ВАМ В ТЕЧЕНИЕ 1 ЧАСА!
      </h2>
      <form class="container feedback-form js-order-form">
        <input
          type="text"
          placeholder="Имя *"
          name="order-name"
          class="feedback-input"
          required
        >
        <input
          type="tel"
          placeholder="+7 XXX XXX XX XX"
          name="order-phone"
          class="feedback-input my-phone"
          required
        >
        <button class="feedback-btn">Отправить</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  @import "../../assets/styles/var";
  @import "../../assets/styles/mixins";

  .feedback {
    background-color: $main-color;
    padding: 80px 0;
    .feedback-title {
      @include block-title();
      color: #ffffff;
      margin-bottom: 40px;
      position: relative;
      z-index: 2;
      span {
        color: $accent-color;
      }
    }
    .feedback-form {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 90px;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        left: 50%;
        top: -100px;
        z-index: 1;
        transform: translateX(-50%);
        background-image: url('./images/feedback-border.png');
        background-repeat: no-repeat;
        width: 1140px;
        height: 170px;
        background-size: 1140px 170px;
        @media (max-width: 991px) {
          display: none;
        }
      }
      @media (max-width: 767px) {
        display: block;
        padding: 0 25px;
      }
    }
    .feedback-input {
      width: 280px;
      height: 36px;
      background-color: rgba(255, 255, 255, 1);
      border: 1px solid rgba(141, 146, 154, 1);
      color: #000000;
      padding: 5px 5px 5px 30px;
      margin: 5px;
      position: relative;
      z-index: 2;
      @media (max-width: 767px) {
        width: 100%;
      }
    }
    .feedback-btn {
      width: 280px;
      height: 36px;
      background-color: $accent-color;
      color: #FFFFFF;
      padding: 5px;
      margin: 5px;
      border: 0;
      cursor: pointer;
      position: relative;
      z-index: 2;
      &:hover {
        background-color: #fff;
        color: $accent-color;
      }
      @media (max-width: 767px) {
        width: 100%;
      }
    }
    @media (max-width: 991px) {
      padding: 30px 0;
    }
  }

</style>
