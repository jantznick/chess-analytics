import { combineReducers } from "redux"

const initialState = {
	data: {},
	stats: {
		"chess_daily": {
			"last": {
				"rating": 1076,
				"date": 1579971136,
				"rd": 197
			},
			"best": {
				"rating": 1200,
				"date": 1351128989,
				"game": "https://www.chess.com/daily/game/248335360"
			},
			"record": {
				"win": 4,
				"loss": 0,
				"draw": 0,
				"time_per_move": 21717,
				"timeout_percent": 0
			}
		},
		"chess_bullet": {
			"last": {
				"rating": 1045,
				"date": 1351129284,
				"rd": 290
			},
			"record": {
				"win": 0,
				"loss": 1,
				"draw": 0
			}
		},
		"chess_blitz": {
			"last": {
				"rating": 727,
				"date": 1588792358,
				"rd": 39
			},
			"best": {
				"rating": 1200,
				"date": 1441782000,
				"game": "https://www.chess.com/live/game/4422532675"
			},
			"record": {
				"win": 93,
				"loss": 96,
				"draw": 8
			}
		},
		"fide": 0,
		"tactics": {
			"highest": {
				"rating": 1172,
				"date": 1496449198
			},
			"lowest": {
				"rating": 903,
				"date": 1580312434
			}
		},
		"lessons": {
			"highest": {
				"rating": 800,
				"date": 1526671302
			},
			"lowest": {
				"rating": 800,
				"date": 1526671276
			}
		},
		"puzzle_rush": {
			"best": {
				"total_attempts": 14,
				"score": 11
			}
		}
	}
}

const data = (state = initialState.data, action) => {
	switch (action.type) {
		case 'SELECT_PLAYER':
			return action.payload
		default:
			return state
	}
}

const stats = (state = initialState.stats, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default combineReducers({
	data,
	stats
})