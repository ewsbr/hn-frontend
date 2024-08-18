<template>
  <article v-if="error == null" class="w-full flex flex-col items-center overflow-hidden text-sm md:text-base">
    <Story
      :story-id="story.hnId"
      :by="story.by"
      :title="story.title"
      :score="story.score"
      :text="story.text"
      :time="story.time"
      :url="story.url"
      :descendants="story.descendants"
    ></Story>

    <section class="flex flex-col w-full items-center sm:px-0 gap-y-4 py-4 bg-neutral-50 dark:bg-neutral-900">
      <div class="flex flex-wrap gap-x-4 gap-y-2 px-4 sm:px-0 w-full sm:w-3/4 max-w-[688px] xl:1/2">
        <ULink :to="`/stories/${story.hnId}`" class="flex items-center">
          <UIcon name="i-mdi-arrow-left" class="mr-2"></UIcon>
          Go to story
        </ULink>
      </div>

      <div class="flex justify-center sm:w-3/4 max-w-[688px] overflow-hidden">
        <div class="px-4 sm:px-0 w-full">
          <Comments v-if="story.kids.length > 0" :story-id="story.hnId" :depth="0" :comments="story.kids"></Comments>
          <p v-else class="font-semibold">This story has no comments</p>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import Story from '~/components/stories/Story.vue';
import Comments from '~/components/stories/comments/Comments.vue';
import { type StorySortOption } from '~/constants/story-sort-options';

const route = useRoute();

const { data: story, error } = await useAsyncData(() => {
  return internalApiFetch<any>(`/stories/${route.params.id}`, {
    query: {
      order_by: 'default' satisfies StorySortOption,
      comment_id: route.params.commentId
    }
  });
});
</script>