import React from 'react';
import {connect} from 'react-redux'

import {getPlayerData} from '../actions';

import {getDate} from '../utils/time';

import Board from './Board';
import GameViewer from './GameViewer';
import SelectionTabs from './Selection';
import Analysis from './Analysis';

class Analytics extends React.Component {

	render() {

		return (
            <React.Fragment>
                <div id="header">
                    <h1>Chess.com Game Analysis</h1>
                </div>

                <div id="left">
                    <SelectionTabs/>
                </div>

                <div id="center">
                    <Board />
                </div>

                <div id="right">
                    <GameViewer />
                    <Analysis />
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

const mapDispatchToProps = {getPlayerData}

export default connect(mapStateToProps,mapDispatchToProps)(Analytics)