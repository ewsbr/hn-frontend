<template>
  <StoryList story-type="show"></StoryList>
</template>

<script setup lang="ts">
import StoryList from '~/components/story-cards/StoryList.vue';

useSeoMeta({
  title: getTitle('Show HackerNews'),
});
</script>