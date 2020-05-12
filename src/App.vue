<template>
  <div id="app">
    <header class="header_block">
      <span @click="$goToPage('Home')" class="header_block-logo">InnoFood</span>
      <div class="header_block-menu">
        <span class="header_block-menu-item">О нас</span>
        <span class="header_block-menu-item">Доставка</span>
        <span class="header_block-menu-item">FAQ</span>
      </div>
      <UI-Button
        @click="$goToPage('signin')"
        type="plain"
        label="Войти"
      />

    </header>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import NavigationMixin from '@/components/mixins/navigation'
import { lazyComponent } from '@/router'

@Component({
  components: {
    UIButton: lazyComponent('UI/Button')
  }
})
export default class App extends Mixins(NavigationMixin) {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');

html {
  box-sizing: border-box;
  color: $black;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

#app {
  font-family: 'IBM Plex Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

.header_block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 2rem 6rem;

  .header_block-logo {
    color: $purple;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 800;
    cursor: pointer;
  }
  .header_block-menu {
    display: flex;
    justify-content: space-around;
    width: 15rem;
    .header_block-menu-item {
      font-weight: 500;
      text-decoration: unset;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
}

.fullwidth {
  width: 100%;
}

.el-input .el-input__inner {
  min-height: 3rem;
  border-color: $black;
  border-radius: 20px;
  border-width: 2px;
  color: $black;
  &::placeholder {
    font-weight: 600;
  }
  &:hover,
  &:focus {
    border-color: $purple;
  }
}
</style>
