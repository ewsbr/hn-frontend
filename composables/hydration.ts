import type { Ref, UnwrapRef } from '@vue/reactivity';

// Sometimes you don't care if you ref changes on hydration... why isn't this available natively?
function useIgnoreHydration<T>(value: Ref<T>, def: T): Ref<UnwrapRef<T>>{
  const valueNoHydration = ref(def);
  onMounted(() => {
    watch(value, v => valueNoHydration.value = v, { immediate: true });
  });

  return valueNoHydration;
}

export {
  useIgnoreHydration
}