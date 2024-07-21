function useSettingsCookie() {
  return useCookie('settings', {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    default() {
      return {
        storySort: 'default',
        openInNewPage: false
      };
    },
  });
}

function useAnchorTarget(): string {
  const cookie = useSettingsCookie()
  if (cookie.value.openInNewPage) {
    return '_blank';
  }
  return '_self';
}

export {
  useSettingsCookie,
  useAnchorTarget
}