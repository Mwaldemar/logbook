/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.scss'

import Navigation from '../navbar/navbar'

const Header = () => (
    <header>
        <div className={styles.header}>
            <Image width="75" height="75" src='/bird.png' alt='logo'/>
            <Link className={styles.title} href="/">
                <h1>Mikkel's Logbook</h1>
            </Link>
            <p>Welcome to my logbook</p>
        </div>
        <Navigation />
    </header>
)

export default Header;