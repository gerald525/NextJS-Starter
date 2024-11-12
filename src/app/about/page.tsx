import React from 'react'
import Image from 'next/image';

import styles from './page.module.css';


const About = () => {
	return (
		<div>
			<div className={styles.imgContainer}>
				{/* <Image src="" fill alt="" className={styles.img} /> */}
				<div className={styles.imgText}>
					<h1 className={styles.imgTitle}>Digital Storytellers</h1>
					<h2 className={styles.imgDesc}>Digital Storytellers</h2>
				</div>
			</div>
			<div className={styles.textContainer}></div>
		</div>
	)
}

export default About;