<template>
  <UPopover
    v-model:open="open"
    mode="hover"
    :ui="{ wrapper: 'inline-flex', base: '[@media(pointer:coarse)]:!block' }"
    :popper="{ placement: 'top-end', offsetDistance: 2 }"
  >
    <a ref="usernameLink" :href="`/users/${username}`" class="text-anchor animate-underline" @mouseover.once="loadUser">
      {{ username }}
    </a>

    <template #panel>
      <div class="relative block font-semibold text-md p-4 max-w-sm">
        <span v-if="user == null">Loading...</span>
        <template v-else>
          <span>Username: {{ user.id }}</span>
          <br>
          <span>Created: {{ created }}</span>
          <br>
          <span class="line-clamp-2 overflow-ellipsis">
            About: {{ about }}
          </span>
          <span>Karma: {{ user.karma }}</span>
          <br>
          <span>Submissions: {{ user.submitted?.length }}</span>
        </template>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import { useTimeAgo, useDateFormat } from '@vueuse/core';

const props = defineProps<{
  username: string;
}>();

const user = ref(null);
const open = ref(false);
const usernameLink = ref<HTMLElement | null>(null);

async function loadUser() {
  user.value = await $fetch(`https://hacker-news.firebaseio.com/v0/user/${props.username}.json`);
  open.value = false;
  await nextTick();
  // I just wanted the popper instance :(
  if (usernameLink.value?.matches(':hover')) {
    open.value = true;
  }
}

const created = computed(() => {
  if (user.value == null) {
    return '';
  }

  const timestamp = user.value.created * 1000;
  return useDateFormat(user.value.created * 1000, 'YYYY-MM-DD HH:mm:ss').value + ' (' + useTimeAgo(timestamp).value + ')';
});

const about = computed(() => {
  if (user.value == null) {
    return '';
  }

  const doc = new DOMParser().parseFromString(user.value.about, 'text/html');
  return doc.documentElement.textContent;
});
</script>

<style>
:deep(.no) {
  pointer-events: none;
  cursor: default;
}
</style>