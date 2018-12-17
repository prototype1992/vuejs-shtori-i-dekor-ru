<template>
  <section class="first">
    <div class="container">
      <div class="first__wrap">
        <div class="first__left">
          <h2 class="first__title">
            Пошейте шторы подходящие на 100% к вашему интерьеру
          </h2>
          <p class="first__descr">
            Без нервотрепки, точно в срок с гарантией 2 года
          </p>
          <ul class="first__list">
            <li class="first__item">Собственный швейный цех в Москве</li>
            <li class="first__item">Выезд замерщика и дизайнера бесплатно</li>
            <li class="first__item">Договор с четкими сроками, прозрачными ценами</li>
          </ul>
        </div>
        <div class="first__right">
          <h2 class="first__title">
            Оформите заявку через сайт и получите скидку 20%
          </h2>

          <form class="first__form js-order-form" id="zamer">
            <input
              type="text"
              class="first__input"
              name="order-name"
              placeholder="Ваше имя"
              required
            >
            <base-phone-input
              classes="first__input"
            />
            <p class="msg-text">Отправлено</p>
            <button type="submit" class="first__submit">
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="first__bottom">
      <div class="container">
        <p>
          Компания “Шторы и Декор” работает с 2006 года. В настоящее время это одна из лучших
          фирм, предлагающих шторы в Москве и МО
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import BasePhoneInput from "@/components/BaseComponents/BasePhoneInput";

export default {
  name: 'AppFirst',
  components: {
    BasePhoneInput,
  },
};
</script>

<style lang="scss">
  @import "../../assets/styles/vars";

  .first {
    background-image: url(./images/main-bg.jpg);
    background-position: center;
    background-size: cover;
    color: #fff;
    position: relative;

    .first__wrap {
      display: flex;
      align-items: stretch;
      justify-content: space-between;

      padding: 60px 0;

      @media (max-width: 992px) {
        flex-direction: column;
        padding: 0 0 25px;
      }
    }

    .first__left {
      width: 450px;
      background-color: $main-color;
      padding: 30px 20px;
      position: relative;
      @media (max-width: 992px) {
        width: 100%;
        margin-bottom: 25px;
      }
    }

    .first__right {
      width: 450px;
      background-color: $main-color;
      padding: 30px 20px;
      position: relative;
      @media (max-width: 992px) {
        width: 100%;
      }
    }

    .first__form {
      width: 350px;
      margin-left: auto;
      margin-right: auto;
      @media (max-width: 575px) {
        width: 100%;
      }
    }

    .first__input {
      background-color: transparent;
      text-align: inherit;
      padding: 13px 26px;
      display: block;
      margin: 0 auto 25px;
      font-size: 22px;
      color: #fff;
      border: 2px solid #fff;
      border-radius: 3px;
      width: 100%;
      &::-webkit-input-placeholder {
        color: #fff;
      }
      &::-moz-placeholder {
        color: #fff;
      }
      &:-moz-placeholder {
        color: #fff;
      }
      &:-ms-input-placeholder {
        color: #fff;
      }
      @media (max-width: 768px) {
        width: 80%;
      }
      @media (max-width: 575px) {
        width: 100%;
        font-size: 16px;
      }
    }

    .first__submit {
      padding: 13px 26px;
      display: block;
      margin: 0 auto;
      border: 2px solid #fff;
      border-radius: 3px;
      font-size: 22px;
      background-color: $accent-color;
      color: #fff;
      width: 100%;
      @media (max-width: 768px) {
        width: 80%;
      }
      @media (max-width: 575px) {
        width: 100%;
        font-size: 16px;
      }

      &:hover {
        background-color: #fff;
        color: $accent-color;
      }
    }

    .first__title {
      margin: 0 0 20px;
      font-size: 28px;
      line-height: 35px;
      text-transform: none;
      text-align: center;
      @media (max-width: 992px) {
        font-size: 24px;
        line-height: 30px;
        text-align: center;
      }
      @media (max-width: 768px) {
        font-size: 20px;
      }
      @media (max-width: 575px) {
        font-size: 18px;
        line-height: 22px;
      }
    }
    .first__descr {
      margin-top: 0;
      margin-bottom: 15px;
      padding: 0 20px;
      font-size: 18px;
      line-height: 22px;
      @media (max-width: 575px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
    .first__list {
      list-style-type: none;
      padding-left: 20px;
      margin-top: 0;
      margin-bottom: 0;
    }
    .first__item {
      position: relative;
      margin-bottom: 15px;
      padding-left: 35px;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        background-image: url('./images/first-check.svg');
        background-repeat: no-repeat;
      }
      &:last-child {
        margin-bottom: 0;
      }
      @media (max-width: 575px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
    .first__bottom {
      width: 100%;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 15px;
      p {
        margin: 0;
        font-size: 26px;
        line-height: 34px;
        @media (max-width: 768px) {
          font-size: 18px;
        }
        @media (max-width: 575px) {
          line-height: 24px;
        }
      }
      @media (max-width: 992px) {
        position: static;
      }
    }
    @media (max-width: 992px) {
      padding-top: 25px;
    }
    @media (max-width: 768px) {
      padding-top: 25px;
      min-height: 10px;
    }
  }
</style>
