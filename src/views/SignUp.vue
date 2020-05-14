<template>
  <div class="sign_block">
    <div class="sign_block-left">
      <p class="sign_block-title sign_block-wrapper">
        Регистрация
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
      <UI-Checkbox
        label="Я хочу готовить"
        @change="v => form.isCook = v"
      />
      <UI-Button
        class="sign_block-wrapper"
        label="Зарегистрироваться"
        @click="submitForm"
      />
      <UI-Button
        class="small-button"
        label="Войти"
        type="plain"
        @click="$goToPage('signin')"
      />
    </div>
    <div class="sign_block-right">
      <Icon class="sign_block-right-icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { Action } from 'vuex-class'

import Icon from '@/assets/2.svg'

import UIButton from '@/components/UI/Button.vue'
import UIInput from '@/components/UI/Input.vue'
import UICheckbox from '@/components/UI/Checkbox.vue'
import NavigationMixin from '@/components/mixins/navigation'

@Component({
  components: {
    Icon,
    UIButton,
    UIInput,
    UICheckbox
  }
})
export default class SignUp extends Mixins(NavigationMixin) {
  form = {
    username: '',
    password: '',
    isCook: false
  }

  @Action signUp

  submitForm () {
    this.signUp(this.form)
  }
}
</script>

<style lang="scss" scoped>

</style>
