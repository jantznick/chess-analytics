import React from 'react';
import Chessboard from 'chessboardjsx';
import {connect} from 'react-redux'
import Chess from 'chess.js'

import { roughSquare } from '../utils/customRough.js';

import {makeMove} from '../actions';

class Board extends React.Component {

	game = new Chess();

	calcWidth = ({screenWidth, screenHeight}) => {
		if (typeof window !== 'undefined' && window.document.getElementById('board')) {
			return (screenWidth - (14.25 * parseFloat(getComputedStyle(document.querySelector('body'))['font-size'])))/2
		} else {
			return screenWidth * 0.425
		}
	}

	nextMove = () => {
		// Hacky fix to reset 'this.game' from chess.js if user selects new opening mid play
		if (this.props.game.moveNumber == 0) {
			this.game = new Chess();
		}
		let move;
		(this.props.game.sources ?
		move = {
			from: this.props.game.sources[this.props.game.moveNumber],
			to: this.props.game.targets[this.props.game.moveNumber]
		}
		:
		move = this.props.game.targets[this.props.game.moveNumber]
		)
		this.game.move(move)
		this.props.makeMove({
			fen: this.game.fen(),
			moveNumber: this.props.game.moveNumber + 1
		})
	}

	onDrop = ({ sourceSquare, targetSquare }) => {
		let move = this.game.move({
			from: sourceSquare,
			to: targetSquare
		});
		if (move !== null) {
			this.props.makeMove({
				fen: this.game.fen(),
				moveNumber: this.props.game.moveNumber + 1,
				moveTarget: targetSquare,
				moveSource: sourceSquare
			})
		}
	}

	previousMove = () => {
		this.game.undo();
		this.props.makeMove({
			fen: this.game.fen(),
			moveNumber: this.props.game.moveNumber - 1
		})
	}

	render() {

		return (
			<div id="board">
				<div id="boardContainer">
					{this.props.showProbabilityBar &&
						<div id="gameProbabilityBar">
							<div id="whiteProbability">0.75</div>
							<div id="blackProbability">-1.25</div>
						</div>
					}
					<Chessboard
						position={this.props.game.fen}
						calcWidth={this.calcWidth}
						roughSquare={roughSquare}
						transitionDuration={200}
						undo={true}
						onDrop={this.onDrop}
					/>
				</div>
				<div id="boardControls">
					<span className="material-icons" onClick={this.previousMove}>navigate_before</span>
					<span className="material-icons" onClick={this.nextMove}>navigate_next</span>
				</div>
			</div>
		)
	}

}

Board.defaultProps = {
	showProbabilityBar: true
}

const mapStateToProps = ({game}) => {
	return ({
		game
	})
};

const mapDispatchToProps = {makeMove};

export default connect(mapStateToProps, mapDispatchToProps)(Board)