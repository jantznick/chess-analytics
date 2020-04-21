
export const selectPlayer = (data) => ({
	type: 'SELECT_PLAYER',
	data
});

export const selectGames = () => ({
	type: 'SELECT_GAMES'
});

export const getPlayerData = () => {
	const url = "https://api.chess.com/pub/player/lawnpawnfawn";
	return dispatch => {
		return fetch(url)
			.then(response => response.json())
			// .then(json => console.log(json.teams))
			.then(json => dispatch(selectPlayer(json)))
	}
};
