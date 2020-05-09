const initialState = {}

const opening = (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT_OPENING':
			return action.payload
		default:
			return state
	}
}

export default opening