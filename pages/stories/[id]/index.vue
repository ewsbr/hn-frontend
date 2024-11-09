<template>
  <article v-if="error == null" class="w-full flex flex-col items-center overflow-hidden">
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
      <div class="flex flex-wrap gap-x-4 gap-y-2 px-2 sm:px-0 w-full sm:w-3/4 max-w-[688px] xl:1/2">
        <div class="flex gap-2 items-start sm:items-center">
          <label for="comments-sort" class="font-semibold text-sm hidden sm:block">Sort by:</label>
          <StorySort id="comments-sort" v-model="commentsSort"></StorySort>
        </div>

        <div class="flex items-center">
          <UInput
            v-model="search"
            size="lg"
            :placeholder="`Search in ${story.descendants} comments`"
            :ui="{ base: 'w-[12.25rem]' }"
            @keyup.enter="onSearch"
          ></UInput>
        </div>
      </div>

      <div class="flex justify-center w-full sm:w-3/4 max-w-[688px] overflow-hidden bg-neutral-50 dark:bg-neutral-900">
        <div class="px-4 sm:px-0 w-full">
          <Comments v-if="story.kids.length > 0 && status === 'success'" :story-id="story.hnId" :depth="0" :comments="story.kids"></Comments>
          <p v-else-if="status === 'pending'" class="font-semibold">Loading...</p>
          <p v-else-if="route.query.search" class="font-semibold">No comments found matching "{{ route.query.search }}"</p>
          <p v-else class="font-semibold">This story has no comments</p>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import Story from '~/components/stories/Story.vue';
import Comments from '~/components/stories/comments/Comments.vue';
import StorySort from '~/components/stories/StorySort.vue';
import { getTitle } from '~/utils/title';

const route = useRoute();
const router = useRouter();

const settings = useSettingsCookie();
const commentsSort = ref<string>(settings.value.storySort);

console.log('sort', settings.value);

const { data: story, error, refresh, status } = await useAsyncData(() => {
  if (route.query.search) {
    return internalApiFetch<any>(`/stories/${route.params.id}`, {
      query: {
        order_by: commentsSort.value,
        search: route.query.search,
      },
    });
  }

  return internalApiFetch<any>(`/stories/${route.params.id}`, {
    query: {
      order_by: commentsSort.value,
    },
  });
}, {
  watch: [commentsSort],
});

useHead({
  title: getTitle(story.value.title)
});

const search = ref<string>(route.query.search as string || '');
async function onSearch() {
  await router.push({ query: { search: search.value } });
  await refresh();
}
</script>