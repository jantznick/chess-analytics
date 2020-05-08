import React from 'react';
import {connect} from 'react-redux';

class GameViewer extends React.Component {

    render() {

        return (
            <div id="gameViewer">
                <h1>Game Viewer</h1>
                {this.props.game.url &&
                    <React.Fragment>
                        <p className="gameType">{this.props.game.time_class}</p>
                        <p>{this.props.game.white.username}({this.props.game.white.rating}) vs {this.props.game.black.username}({this.props.game.black.rating})</p>
                        <p>{this.props.game.pgn}</p>
                    </React.Fragment>
                }
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
