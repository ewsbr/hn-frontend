<template>
  <section class="flex justify-center w-full py-6 px-2">
    <div class="w-full sm:w-3/4 max-w-[1200px]">
      <ul ref="scroll" class="flex flex-col gap-1">

        <li v-if="pending" v-for="index in 30" :key="index" class="flex flex-col">
          <StorySkeleton :index="index"></StorySkeleton>
        </li>

        <li v-else v-for="(story, index) in stories2" :key="story.id" class="flex flex-col">
          <div class="relative">
            <span
              class="absolute sm:block hidden font-black top-3"
              :class="{
                '-left-6': index + 1 <= 9,
                '-left-8': index + 1 > 9
              }"
            >{{ index + 1 }}.</span>

            <div
              class="flex justify-between bg-gray-100 dark:bg-neutral-800 border-blue-100/50 dark:border-blue-100/20 border-2 p-2 rounded-lg"
            >
              <div class="flex gap-2">
                <div class="flex flex-col justify-center items-center">
                  <UIcon name="i-heroicons-arrow-up-circle" class="h-5 w-5 inline-block"/>
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
                  class="flex flex-col font-bold h-fit text-neutral-800 dark:text-neutral-200"
                  :to="`/stories/${story.id}`"
                >
                  <UIcon name="i-mdi-message-reply-text" class="h-6 w-6 block"/>
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

const page = computed({
  get: () => route.query.page ? parseInt(route.query.page as string) : 1,
  set: (value: number) => {
    navigateTo({
      query: {
        ...route.query,
        page: value,
      },
      replace: true
    })
  }
});
const { data: stories2, pending } = await useLazyAsyncData('stories', async () => {
  return await internalApiFetch<any>(`/stories/${props.storyType}`);
})

const scroll = ref<HTMLElement>();
useInfiniteScroll(document, async () => {
  if (stories2.value == null) return;

  page.value++;

  const stories = await internalApiFetch<any>(`/stories/${props.storyType}`, {
    query: {
      page: page.value,
      limit: PAGE_SIZE
    }
  });

  stories2.value.push(...stories);
}, {
  distance: 196,
  direction: 'bottom',
  interval: 1000
});
</script>