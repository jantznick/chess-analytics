import React from 'react';
import {connect} from 'react-redux'

import Board from './Board';
import openings from '../utils/openings';
import Line from './Line';
import Variations from './Variations';

class Pavlov extends React.Component {

	render() {

		return (
            <React.Fragment>
                <div id="header">
                    <h1>Chess Pavlov Trainer</h1>
                </div>

                <div id="left">
                    <h3>Select an Opening:</h3>
                    {openings.map((opening,i) => {
                        while (i < 10) {
                            return <p key={i}>{opening.name}</p>
                        }
                    })}
                </div>

                <div id="center">
                    <Board
                        showProbabilityBar={false}
                    />
                </div>

                <div id="right">
                    <Line />
                    <Variations />
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