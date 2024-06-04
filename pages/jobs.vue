<template>
  <StoryList story-type="job"></StoryList>
</template>

<script setup lang="ts">
import StoryList from '~/components/story-cards/StoryList.vue';

useSeoMeta({
  title: getTitle('Jobs'),
});
</script>