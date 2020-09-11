const initialState = {}

const opening = (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT_OPENING':
			return action.payload
		case 'SELECT_CONT':
			console.log(action.payload);
			return {
				...state,
				continuation: action.payload.name
			}
		default:
			return state
	}
}

export default opening