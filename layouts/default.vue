<template :class="$style.background">
  <div :class="$style.container">
    <Navbar
    />
    <Nuxt/>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
export default {
  components: {
    Navbar
  }
}
</script>

<style module>
* {
  font-family: 'Codec Pro', sans-serif;
}

body {
  background-color: var(--bg);
  margin: 0;
}

.container {
  max-width: 1312px;
  margin: 0 auto;
}

@font-face {
  font-family: 'Codec Pro';
  src: url('../assets/fonts/CodecPro-Regular.woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Codec Pro';
  src: url('../assets/fonts/CodecPro-Bold.woff2');
  font-weight: 700;
  font-style: normal;
}

</style>
