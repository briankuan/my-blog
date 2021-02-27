import React from 'react';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <header id={styles.header}>
        <div id={styles.inner}>
          <h1>Hi I'm Brian.</h1>
        </div>
      </header>
      <main id={styles.main}>
        {children}
      </main>
    </div>
  );
}
