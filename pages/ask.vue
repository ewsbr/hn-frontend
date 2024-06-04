<template>
  <StoryList story-type="ask"></StoryList>
</template>

<script setup lang="ts">
import StoryList from '~/components/story-cards/StoryList.vue';

useSeoMeta({
  title: getTitle('Ask Stories'),
});
</script>