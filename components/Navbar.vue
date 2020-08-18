<template>
  <nav>
    <ul :class="[$style.dflex, $style.navbar]">
      <li :class="$style.logo" >
        <nuxt-link to="/">
          <img
            src="~/assets/navbar/logoD.png"
            alt=""
            v-if="$colorMode.preference === 'light'">
          <img
            src="~/assets/navbar/logoN.png"
            alt=""
            v-if="$colorMode.preference === 'dark'">
        </nuxt-link>

      </li>
      <li>
        <div :class="[$style.text, $style.colorGrey, $style.motto]">World's first affordable airsharing</div>
      </li>
      <li :class="$style.time">
        <div
          @click="$colorMode.preference = 'light'"
          v-if="$colorMode.preference === 'dark'"
          :class="[$style.dflex, $style.mode]"
        >
          <img
            src="~assets/navbar/day.png"
            alt="sun"
            :class="$style.dayTime"
          >
          <div :class="[$style.text, $style.colorGrey]">Day mod</div>
        </div>
        <div
          @click="$colorMode.preference = 'dark'"
          v-if="$colorMode.preference === 'light'"
          :class="[$style.dflex, $style.mode]"
        >
          <img
            src="~assets/navbar/night.png"
            alt="moon"
            :class="$style.dayTime"
          >
          <div :class="[$style.text, $style.colorGrey]">Night mod</div>
        </div>
      </li>
      <li :class="[$style.communication, $style.dflex]">
        <img src="~/assets/navbar/message.png" alt="message" :class="$style.message">
        <img src="~/assets/navbar/ring.png" alt="ring">
      </li>
      <li :class="[$style.user, $style.dflex]">
        <div :class="[$style.text, $style.colorBlack, $style.name]">Bessie Cooper</div>
        <img src="~/assets/navbar/photo.png" alt="photo" :class="$style.photo">
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style module lang="scss">
.dflex {
  display: flex;
  align-items: center;
}

.navbar {
  list-style: none;
  margin-top: 48px;
  padding: 0;
}

.text {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.logo {
  margin-right: 64px;
}

.motto {
  margin-right: 288px;
  color: var(--grey);
}

.mode {
  margin-right: 107px;
  color: var(--grey);
  cursor: pointer;
}

.dayTime {
  margin-right: 18px;
}

.communication {
  margin-right: 59px;
}

.message {
  margin-right: 29px;
}

.name {
  font-weight: 700;
  color: var(--title);
  margin-right: 16px;
}

.photo {
  width: 56px;
  height: 56px;
  border-radius: 100%;
}

@media screen and (max-width: 375px) {
  .navbar {
    width: 373px;
    margin: 12px 0 0 0;
  }
  .text {
    display: none;
  }

  .logo {
    margin: 0 83px 0 16px;
    width: 108px;
  }

  .time {
    width: 36px;
  }

  .communication {
    margin-right: 26px;
  }

  .message {
    margin-right: 19px;
  }

  .photo {
    width: 32px;
    height: 32px;
    margin-right: 14px;
  }
}
</style>
