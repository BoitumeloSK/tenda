// components/navbar.js

import React from 'react';
import Link from 'next/link';
import styles from './navbar/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/bookings">Bookings</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/wallet">Wallet</Link>
        </li>
        <li>
          <Link href="/support">Support</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
