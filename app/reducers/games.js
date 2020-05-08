const initialState = []

const games = (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT_GAMES':
			return action.payload
		default:
			return state
	}
}

export default games