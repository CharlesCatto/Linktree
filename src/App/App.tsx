import styles from "./App.module.css";
import Home from "../pages/Home/Home";

const App = () => {
	return (
		<div className={styles.appContainer}>
			<Home />
		</div>
	);
};

export default App;
