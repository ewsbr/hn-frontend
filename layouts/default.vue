<template>
  <div class="flex flex-col h-full">
    <PageHeader>
    </PageHeader>

    <div class="flex flex-row h-full w-full">
      <main class="flex h-full w-full">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '~/components/nav/PageHeader.vue';

useSeoMeta({
  description: 'An overengineered HackerNews clone using Nuxt UI.'
});
</script>