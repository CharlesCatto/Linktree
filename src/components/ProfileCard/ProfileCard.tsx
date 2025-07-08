import styles from "./ProfileCard.module.css";

interface ProfileCardProps {
	title: string;
	url: string;
	img: string;
}

export function ProfileCard({ title, url, img }: ProfileCardProps) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className={styles.card}
		>
			<img src={img} alt={title} className={styles.cardImage} />
			<p className={styles.cardTitle}>{title}</p>
		</a>
	);
}
