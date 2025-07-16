import styles from "./Sun.module.css";

export default function Sun() {
	return (
		<div className={`${styles.sun} sun_global`}>
			<div className={styles.ray_box}>
				<div className={`${styles.ray} ${styles.ray1}`} />
				<div className={`${styles.ray} ${styles.ray2}`} />
				<div className={`${styles.ray} ${styles.ray3}`} />
				<div className={`${styles.ray} ${styles.ray4}`} />
				<div className={`${styles.ray} ${styles.ray5}`} />
				<div className={`${styles.ray} ${styles.ray6}`} />
				<div className={`${styles.ray} ${styles.ray7}`} />
				<div className={`${styles.ray} ${styles.ray8}`} />
				<div className={`${styles.ray} ${styles.ray9}`} />
				<div className={`${styles.ray} ${styles.ray10}`} />
			</div>
		</div>
	);
}
