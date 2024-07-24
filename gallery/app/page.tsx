import styles from "./page.module.css";
import data from '@/data/data.json'
import ImgContainer from "@/components/ImgContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      { data.map((work, index) => (
        <ImgContainer work={work} index={index} key={work.name} />
      ))}
    </main>
  );
}
