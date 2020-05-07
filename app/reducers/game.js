const initialState = {
	"url": "https://www.chess.com/live/game/4812244308",
	"pgn": "[Event \"Live Chess\"]\n[Site \"Chess.com\"]\n[Date \"2020.05.05\"]\n[Round \"-\"]\n[White \"ashbacon\"]\n[Black \"lawnpawnfawn\"]\n[Result \"0-1\"]\n[ECO \"C00\"]\n[ECOUrl \"https://www.chess.com/openings/French-Defense-Knight-Variation-2...d5\"]\n[CurrentPosition \"3r4/1p5p/p3k3/3p1p2/R4P2/8/P1K2n1P/7r b - -\"]\n[Timezone \"UTC\"]\n[UTCDate \"2020.05.05\"]\n[UTCTime \"01:39:25\"]\n[WhiteElo \"718\"]\n[BlackElo \"719\"]\n[TimeControl \"300\"]\n[Termination \"lawnpawnfawn won by resignation\"]\n[StartTime \"01:39:25\"]\n[EndDate \"2020.05.05\"]\n[EndTime \"01:44:59\"]\n[Link \"https://www.chess.com/live/game/4812244308\"]\n\n1. Nf3 {[%clk 0:04:58.1]} 1... d5 {[%clk 0:04:56]} 2. e4 {[%clk 0:04:56.6]} 2... e6 {[%clk 0:04:54.8]} 3. Bb5+ {[%clk 0:04:53.9]} 3... c6 {[%clk 0:04:52.6]} 4. Ne5 {[%clk 0:04:51.4]} 4... cxb5 {[%clk 0:04:48.5]} 5. Qe2 {[%clk 0:04:44.7]} 5... a6 {[%clk 0:04:45.6]} 6. Na3 {[%clk 0:04:38.6]} 6... Bd7 {[%clk 0:04:29.8]} 7. Nxb5 {[%clk 0:04:33.5]} 7... Bxb5 {[%clk 0:04:23.2]} 8. Qe3 {[%clk 0:04:24.9]} 8... f6 {[%clk 0:04:18.8]} 9. Nf7 {[%clk 0:04:20.3]} 9... Kxf7 {[%clk 0:04:17]} 10. d4 {[%clk 0:04:16.8]} 10... Nc6 {[%clk 0:04:04]} 11. Bd2 {[%clk 0:04:15.1]} 11... g5 {[%clk 0:03:57.9]} 12. O-O-O {[%clk 0:04:11.2]} 12... Bh6 {[%clk 0:03:53.2]} 13. exd5 {[%clk 0:04:09.9]} 13... exd5 {[%clk 0:03:48.1]} 14. Qc3 {[%clk 0:03:54.6]} 14... Rc8 {[%clk 0:03:38.5]} 15. Rde1 {[%clk 0:03:51.6]} 15... f5 {[%clk 0:03:27.6]} 16. Re5 {[%clk 0:03:47.7]} 16... Nxe5 {[%clk 0:03:26]} 17. dxe5 {[%clk 0:03:46.2]} 17... g4 {[%clk 0:03:19]} 18. e6+ {[%clk 0:03:38.6]} 18... Kxe6 {[%clk 0:03:16.9]} 19. Qe3+ {[%clk 0:03:36.6]} 19... Bxe3 {[%clk 0:03:14.6]} 20. Bxe3 {[%clk 0:03:34.7]} 20... Nf6 {[%clk 0:03:01.4]} 21. Rd1 {[%clk 0:03:33.3]} 21... Ba4 {[%clk 0:02:46.7]} 22. Rd4 {[%clk 0:03:28.4]} 22... Rxc2+ {[%clk 0:02:40.3]} 23. Kd1 {[%clk 0:03:18]} 23... Rxb2+ {[%clk 0:02:35.5]} 24. Rxa4 {[%clk 0:03:12.7]} 24... Rb1+ {[%clk 0:02:25.1]} 25. Kc2 {[%clk 0:03:09]} 25... Rh1 {[%clk 0:02:08.9]} 26. Bg5 {[%clk 0:03:07.2]} 26... Ne4 {[%clk 0:02:02.3]} 27. Bxd8 {[%clk 0:03:05.7]} 27... Rxd8 {[%clk 0:02:00.1]} 28. f3 {[%clk 0:02:55.6]} 28... gxf3 {[%clk 0:01:57.2]} 29. gxf3 {[%clk 0:02:53.4]} 29... Nf2 {[%clk 0:01:51.8]} 30. f4 {[%clk 0:02:51.6]} 0-1",
	"time_control": "300",
	"end_time": 1588643099,
	"rated": true,
	"fen": "3r4/1p5p/p3k3/3p1p2/R4P2/8/P1K2n1P/7r b - -",
	"time_class": "blitz",
	"rules": "chess",
	"white": {
	  "rating": 718,
	  "result": "resigned",
	  "@id": "https://api.chess.com/pub/player/ashbacon",
	  "username": "ashbacon"
	},
	"black": {
	  "rating": 719,
	  "result": "win",
	  "@id": "https://api.chess.com/pub/player/lawnpawnfawn",
	  "username": "lawnpawnfawn"
	}
};

const game = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default game