const initialState = {}

const game = (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT_GAME':
			return action.payload
		default:
			return state
	}
}

export default game