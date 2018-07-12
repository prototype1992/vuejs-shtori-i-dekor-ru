<template>
  <div class="footer">
    <div class="container">
      <p class="copyright">Copyright: 2018 - Студия дизайна "Шторы и Декор"</p>
      <a href="http://alisultanov.ru/" target="_blank" class="made-site">Разработка сайта - Alisultanov.ru</a>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  @import "../../assets/styles/var";

  .footer {
    background-color: $main-color;
    color: #ffffff;
    min-height: $footer-size;
    text-align: center;
    overflow: hidden;
    .copyright {
      margin: 0;
      float: left;
      line-height: $footer-size;
      letter-spacing: 1.5px;
      @media (max-width: 768px) {
        float: none;
        text-align: center;
        line-height: 51px;
      }
      @media (max-width: 575px) {
        line-height: 30px;
      }
    }
    .made-site {
      float: right;
      line-height: $footer-size;
      color: inherit;
      &:hover {
        text-decoration: none;
      }
      @media (max-width: 768px) {
        float: none;
        text-align: center;
        line-height: 51px;
      }
    }
    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 30px;
    }
  }
</style>
