<template>
  <div>
    <div class="gallery-of-works">
      <h3 class="gallery-of-works__title">Галерея работ и идей</h3>
      <p class="gallery-of-works__description">
        Смотрите фото наших реальных работ и макеты проектов.
      </p>

      <div class="container">
        <ul class="gallery-of-works__list">
          <li class="gallery-of-works__item">
            <div class="gallery-of-works__big gallery-of-works__hover">
              <img
                src="./images/1.jpg"
                class="gallery-of-works__img"
                alt="img"
              >
              <a href="#" class="gallery-of-works__inner js-gallery-run" data-href="gallery1">
                <p>Детская</p>
              </a>
            </div>
            <div class="gallery-of-works__smalls">
              <div class="gallery-of-works__small gallery-of-works__hover">
                <img
                  src="./images/2.jpg"
                  class="gallery-of-works__img"
                  alt="img"
                >
                <a href="#" class="gallery-of-works__inner js-gallery-run" data-href="gallery2">
                  <p>Гостиная</p>
                </a>
              </div>
              <div class="gallery-of-works__small gallery-of-works__hover">
                <img
                  src="./images/3.jpg"
                  class="gallery-of-works__img"
                  alt="img"
                >
                <a href="#" class="gallery-of-works__inner js-gallery-run" data-href="gallery3">
                  <p>Спальня</p>
                </a>
              </div>
              <div class="gallery-of-works__small
              gallery-of-works__hover gallery-of-works__small_nomargin">
                <img src="./images/4.jpg" class="gallery-of-works__img"
                     alt="img">
                <a href="#" class="gallery-of-works__inner js-gallery-run" data-href="gallery4">
                  <p>Кухня-столовая</p>
                </a>
              </div>
              <div class="gallery-of-works__small
              gallery-of-works__hover gallery-of-works__small_nomargin">
                <img src="./images/5.jpg" class="gallery-of-works__img"
                     alt="img">
                <a href="#" class="gallery-of-works__inner js-gallery-run" data-href="gallery5">
                  <p>Кабинет- библиотека</p>
                </a>
              </div>
            </div>
          </li>

          <li class="gallery-of-works__item">
            <div class="gallery-of-works__smalls">
              <div class="gallery-of-works__small gallery-of-works__hover">
                <img src="./images/6.jpg" class="gallery-of-works__img"
                     alt="img">
                <a href="#" class="gallery-of-works__inner js-gallery-run" data-href="gallery6">
                  <p>Бассейны и санузлы</p>
                </a>
              </div>
              <div class="gallery-of-works__small gallery-of-works__hover">
                <img src="./images/7.jpg" class="gallery-of-works__img"
                     alt="img">
                <a href="#" class="gallery-of-works__inner js-gallery-run" data-href="gallery7">
                  <p>Чехлы на мебель</p>
                </a>
              </div>
              <div
                class="gallery-of-works__small
                gallery-of-works__hover gallery-of-works__small_nomargin"
              >
                <img
                  src="./images/8.jpg"
                  class="gallery-of-works__img"
                  alt="img"
                >
                <a href="#" class="gallery-of-works__inner js-gallery-run" data-href="gallery8">
                  <p>Офисы</p>
                </a>
              </div>
              <div class="gallery-of-works__small
              gallery-of-works__hover gallery-of-works__small_nomargin">
                <img
                  src="./images/9.jpg"
                  class="gallery-of-works__img"
                  alt="img"
                >
                <a href="#" class="gallery-of-works__inner js-gallery-run" data-href="gallery9">
                  <p>Шторы с фотопечатью</p>
                </a>
              </div>
            </div>

            <div class="gallery-of-works__big gallery-of-works__hover">
              <img src="./images/10.jpg" class="gallery-of-works__img" alt="img">
              <a href="#" class="gallery-of-works__inner js-gallery-run" data-href="gallery10">
                <p>Коттедж нашего клиента</p>
              </a>
            </div>
          </li>
        </ul>

        <div class="gallery-of-works__link-group">
          <a @click.prevent="showModal" href="#" class="gallery-of-works__link">
            Посмотреть каталог
          </a>

          <p>Вы можете увидеть полный каталог наших работ и идей, который мы собирали в те6чение 13
            лет.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryOfWorks',
  methods: {
    showModal() {
      this.$modal.show('view-catalog');
    },
  },
};
</script>

<style lang="scss">
  @import "../../assets/styles/vars";
  @import "../../assets/styles/mixins";

  .gallery-of-works {
    padding: 80px 0;
    .gallery-of-works__title {
      @include block-title();
    }

    .gallery-of-works__description {
      text-align: center;
    }

    .gallery-of-works__list {
      list-style-type: none;
      margin-top: 0;
      margin-bottom: 20px;
      padding-left: 0;
    }

    .gallery-of-works__item {
      margin-bottom: 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 575px) {
        flex-wrap: wrap;
      }
    }

    .gallery-of-works__big {
      width: 49%;
      @media (max-width: 575px) {
        width: 100%;
        margin-bottom: 20px;
        margin-top: 20px;
      }
    }

    .gallery-of-works__hover {
      position: relative;
      overflow: hidden;

      &:hover > .gallery-of-works__inner {
        opacity: 1;
      }

      &:hover > .gallery-of-works__img {
        transform: scale(1.2);
      }
    }

    .gallery-of-works__smalls {
      width: 49%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
      @media (max-width: 575px) {
        width: 100%;
      }
    }

    .gallery-of-works__small {
      width: 48%;
      margin-bottom: 22px;
      @media (max-width: 991px) {
        margin-bottom: 14px;
      }
    }

    .gallery-of-works__small_nomargin {
      margin-bottom: 0;
      @media (max-width: 991px) {
        margin-bottom: 0;
      }
    }

    .gallery-of-works__img {
      display: block;
      width: 100%;
      height: auto;
      margin-left: auto;
      margin-right: auto;

      transition: transform .5s linear;
    }

    .gallery-of-works__inner {
      opacity: 0;
      transition: opacity 0.5s linear;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        margin-top: 0;
        margin-bottom: 0;
        color: #ffffff;
        font-size: 18px;
        padding: 40px 20px 0;
        text-align: center;
        text-shadow: 0 0 2px #000;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          background-image: url('./images/loupe.png');
          background-repeat: no-repeat;
          width: 32px;
          height: 32px;
        }
        @media (max-width: 575px) {
          font-size: 16px;
        }
      }
    }

    .gallery-of-works__link-group {
      text-align: center;
    }

    .gallery-of-works__link {
      display: inline-block;
      vertical-align: middle;
      border: 1px solid $accent-color;
      outline: none;
      padding: 15px 50px;
      font-size: 20px;
      background-color: $accent-color;
      border-radius: 0.3em;
      box-shadow: rgba(0, 0, 0, 0.4) 0 0.3em 0.3em 0;
      color: rgb(255, 255, 255);
      text-decoration: none;
      &:hover {
        background-color: #fff;
        color: $accent-color;
      }
    }
    @media (max-width: 991px) {
      padding: 30px 0;
    }
  }
</style>
