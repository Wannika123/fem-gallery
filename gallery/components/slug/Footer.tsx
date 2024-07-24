'use client'

import styles from './Footer.module.css'
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { formatPathName } from '@/utils/formatPathName';
import data from '@/data/data.json'

import backBtn from '@/assets/shared/icon-back-button.svg';
import nextBtn from '@/assets/shared/icon-next-button.svg';

const ALL_ROUTES = data.map(work => formatPathName(work.name));

export default function Footer() {
    const router = useRouter();
    const pathName = usePathname();

    const nameWithoutSlash = pathName.replace('/', '');
    const index = ALL_ROUTES.indexOf(nameWithoutSlash);
    const work = data[index]

    const lineJSX = [];
    for (let i = 0; i < ALL_ROUTES.length; i++) {
        if (i <= index) {
            lineJSX.push(<div className={styles.darkLine} key={i}></div>)
        } else {
            lineJSX.push(<div className={styles.lightLine} key={i}></div>)
        }        
    }

    const back = () => {
        if (index === 0) {
            return
        } else {
            router.push(`/${ALL_ROUTES[index - 1]}`)
        }
    }

    const next = () => {
        if (index >= ALL_ROUTES.length - 1) {
            return
        } else {
            router.push(`/${ALL_ROUTES[index + 1]}`)
        }
    }

    return (
        <>
            <div 
                style={{ display: 'grid', gridTemplateColumns: `repeat(${ALL_ROUTES.length}, 1fr)`}}
                className={styles.lineContainer}
            >
                { lineJSX.map(item => item) }
            </div>
            <footer className={styles.footer}>
                <div className={styles.textContainer}>
                    <h2>{work ? work.artist.name : ''}</h2>
                    <p>{work ? work.name : ''}</p>
                </div>
                <div className={styles.btnsContainer}>
                    <button
                        onClick={back} 
                        className={index === 0 ? styles.disabled : undefined}
                    >
                        <Image src={backBtn} alt='view previous slide button' />
                    </button>
                    <button 
                        onClick={next} 
                        className={index >= ALL_ROUTES.length - 1 ? styles.disabled : undefined}
                    >
                        <Image src={nextBtn} alt='view next slide button' />
                    </button>
                </div>
            </footer>
        </>
    )
}