<script setup lang="ts">
const { data: examples } = useFetch('/api/bitcoin')
console.log(examples);
</script>

<template>
  <div>
    Prisma ORM Data from the database, received {{ examples?.length || 0 }} records: <pre>{{ examples }}</pre>
  </div>
</template>

function useFetch(arg0: string): { data: any; } {
  throw new Error("Function not implemented.");
}
