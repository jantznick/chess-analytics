import React from 'react';
import {connect} from 'react-redux';

class GameViewer extends React.Component {

    render() {

        return (
            <div id="gameViewer">
                <h1>Game Viewer</h1>
                <p className="gameType">{this.props.game.time_class}</p>
                <p>{this.props.game.white.username}({this.props.game.white.rating}) vs {this.props.game.black.username}({this.props.game.black.rating})</p>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
	return ({
        game: state.game
    })
};

export default connect(mapStateToProps)(GameViewer)

// const initialState = {
// 	"url": "https://www.chess.com/live/game/4812244308",
// 	"pgn":
// 	"time_control": "300",
// 	"end_time": 1588643099,
// 	"rated": true,
// 	"fen": "3r4/1p5p/p3k3/3p1p2/R4P2/8/P1K2n1P/7r b - -",
// 	"time_class": "blitz",
// 	"rules": "chess",
// 	"white": {
// 	  "rating": 718,
// 	  "result": "resigned",
// 	  "@id": "https://api.chess.com/pub/player/ashbacon",
// 	  "username": "ashbacon"
// 	},
// 	"black": {
// 	  "rating": 719,
// 	  "result": "win",
// 	  "@id": "https://api.chess.com/pub/player/lawnpawnfawn",
// 	  "username": "lawnpawnfawn"
// 	}
// };