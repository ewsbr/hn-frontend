<template>
  <StoryList story-type="top"></StoryList>
</template>

<script setup lang="ts">
import StoryList from '~/components/story-cards/StoryList.vue';
import { getTitle } from '~/utils/title';

useSeoMeta({
  title: getTitle('Top Stories')
});
</script>