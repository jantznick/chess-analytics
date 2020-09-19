const stateModel = {
	player: {
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
		},
		data: {
			"player_id": 9386572,
			"@id": "https://api.chess.com/pub/player/lawnpawnfawn",
			"url": "https://www.chess.com/member/lawnpawnfawn",
			"username": "lawnpawnfawn",
			"followers": 0,
			"country": "https://api.chess.com/pub/country/US",
			"last_online": 1600456085,
			"joined": 1351128989,
			"status": "basic",
			"is_streamer": false
		},
		games: {
			current: [],
			archiveLinks: [
				{
					link: "https://api.chess.com/pub/player/lawnpawnfawn/games/2012/10",
					fetched: false,
					month: '10',
					year: '2012'
				},
				{
					link: "https://api.chess.com/pub/player/lawnpawnfawn/games/2015/09",
					fetched: false,
					month: '09',
					year: '2015'
				},
				{
					link: "https://api.chess.com/pub/player/lawnpawnfawn/games/2017/05",
					fetched: false,
					month: '05',
					year: '2017'
				}
			],
			fetchedGames: [
				{
				  "url": "https://www.chess.com/live/game/4801057994",
				  "pgn": "[Event \"Live Chess\"]\n[Site \"Chess.com\"]\n[Date \"2020.05.02\"]\n[Round \"-\"]\n[White \"lawnpawnfawn\"]\n[Black \"Simdono\"]\n[Result \"1-0\"]\n[ECO \"C20\"]\n[ECOUrl \"https://www.chess.com/openings/Kings-Pawn-Opening-Leonardis-Variation-2...Nf6\"]\n[CurrentPosition \"5rk1/p1pb1pp1/2n2n1p/4p3/Q7/P4P2/1P1NB1PP/R3K2R w KQ -\"]\n[Timezone \"UTC\"]\n[UTCDate \"2020.05.02\"]\n[UTCTime \"14:19:05\"]\n[WhiteElo \"689\"]\n[BlackElo \"711\"]\n[TimeControl \"300\"]\n[Termination \"lawnpawnfawn won by resignation\"]\n[StartTime \"14:19:05\"]\n[EndDate \"2020.05.02\"]\n[EndTime \"14:22:57\"]\n[Link \"https://www.chess.com/live/game/4801057994\"]\n\n1. e4 {[%clk 0:04:59.9]} 1... e5 {[%clk 0:04:59.9]} 2. d3 {[%clk 0:04:58.6]} 2... Nf6 {[%clk 0:04:58.2]} 3. Nf3 {[%clk 0:04:57.5]} 3... Nc6 {[%clk 0:04:57.5]} 4. Bg5 {[%clk 0:04:53.6]} 4... h6 {[%clk 0:04:54.5]} 5. Bh4 {[%clk 0:04:52.4]} 5... d5 {[%clk 0:04:49.3]} 6. exd5 {[%clk 0:04:44.7]} 6... Qxd5 {[%clk 0:04:43.6]} 7. c4 {[%clk 0:04:37.9]} 7... Qa5+ {[%clk 0:04:37.3]} 8. Nfd2 {[%clk 0:04:29.3]} 8... Bb4 {[%clk 0:04:30.3]} 9. a3 {[%clk 0:04:16.3]} 9... Bxd2+ {[%clk 0:04:23.6]} 10. Nxd2 {[%clk 0:04:12.4]} 10... b5 {[%clk 0:04:09.2]} 11. Be2 {[%clk 0:04:00.3]} 11... bxc4 {[%clk 0:04:04.5]} 12. dxc4 {[%clk 0:03:59.4]} 12... Bg4 {[%clk 0:03:50.5]} 13. f3 {[%clk 0:03:57.1]} 13... Be6 {[%clk 0:03:40.7]} 14. c5 {[%clk 0:03:48.4]} 14... Qxc5 {[%clk 0:03:26.2]} 15. Qa4 {[%clk 0:03:45.4]} 15... Bd7 {[%clk 0:03:11.5]} 16. Bf2 {[%clk 0:03:38.4]} 16... O-O {[%clk 0:03:09.2]} 17. Bxc5 {[%clk 0:03:35.3]} 17... Rab8 {[%clk 0:02:49]} 18. Bxf8 {[%clk 0:03:33.5]} 18... Rxf8 {[%clk 0:02:46.1]} 1-0",
				  "time_control": "300",
				  "end_time": 1588429377,
				  "rated": true,
				  "fen": "5rk1/p1pb1pp1/2n2n1p/4p3/Q7/P4P2/1P1NB1PP/R3K2R w KQ -",
				  "time_class": "blitz",
				  "rules": "chess",
				  "white": {
					"rating": 689,
					"result": "win",
					"@id": "https://api.chess.com/pub/player/lawnpawnfawn",
					"username": "lawnpawnfawn"
				  },
				  "black": {
					"rating": 711,
					"result": "resigned",
					"@id": "https://api.chess.com/pub/player/simdono",
					"username": "Simdono"
				  }
				},
				{
				  "url": "https://www.chess.com/live/game/4801408135",
				  "pgn": "[Event \"Live Chess\"]\n[Site \"Chess.com\"]\n[Date \"2020.05.02\"]\n[Round \"-\"]\n[White \"satotoshanto1\"]\n[Black \"lawnpawnfawn\"]\n[Result \"0-1\"]\n[ECO \"B07\"]\n[ECOUrl \"https://www.chess.com/openings/Pirc-Defense-Maroczy-Defense\"]\n[CurrentPosition \"8/4b3/K1k5/8/8/5r2/7n/1q6 w - -\"]\n[Timezone \"UTC\"]\n[UTCDate \"2020.05.02\"]\n[UTCTime \"15:48:23\"]\n[WhiteElo \"684\"]\n[BlackElo \"697\"]\n[TimeControl \"300\"]\n[Termination \"lawnpawnfawn won by resignation\"]\n[StartTime \"15:48:23\"]\n[EndDate \"2020.05.02\"]\n[EndTime \"15:57:47\"]\n[Link \"https://www.chess.com/live/game/4801408135\"]\n\n1. e4 {[%clk 0:04:59.9]} 1... e5 {[%clk 0:04:58.7]} 2. d4 {[%clk 0:04:58.5]} 2... d6 {[%clk 0:04:57.7]} 3. dxe5 {[%clk 0:04:57.3]} 3... dxe5 {[%clk 0:04:56.3]} 4. Qxd8+ {[%clk 0:04:56.4]} 4... Kxd8 {[%clk 0:04:50]} 5. Bd3 {[%clk 0:04:52.1]} 5... Nc6 {[%clk 0:04:48.2]} 6. Be3 {[%clk 0:04:51.5]} 6... Nb4 {[%clk 0:04:46.3]} 7. Nc3 {[%clk 0:04:46.7]} 7... Nf6 {[%clk 0:04:32.6]} 8. a3 {[%clk 0:04:43.2]} 8... c6 {[%clk 0:04:29]} 9. axb4 {[%clk 0:04:41.6]} 9... b5 {[%clk 0:04:27.7]} 10. O-O-O {[%clk 0:04:32.6]} 10... Bg4 {[%clk 0:04:24.3]} 11. f3 {[%clk 0:04:28.5]} 11... Bh5 {[%clk 0:04:22.8]} 12. Nh3 {[%clk 0:04:23]} 12... Bxb4 {[%clk 0:04:18.4]} 13. Na2 {[%clk 0:04:17.4]} 13... Bd6 {[%clk 0:04:08.8]} 14. b3 {[%clk 0:04:14.6]} 14... Ba3+ {[%clk 0:04:03.3]} 15. Kb1 {[%clk 0:04:06.3]} 15... Re8 {[%clk 0:03:54.8]} 16. Ng5 {[%clk 0:03:55.1]} 16... h6 {[%clk 0:03:48.7]} 17. g4 {[%clk 0:03:53.6]} 17... Bg6 {[%clk 0:03:45.8]} 18. Nh3 {[%clk 0:03:44.5]} 18... h5 {[%clk 0:03:41.1]} 19. gxh5 {[%clk 0:03:42]} 19... Bxh5 {[%clk 0:03:38.9]} 20. Rhf1 {[%clk 0:03:41.4]} 20... Rc8 {[%clk 0:03:33]} 21. f4 {[%clk 0:03:28.5]} 21... Bxd1 {[%clk 0:03:26.4]} 22. Rxd1 {[%clk 0:03:25.6]} 22... Ng4 {[%clk 0:03:20.7]} 23. Bxa7 {[%clk 0:03:15.6]} 23... Nxh2 {[%clk 0:03:14.4]} 24. Ng5 {[%clk 0:03:12.2]} 24... Re7 {[%clk 0:02:57.7]} 25. Bb6+ {[%clk 0:03:10.8]} 25... Ke8 {[%clk 0:02:47.6]} 26. Nh7 {[%clk 0:02:51.8]} 26... exf4 {[%clk 0:02:44.2]} 27. Rf1 {[%clk 0:02:39.6]} 27... f3 {[%clk 0:02:39.1]} 28. c4 {[%clk 0:02:31.7]} 28... bxc4 {[%clk 0:02:37.8]} 29. Bxc4 {[%clk 0:02:27.4]} 29... Rxe4 {[%clk 0:02:28.9]} 30. Ng5 {[%clk 0:02:19.7]} 30... Rg4 {[%clk 0:02:11.4]} 31. Bxf7+ {[%clk 0:02:17.4]} 31... Ke7 {[%clk 0:02:07.2]} 32. Ne6 {[%clk 0:02:04.7]} 32... Rg2 {[%clk 0:01:43.8]} 33. Re1 {[%clk 0:01:53.2]} 33... f2 {[%clk 0:01:34.3]} 34. Bxf2 {[%clk 0:01:44.1]} 34... Rxf2 {[%clk 0:01:32.3]} 35. Ng5+ {[%clk 0:01:41.5]} 35... Kd7 {[%clk 0:01:21.2]} 36. Be6+ {[%clk 0:01:37.2]} 36... Kc7 {[%clk 0:01:19]} 37. Nc3 {[%clk 0:01:28.4]} 37... Rf1 {[%clk 0:01:15.8]} 38. Bxc8 {[%clk 0:01:25.1]} 38... Rxe1+ {[%clk 0:01:09.5]} 39. Ka2 {[%clk 0:01:21.2]} 39... Be7 {[%clk 0:01:01.4]} 40. Ne6+ {[%clk 0:01:16.9]} 40... Kxc8 {[%clk 0:00:58.7]} 41. Na4 {[%clk 0:01:09]} 41... g6 {[%clk 0:00:56.7]} 42. Nb6+ {[%clk 0:01:08.2]} 42... Kb7 {[%clk 0:00:49.5]} 43. Nc4 {[%clk 0:00:56.6]} 43... Rxe6 {[%clk 0:00:46.8]} 44. b4 {[%clk 0:00:54.6]} 44... g5 {[%clk 0:00:44.9]} 45. Ka3 {[%clk 0:00:50.8]} 45... g4 {[%clk 0:00:43.9]} 46. Nd2 {[%clk 0:00:48.5]} 46... g3 {[%clk 0:00:41.6]} 47. Nf3 {[%clk 0:00:47.1]} 47... Re3+ {[%clk 0:00:36.5]} 48. Ka4 {[%clk 0:00:45.4]} 48... Rxf3 {[%clk 0:00:35.6]} 49. b5 {[%clk 0:00:44.6]} 49... g2 {[%clk 0:00:34.4]} 50. Ka5 {[%clk 0:00:41]} 50... g1=Q {[%clk 0:00:32.2]} 51. bxc6+ {[%clk 0:00:39.8]} 51... Kxc6 {[%clk 0:00:31.5]} 52. Ka6 {[%clk 0:00:38.5]} 52... Qb1 {[%clk 0:00:27.7]} 0-1",
				  "time_control": "300",
				  "end_time": 1588435067,
				  "rated": true,
				  "fen": "8/4b3/K1k5/8/8/5r2/7n/1q6 w - -",
				  "time_class": "blitz",
				  "rules": "chess",
				  "white": {
					"rating": 684,
					"result": "resigned",
					"@id": "https://api.chess.com/pub/player/satotoshanto1",
					"username": "satotoshanto1"
				  },
				  "black": {
					"rating": 697,
					"result": "win",
					"@id": "https://api.chess.com/pub/player/lawnpawnfawn",
					"username": "lawnpawnfawn"
				  }
				},
				{
				  "url": "https://www.chess.com/live/game/4801513679",
				  "pgn": "[Event \"Live Chess\"]\n[Site \"Chess.com\"]\n[Date \"2020.05.02\"]\n[Round \"-\"]\n[White \"Snoow27\"]\n[Black \"lawnpawnfawn\"]\n[Result \"0-1\"]\n[ECO \"C20\"]\n[ECOUrl \"https://www.chess.com/openings/Kings-Pawn-Opening-Wayward-Queen-Attack-2...Nc6-3.Bc4-Nh6\"]\n[CurrentPosition \"7r/2p5/p2p1k1b/4p1qK/P3Pp2/5P2/7R/8 w - -\"]\n[Timezone \"UTC\"]\n[UTCDate \"2020.05.02\"]\n[UTCTime \"16:13:59\"]\n[WhiteElo \"708\"]\n[BlackElo \"705\"]\n[TimeControl \"300\"]\n[Termination \"lawnpawnfawn won by checkmate\"]\n[StartTime \"16:13:59\"]\n[EndDate \"2020.05.02\"]\n[EndTime \"16:21:04\"]\n[Link \"https://www.chess.com/live/game/4801513679\"]\n\n1. e4 {[%clk 0:04:59.8]} 1... e5 {[%clk 0:04:58.8]} 2. Qh5 {[%clk 0:04:58.5]} 2... Nc6 {[%clk 0:04:51.2]} 3. Bc4 {[%clk 0:04:56.4]} 3... Nh6 {[%clk 0:04:43.2]} 4. Qxf7+ {[%clk 0:04:52.9]} 4... Nxf7 {[%clk 0:04:41.8]} 5. Bxf7+ {[%clk 0:04:50.9]} 5... Kxf7 {[%clk 0:04:40]} 6. f3 {[%clk 0:04:46.6]} 6... Nd4 {[%clk 0:04:34.7]} 7. Kd1 {[%clk 0:04:43.3]} 7... d6 {[%clk 0:04:23.8]} 8. c3 {[%clk 0:04:42.3]} 8... Nc6 {[%clk 0:04:18.9]} 9. Ne2 {[%clk 0:04:36.6]} 9... g5 {[%clk 0:04:15.6]} 10. g4 {[%clk 0:04:32.2]} 10... b5 {[%clk 0:04:05.2]} 11. b4 {[%clk 0:04:27.9]} 11... a6 {[%clk 0:04:00.2]} 12. Na3 {[%clk 0:04:26.8]} 12... Ke8 {[%clk 0:03:55.2]} 13. Ng3 {[%clk 0:04:25.6]} 13... Bg7 {[%clk 0:03:47.4]} 14. Nh5 {[%clk 0:04:20.4]} 14... Rg8 {[%clk 0:03:40.9]} 15. h3 {[%clk 0:04:13.3]} 15... h6 {[%clk 0:03:39.6]} 16. d3 {[%clk 0:04:08.6]} 16... Be6 {[%clk 0:03:31.7]} 17. c4 {[%clk 0:03:56.4]} 17... bxc4 {[%clk 0:03:25.8]} 18. dxc4 {[%clk 0:03:54.6]} 18... Nxb4 {[%clk 0:03:18.2]} 19. Bd2 {[%clk 0:03:40.4]} 19... Nd3 {[%clk 0:03:14.2]} 20. Ke2 {[%clk 0:03:35.8]} 20... Nf4+ {[%clk 0:03:09.7]} 21. Bxf4 {[%clk 0:03:31]} 21... gxf4 {[%clk 0:03:08.3]} 22. Rhd1 {[%clk 0:03:21.7]} 22... Qh4 {[%clk 0:02:57.5]} 23. Rf1 {[%clk 0:03:13]} 23... Qxh3 {[%clk 0:02:51.6]} 24. Nc2 {[%clk 0:03:08.8]} 24... Bxc4+ {[%clk 0:02:45.8]} 25. Kf2 {[%clk 0:03:04.6]} 25... Bxf1 {[%clk 0:02:42.2]} 26. Rxf1 {[%clk 0:03:02.7]} 26... Qh2+ {[%clk 0:02:34.6]} 27. Ke1 {[%clk 0:02:57.6]} 27... Qxc2 {[%clk 0:02:30.6]} 28. Rf2 {[%clk 0:02:56.7]} 28... Qb1+ {[%clk 0:02:21.8]} 29. Ke2 {[%clk 0:02:50.6]} 29... Qb2+ {[%clk 0:02:15.6]} 30. Kf1 {[%clk 0:02:49.5]} 30... Rb8 {[%clk 0:02:09.7]} 31. Kg2 {[%clk 0:02:48.1]} 31... Qc3 {[%clk 0:02:03.8]} 32. g5 {[%clk 0:02:41.7]} 32... hxg5 {[%clk 0:02:00.7]} 33. a4 {[%clk 0:02:36.2]} 33... Rh8 {[%clk 0:01:55.4]} 34. Kh3 {[%clk 0:02:30.6]} 34... Rxh5+ {[%clk 0:01:53.6]} 35. Kg4 {[%clk 0:02:29.2]} 35... Kf7 {[%clk 0:01:44.3]} 36. Kxh5 {[%clk 0:02:28]} 36... Rh8+ {[%clk 0:01:39.1]} 37. Kxg5 {[%clk 0:02:26.1]} 37... Bh6+ {[%clk 0:01:27.8]} 38. Kg4 {[%clk 0:02:22.7]} 38... Qe3 {[%clk 0:01:23.5]} 39. Rg2 {[%clk 0:02:20.5]} 39... Kf6 {[%clk 0:01:06.6]} 40. Rh2 {[%clk 0:02:18.5]} 40... Qg1+ {[%clk 0:01:03.3]} 41. Kh5 {[%clk 0:02:16.9]} 41... Qg5# {[%clk 0:00:58.8]} 0-1",
				  "time_control": "300",
				  "end_time": 1588436464,
				  "rated": true,
				  "fen": "7r/2p5/p2p1k1b/4p1qK/P3Pp2/5P2/7R/8 w - -",
				  "time_class": "blitz",
				  "rules": "chess",
				  "white": {
					"rating": 708,
					"result": "checkmated",
					"@id": "https://api.chess.com/pub/player/snoow27",
					"username": "Snoow27"
				  },
				  "black": {
					"rating": 705,
					"result": "win",
					"@id": "https://api.chess.com/pub/player/lawnpawnfawn",
					"username": "lawnpawnfawn"
				  }
				}
			]
		}
	},
	board: {
		current: {
			fen: "start",
			moveNumber: 0,
			sources: [],
			targets: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6"]
		},
		state: 'opening' || 'endgame' || 'game'
	},
	openings: {},
	endGames: {}
}

export default stateModel;
