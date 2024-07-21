<template>
  <div class="flex flex-col items-center w-full py-4 bg-neutral-100 dark:bg-neutral-800">
    <div class="flex flex-col sm:flex-row justify-between w-full px-3 sm:px-0 sm:w-3/4 max-w-[1200px]">
      <div>
        <h1 class="text-2xl sm:text-3xl font-bold">
          <a :href="url" :target="anchorTarget" class="mr-2">{{ title }}</a>
        </h1>
        <a href="#" class="block text-md mb-2 text-gray-500 align-middle'">({{ hostname }})</a>
        <p v-if="text != null" v-html="text" class="mb-4"></p>

        <DotSeparatedList hide-dots-on-mobile class="text-sm sm:text-base">
          <DotSeparatedListItem class="inline-flex gap-1 items-center">
            <UIcon name="i-heroicons-arrow-up-circle" class="size-5"></UIcon>
            {{ score }}
          </DotSeparatedListItem>
          <DotSeparatedListItem class="inline-flex gap-1 items-center">
            <UIcon name="i-heroicons-user-circle" class="size-5"></UIcon>
            <UserWithTooltip :username="by"></UserWithTooltip>
          </DotSeparatedListItem>
          <DotSeparatedListItem class="inline-flex gap-1 items-center">
            <UIcon name="i-heroicons-clock" class="size-5"></UIcon>
            <StoryTime :story-id="storyId" :time="time"></StoryTime>
          </DotSeparatedListItem>
        </DotSeparatedList>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StoryTime from '~/components/stories/StoryTime.vue';
import UserWithTooltip from '~/components/users/UserWithTooltip.vue';
import { useAnchorTarget } from '~/composables/settings';

const props = defineProps<{
  by: string,
  storyId: number,
  title: string,
  time: string,
  score: number,
  url: string,
  descendants: number,
  text?: string,
}>();

const hostname = useHostname(props.url);
const anchorTarget = useAnchorTarget();
</script>

<style scoped>
:deep(p) {
  margin-top: 0.5rem;
}
</style>