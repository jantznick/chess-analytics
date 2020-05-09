
export const makeMove = data => ({
	type: 'MAKE_MOVE',
	payload: data
})

export const selectOpening = data => ({
	type: 'SELECT_OPENING',
	payload: data
})

export const selectContinuation = data => ({
	type: 'SELECT_CONT',
	payload: data
})

export const selectPlayer = data => ({
	type: 'SELECT_PLAYER',
	payload: data
});

export const selectGames = data => ({
	type: 'SELECT_GAMES',
	payload: data
});

export const selectGame = data => ({
	type: 'SELECT_GAME',
	payload: data
})

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
	const promises = [];
	return dispatch => {
		fetch(url)
			.then(response => response.json())
			.then(json => {
				json.archives.map(url => {
					const arch = getArchive(url)
					promises.push(arch)
				})
				Promise.all(promises)
					.then((value) => {
						value.map(array1 => {
							array1.map(game => {
								games.push(game)
							})
						})
						return dispatch(selectGames(games))
					})
			})
	}
};

export const getArchive = (url) => {
	return fetch(url, {
		mode: 'cors'
	})
		.then(response => response.json())
		.then(json => json.games)
}

