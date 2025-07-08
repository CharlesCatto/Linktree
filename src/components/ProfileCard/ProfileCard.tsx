import styles from "./ProfileCard.module.css";

type ProfileCardProps = {
	title: string;
	url: string;
	img: string;
};

export function ProfileCard({ title, url, img }: ProfileCardProps) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className={styles.card}
		>
			<img src={img} alt={title} className={styles.cardImage} />
			<h3>{title}</h3>
		</a>
	);
}
