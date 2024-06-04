function useHostname(url?: string | null) {
  if (url == null) {
    return 'news.ycombinator.com'
  }

  try {
    return new URL(url).hostname.replace('www.', '');
  } catch (e) {
    return 'news.ycombinator.com'
  }
}

export {
  useHostname
}