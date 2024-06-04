<template>
  <div>
    <div class="flex items-center justify-between h-8" @click="onClick">
      <DotSeparatedList>
        <DotSeparatedListItem>
          <UserWithTooltip :username="by" @click.stop></UserWithTooltip> ({{ karma }})
        </DotSeparatedListItem>
        <DotSeparatedListItem>
          <StoryTime :story-id="storyId" :comment-id="id" :time="time" @click.stop></StoryTime>
        </DotSeparatedListItem>
      </DotSeparatedList>

      <div class="flex justify-center gap-x-1">
        <span class="h-full font-semibold" :class="{ 'text-neutral-500 dark:text-neutral-400': !isCollapsed, 'text-primary': isCollapsed }">
          +{{ descendants }}
        </span>
        <UButton v-if="!isCollapsed" variant="ghost" class="p-0">
          <UIcon name="i-mdi-unfold-less-horizontal" class="size-5"></UIcon>
        </UButton>
        <UButton v-else variant="ghost" class="p-0">
          <UIcon name="i-mdi-unfold-more-horizontal" class="size-5"></UIcon>
        </UButton>
      </div>
    </div>

    <section v-if="!isCollapsed" class="text-neutral-800 dark:text-neutral-200" v-html="text"></section>
  </div>
</template>

<script setup lang="ts">
import StoryTime from '~/components/stories/StoryTime.vue';
import UserWithTooltip from '~/components/users/UserWithTooltip.vue';

defineProps<{
  storyId: number,
  id: number,
  by: string,
  text: string,
  time: string,
  karma: number,
  descendants: number
}>();

const isCollapsed = defineModel<boolean>('collapsed', { default: false });

function onClick() {
  isCollapsed.value = !isCollapsed.value;
}
</script>

<style scoped lang="scss">
:deep(p) {
  margin-top: 0.5rem;
}
</style>