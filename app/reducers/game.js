const initialState = {}

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
				moves: action.payload.moves.split(' ')
			}
		case 'MAKE_MOVE':
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