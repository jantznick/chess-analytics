import React from 'react';
import {connect} from 'react-redux'

import Board from './Board';

class Pavlov extends React.Component {

	render() {

		return (
            <React.Fragment>
                <div id="header">
                    <h1>Chess Pavlov Trainer</h1>
                </div>

                <div id="left">
                </div>

                <div id="center">
                    <Board
                        showProbabilityBar={false}
                    />
                </div>

                <div id="right">
                </div>
            </React.Fragment>
		)
	}
}

const mapStateToProps = ({game, games, playerData, playerStats}) => {
	return {
        game,
        games,
        playerData,
        playerStats
    }
};

export default connect(mapStateToProps)(Pavlov)