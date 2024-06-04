<template>
  <StoryList story-type="new"></StoryList>
</template>

<script setup lang="ts">
import StoryList from '~/components/story-cards/StoryList.vue';

useSeoMeta({
  title: getTitle('New Stories'),
});
</script>