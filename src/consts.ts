import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: "Isaiah's Site",
  description:
    'tbd',
  href: 'https://astro-erudite.vercel.app',
  author: 'Isaiah Milkey',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'author',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://www.linkedin.com/in/isaiahmilkey/',
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/Isaiah-Milkey',
    label: 'GitHub',
  },
  {
    href: 'mailto:imilkey@asu,edu',
    label: 'Email',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
