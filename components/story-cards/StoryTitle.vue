<template>
  <a class="block font-semibold font-body" :href="url" :target="anchorTarget">
    <span class="font-light sm:hidden">{{ index }}.</span> {{ title }}
    <span class="align-middle text-sm text-gray-500">({{ hostname }})</span>
  </a>
</template>

<script setup lang="ts">
import { useHostname } from '~/composables/hostname';
import { useAnchorTarget } from '~/composables/settings';

const props = defineProps<{
  index?: number,
  title: string,
  url?: string,
}>();

const hostname = useHostname(props.url);
const anchorTarget = useAnchorTarget();
</script>