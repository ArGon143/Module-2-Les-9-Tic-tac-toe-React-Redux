import styles from './Game.module.css';
import { store } from '../store/store';
import { RESTART_GAME } from '../store/actions';

export const RefreshGame = () => {
	const goRefreshGame = () => {
		store.dispatch(RESTART_GAME());
	};

	return (
		<button className={styles.refButton} onClick={goRefreshGame}>
			Начать игру заново
		</button>
	);
};
