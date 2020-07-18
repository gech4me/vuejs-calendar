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
        // Generating all days for current month.
        let days = [];
        let currentDay = this.$moment(`${this.year}-${this.month}-1`,'YYYY-M-D');
        do {
          days.push(currentDay);
          currentDay = this.$moment(currentDay).add(1,'days');
        } while ((currentDay.month() + 1) === this.month);

        // Add previous days to start
        currentDay = this.$moment(days[0]);
        const SUNDAY = 0;
        const MONDAY = 1;
        do {
          currentDay = this.$moment(currentDay).subtract(1, 'days');
          days.unshift(currentDay);
        } while (currentDay.day() !== MONDAY);

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