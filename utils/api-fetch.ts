const FETCH_TIMEOUT = 5000;

type FetchOptions = Parameters<typeof $fetch>[1];

async function internalApiFetch<T>(url: string, options?: FetchOptions) {
  const { public: { apiBase, basePath } } = useRuntimeConfig();
  const headers = useRequestHeaders(['Cookie']);

  return await $fetch<T>(`${basePath}${url}`, {
    baseURL: apiBase,
    timeout: FETCH_TIMEOUT,
    credentials: 'omit',
    headers,
    ...options,
  });
}

export {
  internalApiFetch
}