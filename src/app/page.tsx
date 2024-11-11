import Image from "next/image";
import HomeImg from "../../public/2.jpg";

import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<h1 className={styles.title}>
					Better design for your digital products.
				</h1>
				<p className={styles.desc}>
					Turning your idea into reality. We bring together into
					global tech industry.
				</p>
				<button className={styles.button}>See our work</button>
			</div>
			<div className={styles.item}>
				<Image src={HomeImg} alt="Filip Home" className={styles.img} />
			</div>
		</div>
	);
}
