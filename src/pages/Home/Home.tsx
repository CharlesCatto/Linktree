import styles from "./Home.module.css";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import Sun from "../../components/Sun/Sun";
import Me from "../../assets/Me.png";

import portfolio from "../../assets/Cards/portfolio.svg";
import linkedin from "../../assets/Cards/linkedin.svg";
import calendar from "../../assets/Cards/calendar.png";
import simplon from "../../assets/Cards/simplon.svg";
import cv from "../../assets/Cards/CV.png";
import github from "../../assets/Cards/GitHub.png";

export default function Home() {
	const links = [
		{
			title: "Mon Portfolio",
			url: "https://portfolio-charles-catto.vercel.app/",
			img: portfolio,
		},
		{
			title: "Mon LinkedIn",
			url: "https://www.linkedin.com/in/charles-catto/",
			img: linkedin,
		},
		{
			title: "Voir mon CV",
			url: "/Linktree/CV_Charles_Catto.pdf",
			img: cv,
		},
		{
			title: "Programme Formation Simplon CDA",
			url: "/Linktree/Descriptif_formation_CDA.pdf",
			img: simplon,
		},
		{
			title: "Calendrier Formation Simplon",
			url: "/Linktree/CDA_Calendar.pdf",
			img: calendar,
		},
		{
			title: "Mon GitHub",
			url: "https://github.com/CharlesCatto",
			img: github,
		},
	];

	return (
		<div className={styles.container}>
			<Sun />
			<img src={Me} alt="Moi" className={styles.profileImage} />
			<h1 className={styles.title}>Bienvenue sur mon Linktree</h1>
			<div className={styles.cardsWrapper}>
				{links.map((link) => (
					<ProfileCard
						key={link.title}
						title={link.title}
						url={link.url}
						img={link.img}
					/>
				))}
			</div>
		</div>
	);
}
