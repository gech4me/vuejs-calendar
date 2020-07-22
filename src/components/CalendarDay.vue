<template>
    <div :class="classObject" @click="captureClick">
        {{ day.format('D') }}
        <ul class="event-list">
            <li v-for="event in events">{{ event.description }}</li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "CalendarDay",
    props: ['day'],
    computed: {
      classObject() {
        let today = this.day.isSame(this.$moment(),'day');
        return {
          day: true,
          today,
          past: this.day.isSameOrBefore(this.$moment(),'day') && !today
        }
      },
      events() {
        let mockData = [
          { description: 'random event 1', date: this.$moment('2020-07-23', 'YYYY-MM-DD') },
          { description: 'random event 2', date: this.$moment('2020-07-24', 'YYYY-MM-DD')},
          { description: 'random event 3', date: this.$moment('2020-07-25', 'YYYY-MM-DD')},
        ];
        return mockData.filter(event => event.date.isSame(this.day,'day'));
      }
    },
    methods: {
      captureClick(event) {
        this.$store.commit('eventFormPos', { x: event.clientX, y: event.clientY });
        this.$store.commit('eventFormActive',true);
      }
    }
  }
</script>

<style scoped>

</style>