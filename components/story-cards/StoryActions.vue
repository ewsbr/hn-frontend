<template>
  <div>
    <ul class="inline-block list-none text-sm sm:text-base">
      <li>
        by <UserWithTooltip :username="story.by"></UserWithTooltip>
      </li>

      <li>
        <time :datetime="datetime" :title="formattedDate">
          <ULink
            :to="`/stories/${story.id}`"
            class="hover:underline"
          >
            {{ fromNow }}
          </ULink>
        </time>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useDateFormat, useTimeAgo } from '@vueuse/core';
import UserWithTooltip from '~/components/users/UserWithTooltip.vue';

const props = defineProps<{
  story: any
}>()

const datetime = new Date(props.story.time).toISOString()
const fromNow = useTimeAgo(props.story.time);
const formattedDate = useDateFormat(props.story.time, 'YYYY-MM-DD HH:mm:ss');
</script>

<style scoped lang="scss">
li {
  display: inline;

  &:last-child::after {
    content: '';
  }
  &::after {
    content: '•';
    padding-left: 0.6rem;
    padding-right: 0.6rem;
  }
}
</style>