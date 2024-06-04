export const storySortOptions = [
  {
    label: 'Default',
    value: 'default',
  },
  {
    label: 'Newest',
    value: 'newest',
  },
  {
    label: 'Oldest',
    value: 'oldest',
  },
  {
    label: 'Top karma',
    value: 'top_user_karma',
  },
  {
    label: 'Low karma',
    value: 'low_user_karma',
  },
  {
    label: 'Most replies',
    value: 'most_replies',
  },
  {
    label: 'Least replies',
    value: 'least_replies',
  },
] as const satisfies { label: string; value: string }[];

export type StorySortOption = typeof storySortOptions[number]['value'];