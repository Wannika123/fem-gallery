'use client'

import { useRouter, usePathname } from "next/navigation"
import data from '@/data/data.json'
import { formatPathName } from "@/utils/formatPathName"
import styles from './HeaderBtn.module.css'

const ALL_ROUTES = data.map(work => formatPathName(work.name));

export default function HeaderBtn() {

    const route = useRouter();
    const pathName = usePathname();

    const nameWithoutSlash = pathName.replace('/', '');

    const checkSliding = () => {
        if (ALL_ROUTES.indexOf(nameWithoutSlash) >= 0) {
            return true
        } 
        return false
    }
    const isSliding = checkSliding();

    const startSlideshow = () => {
        route.push('/starry-night')
    }

    const stopSlideshow = () => {
        route.push('/')
    }

    return (
        <button
            className={styles.button}
            onClick={isSliding ? stopSlideshow : startSlideshow}
        >
            {isSliding ? 'STOP' : 'START'} SLIDESHOW
        </button>
    )
}