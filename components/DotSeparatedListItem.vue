<template>
  <li class="inline last:after:content-none after:content-['•']">
    <slot></slot>
  </li>
</template>

<style scoped lang="scss">
li:not(:last-child)::after {
  content: '•';
  margin: 0 0.5rem;
};
</style>