import React from 'react';
import {connect} from 'react-redux'

import {selectOpening} from '../actions';

import Board from './Board';
import openings from '../utils/openings';
import Line from './Line';
import Variations from './Variations';

class Pavlov extends React.Component {

	openingSelected = (opening) => {
		this.props.selectOpening(opening)
	}

	render() {

		return (
			<React.Fragment>
				<div id="header">
					<h1>Chess Pavlov Trainer</h1>
				</div>

				<div id="left">
					<div id="openingSelectionTabs">
						<h3>Select an Opening:</h3>
						{openings.map((opening,i) => {
							while (i < 10) {
								return (
									<div className="openingSelectionWrapper" key={i} onClick={() => this.openingSelected(opening)}>
										<p>{opening.name}</p>
										<span className="material-icons">navigate_next</span>
									</div>
								)
							}
						})}
					</div>
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

const mapDispatchToProps = {selectOpening};

export default connect(mapStateToProps,mapDispatchToProps)(Pavlov)