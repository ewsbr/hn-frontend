<template>
  <div class="relative">
    <span
      class="absolute sm:block hidden font-black top-3"
      :class="{
        '-left-6': index + 1 <= 9,
        '-left-8': index + 1 > 9
      }"
    >{{ index + 1 }}.</span>
    <USkeleton class="h-[75px]" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  index: number
}>();
</script>