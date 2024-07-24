import { thumbnailSrcList } from "@/lib/images";
import Image from "next/image";
import styles from './ImgContainer.module.css'
import Link from "next/link";
import { formatPathName } from "@/utils/formatPathName";

const THUMBNAIL_IMG_SRC = thumbnailSrcList();

type ImgContainerProps = {
    work: {
        id: number;
        name: string;
        year: number;
        description: string;
        source: string;
        artist: {
            image: string;
            name: string;
       }
    }
    index: number
}

export default function ImgContainer({ work, index }: ImgContainerProps) {
    const src = THUMBNAIL_IMG_SRC[index];

    const rowSpan = Math.round(src.height / 5) + 8;

    const path = formatPathName(work.name)

    return (
        <div style={{ gridRowEnd: `span ${rowSpan}`}} className={styles.container} >
            <Link href={`/${path}`}>
                <Image 
                    src={src} 
                    alt={work.name} 
                    height={src.height} 
                    style={{ objectFit: 'cover'}} 
                    placeholder="blur"
                />
                <div className={styles.textContainer}>
                    <h1>{work.name}</h1>
                    <p>{work.artist.name}</p>
                </div>
            </Link>
        </div>
    )
}