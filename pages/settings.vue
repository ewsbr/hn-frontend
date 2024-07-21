<template>
  <div class="flex flex-col gap-y-2 p-4">
    <h1 class="text-2xl font-bold text-primary">Settings</h1>

    <div class="flex items-center space-x-2">
      <label for="story-sort" class="text-gray-700 dark:text-gray-300">Default comment sort:</label>
      <StorySort id="story-sort" v-model="settings.storySort"></StorySort>
    </div>

    <div class="flex items-center space-x-2">
      <label for="dark-mode" class="text-gray-700 dark:text-gray-300">Color scheme:</label>
      <DarkModeToggle show-text></DarkModeToggle>
    </div>

    <div class="flex items-center space-x-2">
      <label for="new-page" class="text-gray-700 dark:text-gray-300">Open stores in a new page:</label>
      <USelectMenu
        v-model="settings.openInNewPage"
        id="new-page"
        size="lg"
        :ui="{ rounded: 'rounded-full' }"
        :options="[{ label: 'No', value: false }, { label: 'Yes', value: true }]"
        value-attribute="value"
      ></USelectMenu>
    </div>
  </div>
</template>

<script setup lang="ts">
import StorySort from '~/components/stories/StorySort.vue';
import { useSettingsCookie } from '~/composables/settings';
import DarkModeToggle from '~/components/DarkModeToggle.vue';

useSeoMeta({
  title: getTitle('Settings'),
});

const settings = useSettingsCookie();
</script>