<template>
  <ULink
    :to="to"
    :class="twMerge('z-10 test flex items-center font-poppins text-4xl font-semibold text-blue-800 dark:text-white', ui.base)"
  >
    <img src="~/assets/images/logo.svg" alt="Logo" class="h-12 w-12" />
  </ULink>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

withDefaults(defineProps<{
  to?: string
  ui?: {
    base?: string
    icon?: string
  }
}>(), {
  to: '/',
  ui: () => ({
    base: '',
    icon: ''
  })
});
</script>