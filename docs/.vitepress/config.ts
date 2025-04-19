import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '말하는 감자',
  description: '어쩌다 만든 블로그입니다.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/me' },
      // { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '감자 블로그',
        items: [
          { text: 'About Me', link: '/me' },
          { text: '블로그 만드는 법', link: '/guide/how-to-make-vitepress' },
        ],
      },
      {
        text: 'Examples (Deprecated)',
        items: [
          { text: 'Markdown Examples', link: '/example/markdown-examples' },
          { text: 'Runtime API Examples', link: '/example/api-examples' },
        ],
      },
    ],

    socialLinks: [
      // https://simpleicons.org/
      { icon: 'github', link: 'https://github.com/cyberpotato2077' },
    ],
  },
  base: '/cyberpotato2077/',
});
