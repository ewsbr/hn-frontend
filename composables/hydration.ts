import type { Ref, UnwrapRef } from '@vue/reactivity';

// Sometimes you don't care if your ref changes on hydration... why isn't this available natively?
function useIgnoreHydration<T>(value: Ref<T>, def: T): Ref<UnwrapRef<T>> {
  const valueNoHydration = ref(def);
  onMounted(() => {
    watch(value, v => valueNoHydration.value = v as UnwrapRef<T>, { immediate: true });
  });

  return valueNoHydration as Ref<UnwrapRef<T>>;
}

export {
  useIgnoreHydration
}