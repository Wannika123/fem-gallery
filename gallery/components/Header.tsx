import logo from '@/assets/shared/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'
import HeaderBtn from './HeaderBtn'

export default function Header() {
    
    return (
        <header className={styles.header}>
            <Link href='/'>
                <Image src={logo} alt='logo icon' priority />
            </Link>
            <HeaderBtn />
        </header>
    )
}