function useSettingsCookie() {
  return useCookie('settings', {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    default() {
      return {
        storySort: 'default'
      };
    },
  });
}

export {
  useSettingsCookie
}