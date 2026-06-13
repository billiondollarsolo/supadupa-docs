import {useEffect, useMemo, useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type Screenshot = {
  file: string;
  title: string;
  area: 'Admin UI' | 'Project' | 'Studio';
};

const screenshots: Screenshot[] = [
  {file: '00-login.png', title: 'Login', area: 'Admin UI'},
  {file: '01-dashboard.png', title: 'Dashboard', area: 'Admin UI'},
  {file: '02-projects.png', title: 'Projects', area: 'Admin UI'},
  {file: '03-project-new.png', title: 'New Project', area: 'Admin UI'},
  {file: '04-access.png', title: 'Access', area: 'Admin UI'},
  {file: '05-hosts.png', title: 'Hosts', area: 'Admin UI'},
  {file: '06-security.png', title: 'Security', area: 'Admin UI'},
  {file: '07-audit.png', title: 'Audit', area: 'Admin UI'},
  {file: '08-settings.png', title: 'Settings', area: 'Admin UI'},
  {file: '09-about.png', title: 'About', area: 'Admin UI'},
  {file: '10-project-overview.png', title: 'Project Overview', area: 'Project'},
  {file: '11-project-connect.png', title: 'Project Connect', area: 'Project'},
  {file: '12-project-access.png', title: 'Project Access', area: 'Project'},
  {file: '13-project-database.png', title: 'Project Database', area: 'Project'},
  {file: '14-project-logs.png', title: 'Project Logs', area: 'Project'},
  {file: '15-project-backups.png', title: 'Project Backups', area: 'Project'},
  {file: '16-project-settings.png', title: 'Project Settings', area: 'Project'},
  {file: '17-project-activity.png', title: 'Project Activity', area: 'Project'},
  {file: '18-studio-home.png', title: 'Studio Home', area: 'Studio'},
  {file: '19-studio-table-editor.png', title: 'Studio Table Editor', area: 'Studio'},
  {file: '20-studio-sql-editor.png', title: 'Studio SQL Editor', area: 'Studio'},
  {file: '21-studio-database.png', title: 'Studio Database', area: 'Studio'},
  {file: '22-studio-auth.png', title: 'Studio Auth', area: 'Studio'},
  {file: '23-studio-storage.png', title: 'Studio Storage', area: 'Studio'},
  {file: '24-studio-functions.png', title: 'Studio Functions', area: 'Studio'},
  {file: '25-studio-realtime.png', title: 'Studio Realtime', area: 'Studio'},
  {file: '26-studio-advisors.png', title: 'Studio Advisors', area: 'Studio'},
  {file: '27-studio-logs.png', title: 'Studio Logs', area: 'Studio'},
  {file: '28-studio-integrations.png', title: 'Studio Integrations', area: 'Studio'},
  {file: '29-studio-settings.png', title: 'Studio Settings', area: 'Studio'},
];

type Mode = 'light' | 'dark';
type Area = 'All' | Screenshot['area'];

export function ScreenshotGallery() {
  const [mode, setMode] = useState<Mode>('light');
  const [area, setArea] = useState<Area>('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const screenshotsBaseUrl = useBaseUrl('/img/screenshots/actual');

  const visibleScreenshots = useMemo(
    () => screenshots.filter((screenshot) => area === 'All' || screenshot.area === area),
    [area],
  );
  const active = activeIndex === null ? null : visibleScreenshots[activeIndex];

  useEffect(() => {
    if (!active) {
      return;
    }

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current === null ? current : (current + visibleScreenshots.length - 1) % visibleScreenshots.length));
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current === null ? current : (current + 1) % visibleScreenshots.length));
      }
    }

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [active, visibleScreenshots.length]);

  useEffect(() => {
    if (activeIndex !== null && activeIndex >= visibleScreenshots.length) {
      setActiveIndex(null);
    }
  }, [activeIndex, visibleScreenshots.length]);

  function previous() {
    setActiveIndex((current) => (current === null ? current : (current + visibleScreenshots.length - 1) % visibleScreenshots.length));
  }

  function next() {
    setActiveIndex((current) => (current === null ? current : (current + 1) % visibleScreenshots.length));
  }

  function imagePath(mode: Mode, file: string) {
    return `${screenshotsBaseUrl}/${mode}/${file}`;
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.controls} aria-label="Screenshot gallery controls">
        <div className={styles.segmented} aria-label="Color mode">
          {(['light', 'dark'] as const).map((value) => (
            <button
              key={value}
              className={value === mode ? styles.active : ''}
              type="button"
              onClick={() => setMode(value)}>
              {value === 'light' ? 'Light' : 'Dark'}
            </button>
          ))}
        </div>
        <div className={styles.segmented} aria-label="Screenshot area">
          {(['All', 'Admin UI', 'Project', 'Studio'] as const).map((value) => (
            <button
              key={value}
              className={value === area ? styles.active : ''}
              type="button"
              onClick={() => setArea(value)}>
              {value}
            </button>
          ))}
        </div>
      </div>

      <p className={styles.count}>
        Showing {visibleScreenshots.length} {mode}-mode screenshots.
      </p>

      <div className={styles.grid}>
        {visibleScreenshots.map((screenshot, index) => (
          <button
            className={styles.card}
            key={screenshot.file}
            type="button"
            onClick={() => setActiveIndex(index)}>
            <span className={styles.thumbFrame}>
              <img
                src={imagePath(mode, screenshot.file)}
                alt={`${mode} mode ${screenshot.title}`}
                loading="lazy"
              />
            </span>
            <span className={styles.cardMeta}>
              <span>{screenshot.title}</span>
              <small>{screenshot.area}</small>
            </span>
          </button>
        ))}
      </div>

      {active ? (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={`${active.title} screenshot`}>
          <button className={styles.backdrop} type="button" aria-label="Close screenshot" onClick={() => setActiveIndex(null)} />
          <div className={styles.lightbox}>
            <div className={styles.lightboxHeader}>
              <div>
                <strong>{active.title}</strong>
                <span>{mode} mode · {active.area}</span>
              </div>
              <button type="button" className={styles.close} onClick={() => setActiveIndex(null)}>
                Close
              </button>
            </div>
            <div className={styles.imageShell}>
              <button type="button" className={styles.navButton} onClick={previous} aria-label="Previous screenshot">
                ‹
              </button>
              <img src={imagePath(mode, active.file)} alt={`${mode} mode ${active.title}`} />
              <button type="button" className={styles.navButton} onClick={next} aria-label="Next screenshot">
                ›
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
