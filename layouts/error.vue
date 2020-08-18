<template>
  <div :class="$style.container">
    <div :class="$style.error">
      <h1 :class="$style.title">An error has occurred</h1>
      <div :class="$style.text">Please refresh the page</div>
      <button :class="$style.btn" @click.prevent="reload">Reload page</button>
    </div>
  </div>
</template>

<script>
export default {
 name: 'error',
 methods: {
   reload() {
     window.location.reload()
   }
 }
}
</script>

<style module lang="scss">
.container {
  max-width: 1312px;
  height: 80vh;
  margin: 0 auto;
  background-color: var(--color-container);
  border: 1px solid transparent;
  border-radius: 48px;
}

.title {
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-top: 264px;
  color: var(--title);
}

.text {
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin-top: 24px;
  color: var(--color-grey);
}

.btn {
  display: block;
  margin: 0 auto;
  width: 161px;
  height: 48px;
  border: none;
  border-radius: 12px;
  background-color: #4959ff;
  color: #fcfcfc;
  font-size: 16px;
  font-weight: 700;
  margin-top: 40px;
  &:hover {
    background-color: darken(#4959ff, 5%);
  }

  &:focus {
    outline: none;
  }
}

@media screen and (max-width: 375px){
  .container {
    width: 373px;
    height: 684px;
    border-radius: 24px;
  }

  .title {
    margin-top: 271px;
    font-size: 24px;
  }

  .text {
    margin-top: 16px;
  }

  .btn {
    width: 133px;
    height: 44px;
    margin-top: 32px;
    font-size: 14px;
  }


}
</style>


