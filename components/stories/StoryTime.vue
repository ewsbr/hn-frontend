<template>
  <time :datetime="datetime" :title="formattedDate">
    <ULink
      :to="`/stories/${storyId}${commentsPath}`"
      class="hover:underline"
    >
      {{ fromNow }}
    </ULink>
  </time>
</template>

<script setup lang="ts">
import { useDateFormat, useTimeAgo } from '@vueuse/core';

const props = defineProps<{
  storyId: number,
  commentId?: number,
  time: string
}>();

const commentsPath = props.commentId ? `/comments/${props.commentId}` : '';

const datetime = new Date(props.time).toISOString();
const fromNow = useState<string>(`${datetime}-fromNow`, () => useTimeAgo(props.time, { showSecond: true }));
const formattedDate = useState<string>(`${datetime}-formattedDate`, () => useDateFormat(props.time, 'YYYY-MM-DD HH:mm:ss'));
</script>