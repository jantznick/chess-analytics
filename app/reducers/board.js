import { combineReducers } from "redux"

import stateModel from './model';

const current = (state = stateModel.board.current, action) => {
	switch (action.type) {
		case 'SELECT_GAME':
			return {
				type: 'game',
				moveNumber: 0,
				fen: 'start',
				...action.payload
			}
		case 'SELECT_OPENING':
			return {
				type: 'opening',
				moveNumber: 0,
				fen: 'start',
				targets: action.payload.moves.split(' ')
			}
		case 'SELECT_CLOSING':
			return {
				type: 'closing',
				moveNumber: 0,
				fen: action.payload.fen
			}
		case 'MAKE_MOVE':
			let {targets, sources} = state;
			action.payload.moveTarget && targets.push(action.payload.moveTarget);
			action.payload.moveSource && sources.push(action.payload.moveSource);

			return {
				...state,
				fen: action.payload.fen,
				moveNumber: action.payload.moveNumber
			}
		case 'SELECT_CONT':
			return {
				...state,
				targets: state.targets.concat(action.payload.moves.split(' '))
			}
		default:
			return state
	}
}

const state = (state = stateModel.board.state, action) => {
	switch (action.type) {
		case 'SELECT_GAME':
			return 'game';
		case 'SELECT_OPENING':
		case 'MAKE_MOVE':
			return 'opening';
		case 'SELECT_CLOSING':
			return 'endgame';
		default:
			return state
	}
}

export default combineReducers({
	current,
	state
})
