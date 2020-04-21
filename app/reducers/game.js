const initialState = '';

const game = (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT_PLAYER':
			return action.data
		default:
			return state
	}
}

export default game