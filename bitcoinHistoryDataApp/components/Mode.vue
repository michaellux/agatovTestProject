<template>
   <div>
      <div class="mb-5">
         <SelectButton @update:modelValue="print($event)" v-model="modeValue" :options="options" aria-labelledby="basic" />
      </div>
      <Day v-if="modeValue === 'day'"></Day>
      <Week v-else-if="modeValue === 'week'"></Week>
      <Month v-else-if="modeValue === 'month'"></Month>
      <Year v-else-if="modeValue === 'year'"></Year>
      <Period v-else-if="modeValue === 'period'"></Period>
   </div>
</template>

<script setup>
import SelectButton from 'primevue/selectbutton';
const props = defineProps({
  "mode" : 'day' | 'week' | 'month' | 'now' | 'year' | 'period'
});
const modeValue = ref('now');
const options = ref(['now', 'day', 'week', 'month', 'year', 'period']);
const print = (event) => {
   console.log(event);
}
</script>

<style lang="scss" scoped>

</style>