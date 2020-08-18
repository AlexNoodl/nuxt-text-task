<template>
  <div>
    <div :class="[$style.text, $style.mt30]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</div>
    <div :class="[$style.text, $style.mt16]">{{term}}</div>
    <div :class="[$style.title, $style.mt24]">Additional conditions:</div>
    <ul :class="[$style.list, $style.mt24, $style.mb78]">
      <li :class="$style.text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.</li>
      <li :class="[$style.text, $style.mt16]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</li>
      <li :class="[$style.text, $style.mt16]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat
        duis enim velit
        mollit.</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['term']
}
</script>

<style module lang="scss">
.mt16 {
  margin-top: 16px;
}

.mt24 {
  margin-top: 24px;
}

.mt30 {
  margin-top: 30px;
}

.mb78 {
  margin-bottom: 78px;
}

.text {
  font-size: 14px;
  font-weight: 700;
  color: var(--grey);
  line-height: 20px;
}

.title {
  font-size: 16px;
  font-weight: 700;
  color: var(--title);
  margin-top: 24px;
}

@media screen and (max-width: 375px){
  .mt30 {
    margin-top: 15px;
  }

  .mt16 {
    margin-top: 8px;
  }

  .mt24 {
    margin-top: 16px;
  }

  .list {
  padding-left: 16px;
  }
}
</style>
