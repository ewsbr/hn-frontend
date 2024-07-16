<template>
  <div class="flex flex-col h-full">
    <PageHeader>
    </PageHeader>

    <div class="flex flex-row h-full w-full">
      <main class="flex h-full w-full">
        <slot></slot>
      </main>
    </div>

    <ClientOnly>
      <UNotifications
        class="fixed bottom-0 end-0 z-[55] flex w-full flex-col justify-end sm:w-[450px]"
      >
        <template #title="{ title }">
          <span v-html="title"/>
        </template>
        <template #description="{ description }">
          <span v-html="description"/>
        </template>
      </UNotifications>
    </ClientOnly>

    <UModals />
  </div>
</template>

<script setup lang="ts">
import PageHeader from '~/components/nav/PageHeader.vue';

useSeoMeta({
  description: 'An overengineered HackerNews clone using Nuxt UI.'
});
</script>