import React from 'react';
import {connect} from 'react-redux'

import {selectOpening, selectClosing} from '../actions';

import Board from './Board';
import openings from '../utils/openings';
import closings from '../utils/closings';
import Line from './Line';
import Variations from './Variations';

class Pavlov extends React.Component {

	openingSelected = (opening) => {
		this.props.selectOpening(opening);
	}

	closingSelected = (closing) => {
		this.props.selectClosing(closing);
	}

	render() {

		return (
			<React.Fragment>
				<div id="header">
					<h1>Chess Pavlov Trainer</h1>
				</div>

				<div id="left">
					<div id="openingSelectionTabs">
						<h3>Openings:</h3>
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
					<div id="closingSelectionTabs">
						<h3>Endings:</h3>
						{closings.map((opening,i) => {
							while (i < 10) {
								return (
									<div className="openingSelectionWrapper" key={i} onClick={() => this.closingSelected(opening)}>
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

const mapStateToProps = (state) => {
	return {
		game: state.game,
		games: state.games,
		playerData: state.playerData,
		playerStats: state.playerStats,
		state: state
	}
};

const mapDispatchToProps = {selectOpening, selectClosing};

export default connect(mapStateToProps,mapDispatchToProps)(Pavlov)