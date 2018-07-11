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
            <input type="text" name="order-name" class="index-contacts-form__input" placeholder="Ваше имя">
            <input type="tel" name="order-phone" class="index-contacts-form__input my-phone"
                   placeholder="+7 XXX XXX XX XX">
            <button type="submit" class="index-contacts-form__button">Отправить заявку</button>
          </form>
          <p class="index-contacts-form__text">* Предложение действует до конца месяца.</p>
        </div>
      </div>
      <div class="index-map-block" id="map-block">
        <!--<script charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=5HzboHVv9GCD8R0Quug_YPIg0DmGW8Q7&amp;width=100%25&amp;height=555&amp;lang=ru_RU&amp;sourceType=constructor&amp;scroll=true"></script>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>
