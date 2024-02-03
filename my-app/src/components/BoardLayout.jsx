import styles from './Game.module.css';
import { store } from '../store/store';
import { Square } from './Square';
import PropTypes from 'prop-types';

export const BoardLayout = ({ handleClick, status }) => {
	const { squares, isWinEndGame } = store.getState();

	BoardLayout.propTypes = {
		handleClick: PropTypes.func,
		status: PropTypes.string,
	};
	return (
		<>
			<div className={styles.status}>{status}</div>
			<div className={isWinEndGame ? styles.winBoardWrapper : styles.boardWrapper}>
				<div>
					<Square value={squares[0]} onClick={() => handleClick(0)} />
					<Square value={squares[1]} onClick={() => handleClick(1)} />
					<Square value={squares[2]} onClick={() => handleClick(2)} />
				</div>
				<div>
					<Square value={squares[3]} onClick={() => handleClick(3)} />
					<Square value={squares[4]} onClick={() => handleClick(4)} />
					<Square value={squares[5]} onClick={() => handleClick(5)} />
				</div>
				<div>
					<Square value={squares[6]} onClick={() => handleClick(6)} />
					<Square value={squares[7]} onClick={() => handleClick(7)} />
					<Square value={squares[8]} onClick={() => handleClick(8)} />
				</div>
			</div>
		</>
	);
};
