<template>
  <div>
    <div :class="$style.text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</div>
    <div :class="$style.title">Qualified specialists</div>
    <div :class="$style.dflex">
      <div :class="$style.item">
        <img src="~/assets/team/team1.png" alt="" :class="$style.image">
        <div :class="$style.rightText">
          <div :class="$style.name">Marvin McKinney</div>
          <div :class="$style.job">Pilot assistant</div>
        </div>
      </div>
      <div :class="$style.item">
        <img src="~/assets/team/team2.png" alt="" :class="$style.image">
        <div :class="$style.rightText">
          <div :class="$style.name">Savannah Nguyen</div>
          <div :class="$style.job">Mechanic</div>
        </div>
      </div>
      <div :class="$style.item">
        <img src="~/assets/team/team3.png" alt="" :class="$style.image">
        <div :class="$style.rightText">
          <div :class="$style.name">Courtney Henry</div>
          <div :class="$style.job">Stewardess</div>
        </div>
      </div>
    </div>
    <div :class="$style.text">{{team}}</div>
  </div>
</template>

<script>
export default {
  props: ['team']
}
</script>

<style module lang="scss">
.dflex {
  display: flex;
  margin-top: 26px;
}

.text {
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: var(--grey);
  margin: 32px 0 49px 0;

  &:first-child {
    margin: 27px 0 0 0;
  }
}

.item {
  display: flex;
  margin-right: 25px;
}

.title {
  font-size: 24px;
  font-weight: 700;
  color: var(--title);
  margin-top: 32px;
}

.name {
  font-size: 16px;
  font-weight: 700;
  color: var(--title);
  margin-top: 16px;
}

.job {
  font-size: 14px;
  font-weight: 700;
  color: var(--grey);
  margin-top: 3px;
}

@media screen and (max-width: 375px){
  .dflex {
    flex-wrap: wrap;
  }

  .text {
    margin-top: 20px;

    &:first-child {
      margin-top: 15px;
    }
  }

  .title {
    font-size: 20px;
    margin-top: 20px;
  }

  .name {
    margin-top: 17px;
  }

  .job {
    font-size: 12px;
    margin-top: 4px;
  }

  .image {
    width: 132px;
    height: 80px;
    margin: 0 16px 12px 0;
  }
}
</style>
