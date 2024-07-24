import data from '@/data/data.json';
import { formatPathName } from '@/utils/formatPathName';
import { artistSrcList } from '@/lib/images';
import Image from 'next/image';
import Link from 'next/link';
import HeroImg from '@/components/slug/HeroImg';
import styles from './page.module.css'

const ALL_ROUTES = data.map(work => formatPathName(work.name));
const ARTIST_SRC_LIST = artistSrcList();

export function generateStaticParams() {
    
    return data.map((work) => ({
        slug: formatPathName(work.name)        
    }))
}

export default function SlidePage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    
    const index = ALL_ROUTES.indexOf(slug);
    const work = data[index]
    
    return (
        <>
            { work !== undefined && 
                <div className={styles.container}>
    
                    <div className={styles.headContainer}>
                        <div>
                            <HeroImg 
                                index={index} 
                                workName={work.name}
                            />
                        </div>
                        <div className={styles.titleWrapper}>
                            <div className={styles.titleText}>
                                <h1>{work.name}</h1>
                                <p>{work.artist.name}</p>
                            </div>
                            <Image src={ARTIST_SRC_LIST[index]} alt={`A picture of ${work.artist.name}`} />
                        </div>
                    </div>
    
                    <div className={styles.textContainer}>           
                        <h1>{work.year}</h1>
                        <div className={styles.paragraphDiv}>
                            <p>{work.description}</p>
                            <Link href={work.source} target='_blank'>GO TO SOURCE</Link>
                        </div>
                    </div>
    
                </div>           
            }
        </>
    )
}