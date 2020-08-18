<template>
  <div>
    <div :class="$style.text">{{spec}}</div>
    <div :class="$style.title">Features:</div>
    <div :class="[$style.feature]">
      <div :class="$style.container">
        <img src="~/assets/spec/cup.png" alt="cup" :class="$style.image">
      </div>
      <div :class="$style.rightText">
        <div :class="$style.subtitle">A challenge for a true champion</div>
        <div :class="$style.text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</div>
      </div>
    </div>
    <div :class="[$style.feature]">
      <div :class="$style.container">
        <img src="~/assets/spec/pilot.png" alt="pilot" :class="$style.image">
      </div>
      <div :class="$style.rightText">
        <div :class="$style.subtitle">Pilot's sweaty hands</div>
        <div :class="$style.text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
          mollit.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['spec']
}
</script>

<style module lang="scss">
.text {
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: var(--grey);
  margin-top: 8px;

  &:first-child {
    margin-top: 30px;
    max-width: 532px;
  }
}

.title {
  font-size: 24px;
  font-weight: 700;
  color: var(--title);
  margin-top: 32px;
}

.feature {
  display: flex;
  margin-top: 30px;

  &:last-child {
    margin: 16px 0 57px 0;
  }
}

.rightText {
  margin: 12px 0 0 24px;
  max-width: 431px;
}

.subtitle {
  font-size: 16px;
  font-weight: 700;
  color: var(--title);
}

.container {
  width: 80px;
  height: 96px;
  border-radius: 16px;
  background-color: var(--color-container);
}
.image {
  display: block;
  margin: 36px auto 0 auto;
}

@media screen and (max-width: 375px){
  .text {
    &:first-child {
      margin-top: 15px;
      max-width: 343px;
    }
  }

  .title {
    font-size: 20px;
    margin-top: 20px;
  }

  .feature {
    margin-top: 24px;
  }

  .rightText {
    max-width: 263px;
  }

  .container {
    width: 64px;
    height: 80px;
  }

  .image {
    max-width: 22px;
    max-height: 20px;
    margin-top: 31px;
  }
}
</style>
