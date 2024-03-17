'use client'

import React from "react"
import Link from "next/link"
import clsx from 'clsx'

import { usePathname } from 'next/navigation'

import styles from './navbar.module.scss'

const Navigation = () => {
const pathname = usePathname()

    return (
        <nav>
            <div className={styles.navigation}>
                <ul className={styles.linkContainer}>
                    <li className={styles.navItem}>
                        <Link href="/" className={clsx(styles.link, { [styles.active]: pathname === '/' }, styles.left)}>
                            Home
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/about" className={clsx(styles.link, { [styles.active]: pathname === '/about' })}>
                            About
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/FAQ" className={clsx(styles.link, { [styles.active]: pathname === '/FAQ' }, styles.right)}>
                            FAQ
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;