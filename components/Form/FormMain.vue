<template>
  <form class="form">
    <div class="container">
      <h2 class="form__title">Entre em contato:</h2>
      <FormInput />
      <FormButton />
    </div>
  </form>
</template>

<script>
import FormButton from './FormButton.vue'
export default {
  name: 'FormComponent',
  data() {
    return {
      form: {
        full_name: '',
        email: '',
        phone_number: '',
        subject: '',
        message: '',
      },
      form_valid: {
        full_name: true,
        email: true,
        phone_number: true,
        subject: true,
        message: true,
      },
    }
  },
  methods: {
    validateName() {},
  },
  components: { FormButton },
}
</script>

<style lang="scss" scoped>
.form {
  margin: 15px 0 35px 0;
  &__title {
    font-size: 29px;
    font-weight: bold;
    margin-bottom: 35px;
  }
}
</style>
