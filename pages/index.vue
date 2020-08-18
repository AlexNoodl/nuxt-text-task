<template>
  <section>
    <div :class="$style.container">
<!--Filter + Add-->
      <div :class="[$style.dflex, $style.action]" >
        <div :class="[$style.filter, $style.dflex]">
          <div :class="$style.title">Rent</div>
          <select :class="$style.select" v-model="filter">
            <option value="all">all types</option>
            <option v-for="type of types" :key="type" :value="type">{{ type }}</option>
          </select>
        </div>
        <div :class="[$style.dflex, $style.addNew]">
          <div :class="[$style.add, $style.colorBlue]">Add new</div>
          <button
            :class="$style.btn"
            type="button"
            @click="isAdd = !isAdd"
          >+</button>
        </div>
      </div>
<!--      Cards-->
      <div :class="[$style.cards]">
        <div :class="[$style.item]" v-for="v of filterVehicle">
          <img :src="v.preview" alt="preview" :class="$style.preview" @click.prevent="openVehicle(v)">
          <div :class="$style.text">
            <div :class="[$style.name, $style.color]">{{ v.name }}</div>
            <div :class="$style.description">{{ v.description }}</div>
            <div :class="$style.rent">{{ v.rent }} $/h</div>
          </div>
        </div>
      </div>

      <AddNew v-if="isAdd"/>
    </div>
  </section>
</template>


<script>
import AddNew from "~/components/AddNew"
export default {
  components: {
    AddNew
  },
  data: () => ({
    filter: 'all',
    isAdd: false,
  }),
  name: 'vehicle',
  async fetch({store}) {
    if (store.getters['vehicles/vehicles'].length === 0) {
      await store.dispatch('vehicles/fetch')
    }
  },
  computed: {
    vehicles() {
      return this.$store.getters['vehicles/vehicles']
    },

    types() {
      if (this.vehicles) {
        return Array.from(new Set
        (this.vehicles
          .map(v => v.type)))
      } else {
       throw new Error()
      }
    },

    filterVehicle() {
      switch (this.filter) {
        case 'rocket':
          return this.vehicles.filter(v => v.type === 'rocket')
          break
        case 'airship':
          return this.vehicles.filter(v => v.type === 'airship')
          break
        case 'helicopter':
          return this.vehicles.filter(v => v.type === 'helicopter')
          break
        case 'plane':
          return this.vehicles.filter(v => v.type === 'plane')
          break
        default:
          return this.vehicles
      }
    }
  },
  methods: {
    openVehicle(v) {
      this.$router.push('/' + v.id)
    },
  }
}
</script>

<style module lang="scss">
$color-blue: #4959ff;

.dflex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container {
  max-width: 1312px;
  margin: 0 auto;
  background-color: var(--color-container);
  border: transparent;
  border-radius: 48px;
}

.action {
  padding-top: 56px;
}

.filter {
  margin-left: 64px;
  align-items: baseline;
}

.title {
  font-size: 40px;
  font-weight: 700;
  color: var(--title);
}

.select {
  margin-left: 12px;
  background: url("../assets/vehicles/Arrow.png") no-repeat right ;
  -webkit-appearance: none;
  border: none;
  outline: none;
  font-size: 40px;
  font-weight: 700;
  color: $color-blue;
  padding-right: 38px;
}

.add {
  font-size: 20px;
  font-weight: 700;
  color: $color-blue;
  margin-right: 20px;
}

.btn {
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 16px;
  background-color: $color-blue;
  margin-right: 64px;
  font-size: 24px;
  color: #fcfcfc;
  cursor: pointer;

  &:hover {
    background-color: darken(#4959ff, 5%);
    font-size: 26px;
  }

  &:focus {
    outline: none;
  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
  width: 1184px;
  margin: 40px 0 0 64px;
}

.item {
  display: flex;
  width: calc((100% / 3) - (62px / 3));
  height: 164px;
  border-radius: 32px;
  background-color: var(--card);
  margin-right: 31px;
  margin-bottom: 32px;

  &:nth-child(3n) {
    margin-right: 0px;
  }
}

.preview {
  width: 88px;
  height: 88px;
  border-radius: 24px;
  margin: 24px 0 0 32px;
  cursor: pointer;
}

.text {
  max-width: 197px;
  margin: 40px 0 0 23px;
}

.name {
  font-size: 16px;
  font-weight: 700;
  color: var(--title)
}

.description {
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--grey);
  margin-top: 7px;
}

.rent {
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  color: var(--rent);
  margin-top: 16px;
}

@media screen and (max-width: 375px){
  .container {
    width: 373px;
    border-radius: 24px;
    margin: 8px 0 0 0;
  }

  .action {
    margin: 0;
    padding-top: 26px;
  }

  .filter {
    margin-left: 16px;
  }

  .title {
    font-size: 24px;
  }

  .select {
    font-size: 24px;
    padding-right: 7px;
  }

  .add {
    font-size: 16px;
    margin-right: 12px;
  }

  .btn {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    font-size: 16px;
    margin-right: 16px;
  }

  .cards {
    max-width: 343px;
    margin: 25px 0 0 16px;
  }

  .item {
    width: 343px;
    height: 151px;
    border-radius: 24px;
    margin: 0 0 12px 0;
  }

  .preview {
    border-radius: 16px;
    margin: 20px 0 0 20px;
  }

  .text {
    max-width: 125px;
  }

}
</style>
