<template>
  <div :class="$style.position">
    <div :class="$style.container">
      <div :class="$style.dflex">
        <div :class="$style.title">Add new vehicle</div>
        <button :class="$style.close">&times;</button>
      </div>
      <form v-model="form">
        <input :class="$style.image" type="image">
        <input :class="$style.input" type="text" placeholder="Name">
        <input :class="$style.input" type="text" placeholder="Description">
        <input :class="$style.input" type="text" placeholder="Rent price $/h">
        <button
          type="submit"
          :class="$style.submit"
          @click.prevent="onSubmit()"
        >Complete</button>
      </form>
    </div>
    </div>
</template>

<script>
export default {
  methods: {
    onSubmit(){
      console.log("data")
    }
  }
}
</script>

<style module lang="scss">
.position {
  position: absolute;
  top: 0;
  right: 0;
  width: 600px;
  height: 900px;
  z-index: 1000;
  border: transparent;
  border-radius: 48px 0 0 48px;
  background-color: var(--bg);
}

.dflex {
  display: flex;
  align-items: center;
  margin-top: 64px;
}

.container {
  margin-left: 72px;
}

.title {
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  color: var(--title);
  margin-right: 99px;
}

.close {
  width: 48px;
  height: 48px;
  border: transparent;
  border-radius: 16px;
  font-size: 24px;
  font-weight: 400;
  color: var(--title);
  cursor: pointer;
  &:focus {
    outline: none;
  }
}

.image {
  width: 456px;
  height: 348px;
  border: transparent;
  border-radius: 24px;
  background-color: var(--color-container);
  margin-top: 40px;
  &:focus {
    outline: none;
  }
}

.input {
  width: 456px!important;
  height: 56px;
  border: transparent;
  border-radius: 12px;
  background-color: var(--color-container);
  font-size: 16px;
  font-weight: 700;
  color: var(--grey);
  margin-top: 24px;
  padding-left: 24px;
  &:focus {
    outline: none;
  }
}

.submit {
  width: 456px;
  height: 56px;
  border-radius: 12px;
  border: transparent;
  background-color: #4959ff;
  font-size: 16px;
  font-weight: 700;
  color: var(--bg);
  margin-top: 40px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
}
</style>
