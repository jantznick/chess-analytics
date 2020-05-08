const initialState = {}

const playerData = (state = initialState, action) => {
	switch (action.type) {
        case 'SELECT_PLAYER':
            return action.payload
		default:
			return state
	}
}

export default playerData