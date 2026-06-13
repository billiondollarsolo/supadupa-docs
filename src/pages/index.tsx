import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

const docGroups = [
  {
    title: 'Evaluate',
    body: 'Understand the MVP status, runtime model, requirements, and where Supadupa fits.',
    href: '/docs/intro',
  },
  {
    title: 'Install',
    body: 'Run the local loopback path first, then move to a VPS with DNS and TLS.',
    href: '/docs/quickstart/local-loopback',
  },
  {
    title: 'Operate',
    body: 'Backups, upgrades, security, troubleshooting, and production-like review checklists.',
    href: '/docs/operations/backups-recovery',
  },
  {
    title: 'Integrate',
    body: 'Connect client apps, use the CLI, inspect the Management API, and plan Terraform use.',
    href: '/docs/admin-ui/connect',
  },
];

export default function Home(): ReactNode {
  const logoUrl = useBaseUrl('/img/logo/supadupa-logo-wide.png');

  return (
    <Layout
      title="Supadupa documentation"
      description="Documentation for the Supadupa self-hosted, multi-project Supabase control plane.">
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <img
              className={styles.logo}
              src={logoUrl}
              alt="Supadupa"
            />
            <Heading as="h1" className={styles.title}>
              Self-hosted Supabase control plane docs
            </Heading>
            <p className={styles.subtitle}>
              Install, operate, and troubleshoot isolated Supabase-style projects on your own infrastructure.
            </p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/docs/quickstart/local-loopback">
                Local quickstart
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/quickstart/vps-dns-tls">
                VPS install
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.statusBand}>
          <div className={styles.statusInner}>
            <strong>MVP status:</strong> the Docker Compose runtime is the supported evaluation path. Kubernetes
            exists as a renderer/operator contract and should be treated as non-MVP until it is promoted.
          </div>
        </section>

        <section className={styles.gridSection}>
          <div className={styles.grid}>
            {docGroups.map((group) => (
              <Link key={group.title} className={styles.card} to={group.href}>
                <h2>{group.title}</h2>
                <p>{group.body}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.runtime}>
          <div>
            <Heading as="h2">What Supadupa manages</Heading>
            <p>
              Supadupa runs a control plane, admin UI, provisioning loop, meta database, and isolated project
              runtimes. Each project receives its own public API, Studio, Postgres, pooler, Storage, Realtime, and
              Functions routes through Traefik.
            </p>
          </div>
          <Link className="button button--outline button--lg" to="/docs/concepts/architecture">
            Architecture
          </Link>
        </section>
      </main>
    </Layout>
  );
}
