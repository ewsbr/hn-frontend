<template>
  <USelectMenu
    v-model="commentsSort"
    size="lg"
    :ui="{ rounded: 'rounded-full' }"
    :disabled="!!route.query.search"
    :options="storySortOptions"
    :value="commentsSort"
    value-attribute="value"
  ></USelectMenu>
</template>

<script setup lang="ts">
import { storySortOptions } from '~/constants/story-sort-options';

const route = useRoute();
const commentsSort = defineModel<{ label: string, value: string }>('commentsSort', { default: storySortOptions[0] });
</script>