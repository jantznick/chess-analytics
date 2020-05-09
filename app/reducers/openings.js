const initialState = []

const openings = (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT_OPENINGS':
			return action.payload
		default:
			return state
	}
}

export default openings