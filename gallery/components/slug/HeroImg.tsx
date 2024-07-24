'use client'

import { useRef } from "react";
import useWindowSize from "@/hook/useWindowSize";

import Image from "next/image";
import { heroSmSrcList, heroLgSrcList, gallerySrcList } from "@/lib/images";
import styles from './HeroImg.module.css'


const HERO_SM_SRC = heroSmSrcList();
const HERO_LG_SRC = heroLgSrcList();
const GALLERY_SRC = gallerySrcList();

type HeroImgProps = {
    index: number
    workName: string
}

export default function HeroImg({ index, workName }: HeroImgProps) {
    const [width, height] = useWindowSize();
    const dialogRef = useRef<HTMLDialogElement>(null);

    const openDialog = () => {
        dialogRef.current?.showModal()
    }

    const closeDialog = () => {
        dialogRef.current?.close()
    }

    return (
        <div>
            { width !== 0 &&
                <div className={styles.heroContainer}>
                    <Image 
                        src={ width >= 700 ? HERO_LG_SRC[index] : HERO_SM_SRC[index] } 
                        alt={workName} 
                        placeholder="blur"
                    />
                    <button onClick={openDialog}>
                        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="nonzero"><path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z"/></g></svg>
                        VIEW IMAGE
                    </button>
                </div>
            }

            <dialog ref={dialogRef} className={styles.dialog}>
                <button onClick={closeDialog}>CLOSE</button>
                <Image src={GALLERY_SRC[index]} alt={workName} />
            </dialog>
        </div>
    )
}