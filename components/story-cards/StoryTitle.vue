<template>
  <a class="block font-semibold font-body" :href="url">
    <span class="font-light sm:hidden">{{ index }}.</span> {{ title }}
    <span class="text-sm text-gray-500 align-middle'">({{ hostname }})</span>
  </a>
</template>

<script setup lang="ts">
import { useHostname } from '~/composables/hostname';

const props = defineProps<{
  index?: number,
  title: string,
  url?: string,
}>()

const hostname = useHostname(props.url);
</script>