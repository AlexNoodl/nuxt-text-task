<template>
  <section>
    <div :class="[$style.dflex, $style.container]">
      <img :src="vehicle.image" alt="" :class="$style.image">
      <div :class="$style.descr">
        <div :class="$style.title">{{vehicle.name}}</div>
        <ul :class="[$style.dflex, $style.menu]" >
          <li
            :class="$style.item"
            @click.prevent="setActive(list)"
            v-for="list of lists"
          >
            <div :class="{[$style.active]: isActive === list}">{{list}}</div>
          </li>
        </ul>

        <Spec v-if="show==='Specification'" :spec="vehicle.specifications_text"/>
        <Team v-if="show==='Team'" :team="vehicle.team_text"/>
        <Term v-if="show==='Term'" :term="vehicle.term_text"/>

        <div :class="$style.bg">
          <div :class="[$style.rent, $style.dflex]">
            <div :class="$style.rentText">Rent for<span>{{ vehicle.rent }} $/h</span></div>
            <button :class="$style.btn">Rent now</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Spec from "~/components/Specifications"
import Team from "~/components/Team"
import Term from "~/components/Term"

export default {
  components: {
    Spec, Team, Term
  },
  data: () => ({
    isActive: "Specification",
    lists: ["Specification", "Team", "Term"],
    show: "Specification",
  }),
  methods: {
    setActive (list) {
      this.show = list
      this.isActive = list
    }
  },
  async asyncData({$axios, params}) {
    let vehicles = await $axios.$get('/vehicles.json')
    const vehicle = vehicles.find(v => {
      if (v.id === params.id){
        return v
      }
    })
    return {vehicle}
  },
}
</script>

<style module lang="scss">
.dflex {
  display: flex;
  align-items: center;
}

.active {
  color: #4959ff;
}

.image {
  width: 712px;
  height: 700px;
  border-radius: 24px;
  margin-right: 64px;
}

.descr {
  height: 700px;
  margin-top: 56px;
}

.title {
  font-size: 40px;
  font-weight: 700;
  color: var(--title);
}

.menu {
  list-style: none;
  color: var(--grey);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 32px;
  padding: 0;
}

.item {
  margin-right: 32px;
}

.rent {
  width: 536px;
  height: 80px;
  border-radius: 16px;
  background-color: var(--color-container);
}

.rentText {
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  color: var(--title);
  margin-left: 32px;

  span {
    font-size: 20px;
    font-weight: 700;
    color: var(--rent);
    margin-left: 7px;
  }
}

.btn {
  width: 136px;
  height: 48px;
  border: none;
  border-radius: 12px;
  background-color: #4959ff;
  font-size: 16px;
  font-weight: 700;
  color: #fcfcfc;
  margin-left: 187px;
}

@media screen and (max-width: 375px) {
  .container {
    width: 357px;
    margin: 8px 0 0 16px;
  }

  .dflex {
    flex-wrap: wrap;
  }

  .image {
    width: 343px;
    height: 332px;
    border-radius: 16px;
    margin-right: 0;
  }

  .title {
    font-size: 24px;
  }

  .item {
    margin-right: 20px;
  }

  .bg {
    position: fixed;
    bottom: 0;
    width: 360px;
    height: 80px;
    background-color: #fff;
    z-index: 500;
  }

  .rent {
    width: 343px;
    height: 68px;
    margin-top: 12px;
    z-index: 1000;
  }

  .rentText {
    font-size: 16px;
    font-weight: 700;
    margin-left: 24px;

    span {
      font-size: 16px;
    }
  }

  .btn {
    width: 111px;
    height: 44px;
    font-size: 12px;
    margin-left: 65px;
  }
}
</style>
