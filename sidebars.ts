import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Quickstart',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'quickstart/index',
      },
      items: ['quickstart/local-loopback', 'quickstart/vps-dns-tls'],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [
        'concepts/architecture',
        'concepts/routing',
        'concepts/projects',
        'concepts/resources',
        'concepts/supabase-compatibility',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'operations/index',
      },
      items: [
        'operations/install',
        'operations/dns-tls',
        'operations/backups-recovery',
        'operations/upgrades',
        'operations/security',
        'operations/troubleshooting',
        'operations/known-issues',
      ],
    },
    {
      type: 'category',
      label: 'Admin UI',
      collapsed: false,
      items: [
        'admin-ui/overview',
        'admin-ui/screenshots',
        'admin-ui/organizations',
        'admin-ui/projects',
        'admin-ui/connect',
        'admin-ui/settings',
        'admin-ui/backups',
        'admin-ui/logs-metrics',
        'admin-ui/compliance',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        'reference/cli',
        'reference/api',
        'reference/terraform',
        'reference/helm-chart',
        'reference/configuration',
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        'contributing/docs-workflow',
        'contributing/screenshot-workflow',
        'contributing/release-notes',
      ],
    },
  ],
};

export default sidebars;
