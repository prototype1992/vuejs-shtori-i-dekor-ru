<template>
  <div>
    <div class="index-contacts">
      <h3 class="index-contacts__title">КОНТАКТЫ</h3>

      <div class="index-contacts-form__inner">
        <div class="index-contacts-form">
          <h4 class="index-contacts-form__title">
            Оформите заявку через сайт <br>и получите скидку 20%
          </h4>
          <form method="post" class="js-order-form">
            <input
              type="text"
              name="order-name"
              class="index-contacts-form__input"
              placeholder="Ваше имя"
            >
            <base-phone-input
              classes="index-contacts-form__input"
            />
            <button type="submit" class="index-contacts-form__button">
              Отправить заявку
            </button>
          </form>
          <p class="index-contacts-form__text">
            * Предложение действует до конца месяца.
          </p>
        </div>
      </div>
      <div class="index-map-block" id="map-block">
        <yandex-map
          :coords="[55.799765, 37.936636]"
          zoom="10"
          style="width: 100%; height: 500px;"
          :controls="['trafficControl']"
        >
          <ymap-marker
            marker-id="1"
            marker-type="placemark"
            :coords="[55.799765, 37.936636]"
            hint-content="Россия, Московская область, Балашиха, Советская улица, 10А"
            :balloonContent="'Шторы и Декор'"
            :balloon="balloonText"
            :icon="{color: 'blue'}"
          />
        </yandex-map>
      </div>
    </div>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps';

import BasePhoneInput from "@/components/BaseComponents/BasePhoneInput";

export default {
  name: '',
  components: {
    yandexMap,
    ymapMarker,
    BasePhoneInput,
  },
  computed: {
    balloonText() {
      return {
        header: '<h3>Студия дизайна Шторы и Декор</h3>',
        body: '<p>Московская область, Балашиха, Советская улица, 10А</p>',
        footer: '<p>+7 916 581-17-15</p>',
      };
    },
  },
};
</script>

<style lang="scss">
  @import "../../assets/styles/vars";
  @import "../../assets/styles/mixins";

  .index-contacts {
    background-color: #ffffff;
    .index-contacts__title {
      @include block-title();
      padding: 30px 0;
      margin-bottom: 0;
      background-color: $main-color;
      color: #ffffff;
      @media (max-width: 991px) {
        padding: 20px;
        order: 2;
        width: 100%;
      }
    }

    .index-contacts-form__inner {
      position: relative;
      max-width: 1100px;
      margin-left: auto;
      margin-right: auto;
      @media (max-width: 991px) {
        order: 1;
      }
    }

    @media (max-width: 991px) {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
    }
  }

  .index-contacts-form {
    position: absolute;
    right: 60px;
    z-index: 10;
    top: 90px;
    width: 400px;
    color: #fff;
    text-align: center;
    padding: 30px;

    background-color: $main-color;

    .index-contacts-form__title {
      margin-top: 0;
      margin-bottom: 20px;
      font-size: 20px;
      line-height: 26px;
    }

    .index-contacts-form__input {
      width: 100%;
      height: 35px;
      padding-left: 15px;
      padding-right: 15px;
      border: 1px solid #eee;
      margin-bottom: 20px;
    }

    .index-contacts-form__button {
      display: block;
      font-size: 20px;
      color: #fff;
      width: 100%;
      height: 45px;
      border: 2px solid #fff;
      background-color: $accent-color;
      margin-bottom: 20px;
      &:hover {
        background-color: #fff;
        color: $accent-color;
      }
    }

    .index-contacts-form__text {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 14px;
      text-align: center;
    }
    @media (max-width: 991px) {
      position: static;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
    }
  }

  .index-map-block {
    width: 100%;
    height: 500px;
    position: relative;
    z-index: 1;
    @media (max-width: 991px) {
      order: 3;
      height: 300px;
    }
  }
</style>
