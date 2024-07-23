<template>
  <div class="text-sm md:text-base">
    <div class="flex h-8 items-center justify-between" @click="onClick">
      <DotSeparatedList>
        <DotSeparatedListItem>
          <UserWithTooltip :username="by"></UserWithTooltip> ({{ karma }})
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

    <section v-if="!isCollapsed" class="text-neutral-800 comment-content dark:text-neutral-200" v-html="commentHtml"></section>
  </div>
</template>

<script setup lang="ts">
import { useSettingsCookie } from '#imports';
import StoryTime from '~/components/stories/StoryTime.vue';
import UserWithTooltip from '~/components/users/UserWithTooltip.vue';

const props = defineProps<{
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

const settings = useSettingsCookie();
const anchorTarget = useAnchorTarget();

const parser = import.meta.server ? null : new DOMParser();
const commentHtml = computed(() => {
  if (!settings.value.openInNewPage || parser === null) {
    return props.text;
  }

  const html = parser.parseFromString(props.text, 'text/html');
  html.querySelectorAll('a').forEach((el) => {
    el.setAttribute('target', anchorTarget);
    el.setAttribute('rel', 'nofollow');
  });

  return html.getElementsByTagName('body').item(0)?.innerHTML;
})
</script>

<style scoped lang="scss">
:deep(p) {
  margin-top: 0.5rem;
}

:deep(.comment-content a) {
  @apply font-medium underline decoration-gray-300 dark:decoration-gray-700;
}
</style>