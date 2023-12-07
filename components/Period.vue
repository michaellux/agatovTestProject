<template>
  <div class="wrapper">
    <div class="w-1/6 inline-block mr-2">
        <vue-date-picker dark v-model="startDateValue"></vue-date-picker>
    </div>
    <div class="w-1/6 inline-block">
        <vue-date-picker dark v-model="endDateValue"></vue-date-picker>
    </div>
  </div>
</template>

<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref } from "vue";
import { DateTime } from "luxon";
const endDateValue = ref(DateTime.now());
console.log(endDateValue);
const startDateValue = ref(endDateValue.value.minus({days:1}));
</script>

<style lang="scss" scoped>

</style>