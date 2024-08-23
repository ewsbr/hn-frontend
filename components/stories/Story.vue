<template>
  <div class="flex w-full flex-col items-center bg-neutral-100 py-4 text-sm dark:bg-neutral-800 md:text-base">
    <div class="flex w-full flex-col justify-between px-3 max-w-[688px] sm:w-3/4 sm:flex-row sm:px-0">
      <div>
        <h1 class="text-2xl font-bold">
          <a :href="url" :target="anchorTarget" class="mr-2">{{ title }}</a>
        </h1>
        <a href="#" class="block text-md mb-2 text-gray-500 align-middle'">({{ hostname }})</a>
        <article v-if="text != null" v-html="text" class="mb-4"></article>

        <DotSeparatedList hide-dots-on-mobile class="text-sm sm:text-base">
          <DotSeparatedListItem class="inline-flex items-center gap-1">
            <UIcon name="i-heroicons-arrow-up-circle" class="size-5"></UIcon>
            {{ score }}
          </DotSeparatedListItem>
          <DotSeparatedListItem class="inline-flex items-center gap-1">
            <UIcon name="i-heroicons-user-circle" class="size-5"></UIcon>
            <UserWithTooltip :username="by"></UserWithTooltip>
          </DotSeparatedListItem>
          <DotSeparatedListItem class="inline-flex items-center gap-1">
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