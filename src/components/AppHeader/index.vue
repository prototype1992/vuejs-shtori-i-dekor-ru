<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">

        <div class="header__left">
          <a href="/" class="header-logo">
            <img
              src="./images/logo.png"
              alt="Студия дизайна Шторы и декор"
              title="Студия дизайна Шторы и Декор"
            >
          </a>
          <div class="header-slogan">
            Салог "Шторы и Декор" поможет вам выбраться из серого и обыденного
            интерьера и перенестись в одновременно домашнюю но стильную атмосферу.
          </div>
        </div>

        <div class="header-contacts">
          <div class="address">
            <p>МО. г Балашиха</p>
            <p>ул Советская, д 10а</p>
            <p>Shtori-i-dekor@mail.ru</p>
          </div>
          <div class="phones">
            <p>+7 916 581-17-15</p>
            <a class="phones__link" @click.prevent="showModal">
              Заказать звонок
            </a>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    showModal() {
      this.$modal.show('header-phone');
    },
  },
};
</script>

<style lang="scss">
  @import "../../assets/styles/vars";
  @import "../../assets/styles/mixins";

  .header {
    border-bottom: 2px solid rgba(0, 0, 0, .2);
    background-color: #ffffff;
    .header__inner {
      width: 100%;
      padding: 20px 0;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .header__left {
      width: 610px;
      display: block;
      @media (max-width: 1200px) {
        width: 500px;
      }
      @media (max-width: 992px) {
        width: 500px;
      }
      @media (max-width: 768px) {
        width: 160px;
      }
      @media (max-width: 375px) {
        width: 120px;
      }
    }
    .header-logo {
      width: 180px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 20px;
      img {
        display: block;
      }
      @media (max-width: 992px) {
        width: 160px;
      }
      @media (max-width: 768px) {
        margin-right: 0;
        width: 100%;
      }
    }

    .header-slogan {
      display: inline-block;
      vertical-align: middle;
      font-size: 15px;
      font-weight: 400;
      line-height: 23px;
      width: 400px;
      @media (max-width: 1200px) {
        width: 270px;
        font-size: 14px;
      }
      @media (max-width: 992px) {
        width: 270px;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }

    .header-contacts {
      width: 375px;
      margin-top: 7px;
      text-align: right;
      p {
        margin: 0;
      }
      @media (max-width: 992px) {
        width: 200px;
      }
      @media (max-width: 375px) {
        width: 150px;
      }
    }

    .address {
      display: inline-block;
      vertical-align: top;
      @media (max-width: 992px) {
        display: none;
      }
    }

    .phones {
      display: inline-block;
      vertical-align: top;
      p {
        font-size: 22px;
        margin-bottom: 6px;
        @media (max-width: 375px) {
          font-size: 16px;
        }
      }
      .phones__link {
        @include btn-yellow(3px);
        padding: 6px 15px;
        margin-left: 20px;
        @media (max-width: 680px) {
          margin-left: 0;
        }
        @media (max-width: 375px) {
          font-size: 15px;
          padding: 5px 10px;
          margin-top: 0;
        }
      }
    }
  }
</style>
