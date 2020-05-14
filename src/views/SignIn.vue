<template>
  <div class="sign_block">
    <div class="sign_block-left">
      <p class="sign_block-title sign_block-wrapper">
        Вход
      </p>
      <UI-Input
        class="sign_block-wrapper"
        placeholder="Логин"
        :variable="form.username"
        @input="v => form.username = v"
      />
      <UI-Input
        class="sign_block-wrapper"
        placeholder="Пароль"
        type="password"
        :variable="form.password"
        @input="v => form.password = v"
      />
      <UI-Button
        class="sign_block-wrapper"
        label="Войти"
        @click="submitForm"
      />
      <UI-Button
        class="small-button"
        label="Зарегистрироваться"
        type="plain"
        @click="$goToPage('signup')"
      />
    </div>
    <div class="sign_block-right">
      <Icon class="sign_block-right-icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import Icon from '@/assets/2.svg'

import UIButton from '@/components/UI/Button.vue'
import UIInput from '@/components/UI/Input.vue'
import NavigationMixin from '@/components/mixins/navigation'
import { Action } from 'vuex-class'

@Component({
  components: {
    Icon,
    UIButton,
    UIInput
  }
})
export default class SignIn extends Mixins(NavigationMixin) {
  form = {
    username: '',
    password: ''
  }

  @Action signIn

  submitForm () {
    this.signIn(this.form)
  }
}
</script>

<style lang="scss">
.sign_block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". .";
  padding: 2rem 6rem;

  .sign_block-left {
    width: 60%;
    margin: 3rem auto;

    .sign_block-title {
      font-size: 1.5rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .sign_block-wrapper {
      margin-bottom: 2rem;
    }

    .small-button {
      margin: 0 auto;
      width: 15rem;
    }
  }

  .sign_block-right {
    display: flex;
    align-items: center;
    justify-content: center;

    .sign_block-right-icon {
      width: 32rem;
    }
  }
}
</style>
