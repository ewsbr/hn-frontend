<template>
  <div v-for="comment in comments" :key="comment.id" class="flex flex-col gap-2">
    <CommentTree :story-id="storyId" :depth="depth" :comment="comment"></CommentTree>
  </div>
</template>

<script setup lang="ts">
import CommentTree from '~/components/stories/comments/CommentTree.vue';

withDefaults(defineProps<{
  storyId: number,
  comments: any[],
  depth: number
}>(), {
  depth: 0
});
</script>