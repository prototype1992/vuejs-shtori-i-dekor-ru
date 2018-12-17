<template>
  <div>
    <div class="about-our-warranties">
      <h3 class="about-our-warranties__title">
        Узнайте о наших гарантиях
      </h3>
      <p class="about-our-warranties__description">
        Мы гарантируем, что наши шторы превзойдут Ваши ожидания!
        Более 2 500 клиентов не могут ошибаться
      </p>
      <div class="container">
        <ul class="about-our-warranties__list">
          <li class="about-our-warranties__item">
            <img
              src="./images/1.gif"
              alt="img"
              class="about-our-warranties__img"
            >
            <p class="about-our-warranties__text">
              Гарантии на шторы <br>2 года
            </p>
          </li>
          <li class="about-our-warranties__item">
            <img
              src="./images/2.gif"
              alt="img"
              class="about-our-warranties__img"
            >
            <p class="about-our-warranties__text">
              Гарантия работы официально и по договору
              <strong>
                Договор, в первую очередь, нужен Вам, а не нам,
                так как защищает Ваши интересы как потребителя.
              </strong>
            </p>
          </li>
          <li class="about-our-warranties__item">
            <img
              src="./images/3.gif"
              alt="img"
              class="about-our-warranties__img"
            >
            <p class="about-our-warranties__text">
              Гарантия выполнения заказа точно в срок.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutOurWarranties',
};
</script>

<style lang="scss">
  @import "../../assets/styles/mixins";

  .about-our-warranties {
    padding: 50px 0;
    text-align: center;
    .about-our-warranties__title {
      @include block-title();
    }
    .about-our-warranties__description {
      font-size: 20px;
      margin-bottom: 30px;
      padding: 0 20px;
    }
    .about-our-warranties__list {
      @include list-clear();

      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .about-our-warranties__item {
      width: 33%;
      padding: 0 50px;
      margin-bottom: 15px;
      @media (max-width: 1200px) {
        padding: 0;
      }
      @media (max-width: 575px) {
        width: 100%;
      }
    }
    .about-our-warranties__img {
      filter: grayscale(100%);

      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 15px;
    }
    .about-our-warranties__text {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 16px;
      strong {
        display: block;
      }
      @media (max-width: 575px) {
        br {
          display: none;
        }
      }
    }
    @media (max-width: 991px) {
      padding: 30px 0;
    }
  }
</style>
