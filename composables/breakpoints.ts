import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

function useTwBreakpoints() {
  return useBreakpoints(breakpointsTailwind);
}

export {
  useTwBreakpoints
}