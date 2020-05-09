const initialState = {}

const opening = (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT_OPENING':
			return action.payload
		case 'SELECT_CONT':
			return {
				...state,
				continuation: action.payload
			}
		default:
			return state
	}
}

export default opening