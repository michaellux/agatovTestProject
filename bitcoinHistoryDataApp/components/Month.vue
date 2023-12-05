<template>
  <div class="wrapper">
    <div class="w-1/6 inline-block mr-2">
        <vue-date-picker dark v-model="month" month-picker></vue-date-picker>
    </div>
  </div>
</template>

<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref } from "vue";
import { DateTime } from "luxon";
const month = ref({
  month: DateTime.now().month,
  year: DateTime.now().year
});
</script>

<style lang="scss" scoped>

</style>