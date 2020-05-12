<template>
  <div class="sign_block">
    <div class="sign_block-left">
      <p class="sign_block-title sign_block-wrapper">Регистрация</p>
      <UI-Input class="sign_block-wrapper" placeholder="Имя"/>
      <UI-Input class="sign_block-wrapper" placeholder="E-mail"/>
      <UI-Button class="sign_block-wrapper" label="Зарегистрироваться"/>
      <UI-Button @click="$goToPage('signin')" class="small-button" label="Войти" type="plain"/>
    </div>
    <div class="sign_block-right">
      <Icon class="sign_block-right-icon" />
    </div>
  </div>
</template>

<script>
import { Component, Mixins } from 'vue-property-decorator'

import Icon from '@/assets/2.svg'

import UIButton from '@/components/UI/Button'
import UIInput from '@/components/UI/Input'
import NavigationMixin from '@/components/mixins/navigation'

@Component({
  components: {
    Icon,
    UIButton,
    UIInput
  }
})
export default class SignUp extends Mixins(NavigationMixin) {}
</script>

<style lang="scss" scoped>

</style>
