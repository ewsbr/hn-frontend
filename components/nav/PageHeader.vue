<template>
  <header
    class="border-neutral-200 bg-white px-1 sm:px-4 shadow-md border-b-blue-400 border-b-[1px] dark:bg-neutral-800"
  >
    <UButton
      to="/settings"
      variant="ghost"
      icon="i-mdi-cog-outline"
      class="fixed sm:hidden text-slate-800 dark:text-sky-50 bottom-0 right-0 m-4 p-2 z-50 !bg-neutral-500/20 dark:!bg-neutral-600/50"
    />

    <div class="mx-auto flex flex-wrap items-center justify-between">
      <div class="flex justify-center gap-x-4">
        <ProjectLogo class="hidden sm:flex" :ui="{ base: 'text-3xl', icon: 'h-9 w-9' }" />
        <UHorizontalNavigation :links="links" class="self-end" :ui="{
          base: 'py-5'
        }"/>
      </div>

      <div class="hidden sm:flex items-center gap-x-4 lg:order-2">
        <ClientOnly>
          <UTooltip
            class="hidden sm:block"
            text="Toggle dark mode"
          >
            <DarkModeToggle></DarkModeToggle>
          </UTooltip>
        </ClientOnly>

        <UTooltip
          text="Settings"
        >
          <UButton
            to="/settings"
            variant="ghost"
            icon="i-mdi-cog-outline"
            class="text-slate-600 dark:text-sky-50"
          />
        </UTooltip>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const links = [{
  label: 'Top',
  to: '/',
  icon: 'i-heroicons-chart-bar',
}, {
  label: 'New',
  to: '/new',
  icon: 'i-mdi-new-box'
}, {
  label: 'Show',
  to: `/show`,
  icon: 'i-mdi-television-classic',
}, {
  label: 'Ask',
  to: '/ask',
  icon: 'i-heroicons-chat-bubble-left-right',
}, {
  label: 'Jobs',
  to: '/jobs',
  icon: 'i-mdi-briefcase-outline',
}];
</script>