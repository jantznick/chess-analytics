const initialState = {
	fen: "start",
	moveNumber: 0,
	targets: [],
	sources: []
}

const game = (state = initialState, action) => {
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
				moves: state.moves.concat(action.payload.moves.split(' '))
			}
		default:
			return state
	}
}

export default game