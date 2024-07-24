'use client'

import { useRouter, usePathname } from "next/navigation"
import { ALL_ROUTES } from "@/app/[slug]/page";
import styles from './HeaderBtn.module.css'

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