<template>
  <ClientOnly>
    <UButton
      v-bind="$attrs"
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-mdi-white-balance-sunny'"
      variant="ghost"
      class="text-slate-600 dark:text-sky-50"
      @click="isDark = !isDark"
    >
      <template v-if="showText">{{ isDark ? 'Light' : 'Dark' }}</template>
    </UButton>

    <template #fallback>
      <UButton
        icon="i-mdi-white-balance-sunny"
        variant="ghost"
        class="text-slate-600 dark:text-sky-50"
      >
        Loading...
      </UButton>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  showText?: boolean;
}>(), {
  showText: false
});

const colorMode = useColorMode();
const isDark = computed({
  get () {
    return colorMode.value === 'dark';
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  }
});
</script>