<template>
  <div>
    <div class="gallery-of-works">
      <h3 class="gallery-of-works__title">Галерея работ и идей</h3>
      <p class="gallery-of-works__descr">Смотрите фото наших реальных работ и макеты проектов.</p>

      <div class="container">
        <ul class="gallery-of-works__list">
          <li class="gallery-of-works__item">
            <div class="gallery-of-works__big gallery-of-works__hover">
              <img src="./images/1.jpg" class="gallery-of-works__img" alt="img">
              <a href="#" class="gallery-of-works__inner js-gallery-run" data-href="gallery1">
                <p>Детская</p>
              </a>
            </div>
            <div class="gallery-of-works__smalls">
              <div class="gallery-of-works__small gallery-of-works__hover">
                <img src="./images/2.jpg" class="gallery-of-works__img"
                     alt="img">
                <a href="#" class="gallery-of-works__inner js-gallery-run" data-href="gallery2">
                  <p>Гостиная</p>
                </a>
              </div>
              <div class="gallery-of-works__small gallery-of-works__hover">
                <img src="./images/3.jpg" class="gallery-of-works__img"
                     alt="img">
                <a href="#" class="gallery-of-works__inner js-gallery-run" data-href="gallery3">
                  <p>Спальня</p>
                </a>
              </div>
              <div class="gallery-of-works__small gallery-of-works__hover gallery-of-works__small_nomargin">
                <img src="./images/4.jpg" class="gallery-of-works__img"
                     alt="img">
                <a href="#" class="gallery-of-works__inner js-gallery-run" data-href="gallery4">
                  <p>Кухня-столовая</p>
                </a>
              </div>
              <div class="gallery-of-works__small gallery-of-works__hover gallery-of-works__small_nomargin">
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
              <div class="gallery-of-works__small gallery-of-works__hover gallery-of-works__small_nomargin">
                <img src="./images/8.jpg" class="gallery-of-works__img"
                     alt="img">
                <a href="#" class="gallery-of-works__inner js-gallery-run" data-href="gallery8">
                  <p>Офисы</p>
                </a>
              </div>
              <div class="gallery-of-works__small gallery-of-works__hover gallery-of-works__small_nomargin">
                <img src="./images/9.jpg" class="gallery-of-works__img"
                     alt="img">
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
          <a href="#view-catalog" class="gallery-of-works__link fancybox">Посмотреть каталог</a>

          <p>Вы можете увидеть полный каталог наших работ и идей, который мы собирали в те6чение 13
            лет.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>
