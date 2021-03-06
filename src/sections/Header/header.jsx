import { ReactComponent as Logo } from "../../images/logo.svg";
import React from "react";
import styles from "./header.module.scss";
import { Button } from "../../components/Button";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.container_header}`}>
        <div className={styles.header__row}>
          <Logo />
          <nav className={styles.header__nav}>
            <div className={styles['nav-item']}>Home</div>
            <div className={styles['nav-item']}>Your benefits</div>
            <div className={styles['nav-item']}>Our process</div>
            <div className={styles['nav-item']}>Our works</div>
            <div className={styles['nav-item']}>Testimonials</div>
            <div className={styles['nav-item']}>Start a project</div>
          </nav>
          <Button>
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}
