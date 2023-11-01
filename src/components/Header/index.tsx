import React from 'react';
import Link from 'next/link';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link href={'/'} className={styles.logoText}>
          {'< Hwang Hee Sun Portfolio />'}
        </Link>
      </h1>
    </header>
  );
};

export default Header;
