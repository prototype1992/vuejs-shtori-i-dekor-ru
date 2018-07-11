<template>
  <div>
    <section class="feedback">
      <h2 class="feedback-title">
        НУЖНА КОНСУЛЬТАЦИЯ? <br>
        <span>ОСТАВЬТЕ ЗАЯВКУ</span> - МЫ ПЕРЕЗВОНИМ ВАМ В ТЕЧЕНИЕ 1 ЧАСА!
      </h2>
      <form class="container feedback-form js-order-form">
        <input type="text" placeholder="Имя *" name="order-name" class="feedback-input" required>
        <input type="tel" placeholder="+7 XXX XXX XX XX" name="order-phone"
               class="feedback-input my-phone" required>
        <button class="feedback-btn">Отправить</button>
      </form>
    </section>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>
