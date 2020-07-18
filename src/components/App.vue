<template>
    <div>
        <div v-for="day in days">{{ day }}</div>
    </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        month: 7,
        year: 2020,
      }
    },
    computed: {
      days() {
        let days = [];
        let currentDay = this.$moment(`${this.year}-${this.month}-1`,'YYYY-M-D');
        do {
          days.push(currentDay);
          currentDay = this.$moment(currentDay).add(1,'days');
        } while ((currentDay.month() + 1) === this.month);
        return days;
      }
    },
    created() {
      console.log(this.$moment);
    }
  }
</script>

<style scoped>

</style>