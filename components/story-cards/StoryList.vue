<template>
  <section class="flex w-full justify-center bg-neutral-50 px-2 py-6 dark:bg-neutral-900">
    <div class="w-full max-w-[1200px] sm:w-3/4">
      <ul ref="scroll" class="flex flex-col gap-1">

        <li v-if="status === 'pending'" v-for="index in 30" :key="index" class="flex flex-col">
          <StorySkeleton :index="index"></StorySkeleton>
        </li>

        <li v-else v-for="(story, index) in stories" :key="story.id" class="flex flex-col">
          <div class="relative">
            <span
              class="absolute top-3 hidden font-black sm:block"
              :class="{
                '-left-6': index + 1 <= 9,
                '-left-8': index + 1 > 9
              }"
            >{{ index + 1 }}.</span>

            <div
              class="flex justify-between rounded-lg border-2 border-blue-100/50 bg-gray-100 p-2 dark:border-blue-100/20 dark:bg-neutral-800"
            >
              <div class="flex gap-2">
                <div class="flex flex-col items-center justify-center">
                  <UIcon name="i-heroicons-arrow-up-circle" class="inline-block h-5 w-5"/>
                  <span class="text-sm">{{ story.score }}</span>
                </div>

                <div class="flex flex-col justify-center">
                  <StoryTitle :index="index + 1" :title="story.title" :url="story.url"></StoryTitle>
                  <StoryActions :story="story"></StoryActions>
                </div>
              </div>

              <div class="flex items-center">
                <UButton
                  variant="ghost"
                  size="sm"
                  class="flex h-fit flex-col font-bold text-neutral-800 dark:text-neutral-200"
                  :to="`/stories/${story.id}`"
                >
                  <UIcon name="i-mdi-message-reply-text" class="block h-6 w-6"/>
                  {{ story.descendants }}
                </UButton>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useInfiniteScroll } from '@vueuse/core';
import StoryActions from '~/components/story-cards/StoryActions.vue';
import StorySkeleton from '~/components/story-cards/StorySkeleton.vue';
import StoryTitle from '~/components/story-cards/StoryTitle.vue';

const props = defineProps< {
  storyType: string
}>()

const route = useRoute();

const PAGE_SIZE = 30;

const page = ref(1);
const { data: stories, status } = await useLazyAsyncData('stories', async () => {
  return await internalApiFetch<any>(`/stories/${props.storyType}`);
})

const scroll = ref<HTMLElement>();
useInfiniteScroll(document, async () => {
  if (stories.value == null) return;

  page.value++;
  const storiesResult = await internalApiFetch<any>(`/stories/${props.storyType}`, {
    query: {
      page: page.value,
      limit: PAGE_SIZE
    }
  });

  stories.value.push(...storiesResult);
}, {
  distance: 196,
  direction: 'bottom',
  interval: 1000
});
</script>