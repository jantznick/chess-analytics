import React from 'react';
import Chessboard from 'chessboardjsx';
import {connect} from 'react-redux'
import Chess from 'chess.js'

import { roughSquare } from '../utils/customRough.js';

import {makeMove} from '../actions';
import stateModel from '../reducers/model.js';

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
		const {
			board,
			makeMove
		} = this.props;

		// Hacky fix to reset 'this.game' from chess.js if user selects new opening mid play
		if (board.current.moveNumber == 0) {
			this.game = new Chess();
		}
		let move;
		(board.current.sources ?
		move = {
			from: board.current.sources[board.current.moveNumber],
			to: board.current.targets[board.current.moveNumber]
		}
		:
		move = board.current.targets[board.current.moveNumber]
		)
		this.game.move(move)
		makeMove({
			fen: this.game.fen(),
			moveNumber: board.current.moveNumber + 1
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
				moveNumber: this.props.board.current.moveNumber + 1,
				moveTarget: targetSquare,
				moveSource: sourceSquare
			})
		}
	}

	previousMove = () => {
		this.game.undo();
		this.props.makeMove({
			fen: this.game.fen(),
			moveNumber: this.props.board.current.moveNumber - 1
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
						position={this.props.board.current.fen}
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

const mapStateToProps = ({board}) => ({board});

const mapDispatchToProps = {makeMove};

export default connect(mapStateToProps, mapDispatchToProps)(Board)