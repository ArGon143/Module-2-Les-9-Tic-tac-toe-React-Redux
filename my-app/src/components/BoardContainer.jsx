import { setFirstPlayerIsNext, setIsWinEndGame, setSquares } from '../store/actions';
import { store } from '../store/store';
import { BoardLayout } from './BoardLayout';

export const BoardContainer = () => {
	const { squares, firstPlayerIsNext } = store.getState();

	const handleClick = (i) => {
		const { squares, firstPlayerIsNext } = store.getState();

		if (squares[i] || calculateWinner(squares)) {
			return;
		}

		const nextSquares = squares.slice();
		if (firstPlayerIsNext) {
			nextSquares[i] = 'X';
		} else {
			nextSquares[i] = 'O';
		}

		store.dispatch(setSquares(nextSquares));
		store.dispatch(setFirstPlayerIsNext(!firstPlayerIsNext));
	};

	const calculateWinner = (squares) => {
		const winCombinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < winCombinations.length; i++) {
			const [a, b, c] = winCombinations[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				store.dispatch(setIsWinEndGame(true));

				return squares[a];
			}
		}

		return null;
	};

	const winner = calculateWinner(squares);
	let status;

	if (winner) {
		status = `Игрок игравший "${winner}" победил`;
	} else {
		status = `Сейчас ход "${firstPlayerIsNext ? 'X' : 'O'}"`;
	}
	if (!winner && !squares.includes(null)) {
		status = `Ничья. "Сразитесь" еще раз!`;
	}

	return <BoardLayout handleClick={handleClick} status={status} />;
};
