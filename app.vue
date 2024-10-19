<template>
  <div>
    <NuxtLayout>
      <NuxtPage :keepalive="{ include: ['ask', 'index', 'jobs', 'new', 'show'] }"/>
    </NuxtLayout>

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
