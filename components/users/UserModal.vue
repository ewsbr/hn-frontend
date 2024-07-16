<template>
  <UModal :ui="{ wrapper: 'pa-6', width: 'sm:max-w-fit max-w-full w-fit' }">
    <UCard>
      <template #header>
        <div class="flex justify-between">
          <h1 class="text-xl font-bold text-primary">{{ username }}</h1>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="emit('close')"
            @touchend="emit('close')"
          />
        </div>
      </template>

      <section class="w-fit max-w-full text-neutral-600 dark:text-neutral-300">
        <span v-html="about" class="inline-block mb-2 whitespace-break-spaces about-section"></span>
        <p class="!my-1">
          <span class="font-medium text-neutral-800 dark:text-neutral-100">Created: </span><span>{{ created }}</span>
        </p>
        <p class="!my-1">
          <span class="font-medium text-neutral-800 dark:text-neutral-100">Karma: </span><span>{{ karma }}</span>
        </p>
        <p class="!my-1">
          <span class="font-medium text-neutral-800 dark:text-neutral-100">Submissions: </span><span>{{ submitted.length }}</span>
        </p>
      </section>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
const props = defineProps<{
  username: string;
  about?: string;
  created: string
  karma: number
  submitted: number[]
}>();

const emit = defineEmits<{
  close: []
}>();
defineShortcuts({
  escape: {
    usingInput: true,
    handler: () => { emit('close') }
  }
})
</script>

<style lang="scss">
.about-section p {
  overflow-wrap: anywhere;
}
</style>