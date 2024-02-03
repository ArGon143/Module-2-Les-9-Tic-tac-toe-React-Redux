import styles from './Game.module.css';
import { RefreshGame } from './RefreshGame';
import { BoardContainer } from './BoardContainer';

export const GameContainer = () => {
	return (
		<div className={styles.app}>
			<section className={styles.section}>
				<BoardContainer />
				<RefreshGame />
			</section>
		</div>
	);
};
