<template>
  <Comment
    v-model:collapsed="isCollapsed"
    :story-id="storyId"
    :id="comment.id"
    :by="comment.by"
    :text="comment.text"
    :time="comment.time"
    :karma="comment.karma"
    :descendants="comment.descendants"
  ></Comment>

  <div v-if="!isCollapsed && hasKids" class="flex flex-col ml-2 gap-y-2">
    <Comments
      :story-id="storyId"
      :depth="depth + 1"
      :comments="comment.kids"
    ></Comments>
  </div>
</template>

<script setup lang="ts">
import Comment from '~/components/stories/comments/Comment.vue';
import Comments from '~/components/stories/comments/Comments.vue';

const props = defineProps<{
  storyId: number,
  comment: any,
  depth: number,
}>();
const isCollapsed = ref(props.depth > 3);
const hasKids = computed(() => props.comment.kids?.length > 0);
</script>