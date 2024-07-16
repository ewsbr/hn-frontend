<template>
  <UPopover
    v-model:open="open"
    mode="hover"
    :ui="{ wrapper: 'inline-flex' }"
    :popper="{ placement: 'top-end', offsetDistance: 2 }"
  >
    <a ref="usernameLink" :href="`/users/${username}`" class="text-anchor animate-underline" @mouseover.once="loadUser" @click="onClick">
      {{ username }}
    </a>

    <template #panel>
      <div class="relative block max-w-sm p-4 text-md">
        <span v-if="user == null">Loading...</span>
        <template v-else>
          <h1 class="text-xl font-bold text-primary">{{ user.id }}</h1>

          <section class="text-neutral-600 dark:text-neutral-300">
            <span v-html="about" class="overflow-ellipsis line-clamp-4 md:line-clamp-6 lg:line-clamp-none mb-4"></span>

            <p class="!my-1">
              <span class="font-medium text-neutral-800 dark:text-neutral-100">Created: </span><span>{{ created }}</span>
            </p>
            <p class="!my-1">
              <span class="font-medium text-neutral-800 dark:text-neutral-100">Karma: </span><span>{{ user.karma }}</span>
            </p>
            <p class="!my-1">
              <span class="font-medium text-neutral-800 dark:text-neutral-100">Submissions: </span><span>{{ user.submitted?.length }}</span>
            </p>
          </section>
        </template>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import { useTimeAgo, useDateFormat } from '@vueuse/core';
import UserModal from '~/components/users/UserModal.vue';

const props = defineProps<{
  username: string;
}>();

const modal = useModal();

const user = ref<any>(null);
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
  if (user.value?.about == null) {
    return 'N/A';
  }

  return user.value.about;
});

async function onClick() {
  if (user.value == null) {
    user.value = await $fetch(`https://hacker-news.firebaseio.com/v0/user/${props.username}.json`);;
  }

  modal.open(UserModal, {
    username: props.username,
    about: about.value,
    created: created.value,
    karma: user.value?.karma,
    submitted: user.value?.submitted,
    onClose() {
      open.value = false;
      modal.close();
    },
  })
}
</script>