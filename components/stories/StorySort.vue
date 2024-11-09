<template>
  <div>
    <USelectMenu
      v-model="commentsSort"
      size="lg"
      :ui="{ rounded: 'rounded-full' }"
      :disabled="!!route.query.search"
      :options="storySortOptions"
      :value="commentsSort"
      :placeholder="currentSortPlaceholder"
      value-attribute="value"
    ></USelectMenu>
  </div>

</template>

<script setup lang="ts">
import { storySortOptions } from '~/constants/story-sort-options';

const route = useRoute();
const commentsSort = defineModel<string>({ default: storySortOptions[0].value });

const currentSortPlaceholder = ref<string>(storySortOptions.find((option) => option.value === commentsSort.value)?.label ?? 'Sort by');
</script>