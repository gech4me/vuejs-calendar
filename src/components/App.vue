<template>
    <div>
        {{ msg }}
    </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        msg: "Hey, world"
      }
    },
    created() {
      console.log(this.$moment);
    }
  }
</script>

<style scoped>

</style>