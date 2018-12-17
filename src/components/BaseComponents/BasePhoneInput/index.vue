<template>
  <input
    type="tel"
    :class="classes"
    name="order-phone"
    placeholder="+7 XXX XXX XX XX"
    v-mask="'+7 999 9999999'"
    required
  >
</template>

<script>

export default {
  name: 'BasePhoneInput',
  props: {
    classes: {
      type: [String, Array],
      default: 'phone-input',
    },
  },
  components: {
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>
  .phone-input {
  }
</style>
