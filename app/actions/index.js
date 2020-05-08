
export const selectPlayer = data => ({
	type: 'SELECT_PLAYER',
	payload: data
});

export const selectGames = data => ({
	type: 'SELECT_GAMES',
	payload: data
});

export const getPlayerData = (userName) => {
	const url = `https://api.chess.com/pub/player/${userName}`;
	return dispatch => {
		return fetch(url)
			.then(response => response.json())
			.then(json => dispatch(selectPlayer(json)))
	}
};

export const getGameData = (userName) => {
	const url = `https://api.chess.com/pub/player/${userName}/games/archives`
	const games = [];
	fetch(url)
		.then(response => response.json())
		.then(json => {
			json.archives.map(url => {
				const arch = getArchive(url)
				arch.map(x => games.push(x))
			})
		})
	return dispatch => {
		dispatch(selectGames(games))
	}
};

export const getArchive = (url) => {
	return fetch(url)
		.then(response => response.json())
		.then(json => json.games)
}