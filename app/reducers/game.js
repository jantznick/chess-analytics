const initialState = {}

const game = (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT_GAME':
			return action.payload
		case 'SELECT_OPENING':
			return {
				type: 'opening',
				moves: action.payload.moves.split(' ')
			}
		default:
			return state
	}
}

export default game