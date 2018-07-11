<template>
  <div>
    <section class="first">
      <div class="container">
        <div class="first__wrap">
          <div class="first__left">
            <h2 class="first__title">Пошейте шторы подходящие на 100% к вашему интерьеру</h2>
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
            <h2 class="first__title">Оформите заявку через сайт и получите скидку 20%</h2>

            <form class="first__form js-order-form" id="zamer">
              <input type="text" class="first__input" name="order-name" placeholder="Ваше имя"
                     required>
              <input type="tel" class="first__input my-phone" name="order-phone"
                     placeholder="+7 XXX XXX XX XX" required>
              <p class="msg-text">Отправлено</p>
              <button type="submit" class="first__submit">Отправить заявку</button>
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
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
