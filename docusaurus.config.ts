import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const githubOwner = 'billiondollarsolo';
const githubRepo = 'supadupa-docs';

const config: Config = {
  title: 'Supadupa Docs',
  tagline: 'Self-hosted, multi-project Supabase control plane',
  favicon: 'img/logo/sd.svg',

  future: {
    v4: true,
  },

  url: 'https://billiondollarsolo.github.io',
  baseUrl: '/supadupa-docs/',
  organizationName: githubOwner,
  projectName: githubRepo,
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `https://github.com/${githubOwner}/${githubRepo}/tree/main/`,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo/supadupa-logo-wide.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Supadupa',
        src: 'img/logo/supadupa-logo-wide.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/quickstart/local-loopback',
          position: 'left',
          label: 'Quickstart',
        },
        {
          to: '/docs/operations/backups-recovery',
          position: 'left',
          label: 'Operations',
        },
        {
          href: 'https://github.com/billiondollarsolo/supadupa',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Start',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Local quickstart',
              to: '/docs/quickstart/local-loopback',
            },
            {
              label: 'VPS quickstart',
              to: '/docs/quickstart/vps-dns-tls',
            },
          ],
        },
        {
          title: 'Operate',
          items: [
            {
              label: 'DNS and TLS',
              to: '/docs/operations/dns-tls',
            },
            {
              label: 'Backups and recovery',
              to: '/docs/operations/backups-recovery',
            },
            {
              label: 'Troubleshooting',
              to: '/docs/operations/troubleshooting',
            },
          ],
        },
        {
          title: 'Reference',
          items: [
            {
              label: 'Configuration',
              to: '/docs/reference/configuration',
            },
            {
              label: 'CLI',
              to: '/docs/reference/cli',
            },
            {
              label: 'Main repository',
              href: 'https://github.com/billiondollarsolo/supadupa',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Supadupa contributors.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'diff', 'go', 'json', 'sql', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
