<template>
  <div class="designer-house">
    <div class="container">
      <div class="designer-house__inner">
        <div class="designer-house__left">
          <img
            src="./images/designer-house.png"
            alt="designer"
            class="designer-house__img"
          >
        </div>
        <div class="designer-house__right">
          <h3 class="designer-house__title">
            ВЫЗВАТЬ ДИЗАЙНЕРА НА ДОМ
          </h3>
          <p class="designer-house__text">
            Профессиональный дизайнер по текстилю приедет к Вам домой, чтобы произвести замеры.
            Специалист покажет образцы тканей и порекомендует то, что подходит к цветовой гамме
            Вашего интерьера. При Вас дизайнер сделает несколько зарисовок Ваших будущих штор и
            составит предварительную смету проекта.
          </p>
          <a class="designer-house__btn" @click.prevent="showModal">
            Вызвать
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showModal() {
      this.$modal.show('designer-phone');
    },
  },
};
</script>

<style lang="scss">
  @import "../../assets/styles/var";

  .designer-house {
    padding: 40px 0;
    background-color: $main-color;
    color: #ffffff;
    .designer-house__inner {
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 767px) {
        display: block;
      }
    }

    .designer-house__left {
      width: 450px;
      margin-right: 30px;
      @media (max-width: 767px) {
        width: 100%;
        margin-right: 0;
      }
    }

    .designer-house__img {
      display: block;
      width: 100%;
      height: auto;
      @media (max-width: 767px) {
        width: 70%;
        margin-left: auto;
        margin-right: auto;
      }
    }

    .designer-house__right {
      width: 450px;
      @media (max-width: 767px) {
        width: 100%;
        text-align: center;
      }
    }

    .designer-house__title {
      margin-top: 0;
      margin-bottom: 15px;
      text-transform: uppercase;
      font-size: 24px;
      line-height: 32px;
      @media (max-width: 991px) {
        font-size: 20px;
        line-height: 24px;
      }
      @media (max-width: 575px) {
        font-size: 16px;
        line-height: 20px;
      }
    }

    .designer-house__text {
      margin-top: 0;
      margin-bottom: 15px;
      font-size: 18px;
      line-height: 24px;
      @media (max-width: 991px) {
        font-size: 14px;
        line-height: 18px;
      }
    }

    .designer-house__btn {
      display: block;
      text-align: center;
      text-decoration: none;
      border: none;
      width: 250px;
      height: 40px;
      line-height: 38px;
      font-size: 16px;
      overflow: hidden;
      outline: none;
      background-color: $accent-color;
      color: #fff;
      &:hover {
        background-color: #fff;
        color: $accent-color;
      }
      @media (max-width: 767px) {
        margin-left: auto;
        margin-right: auto;
      }
    }
    @media (max-width: 767px) {
      padding: 10px 0 40px;
    }
  }
</style>
