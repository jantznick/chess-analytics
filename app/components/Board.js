import React from 'react';
import Chessboard from 'chessboardjsx';
import {connect} from 'react-redux'
import Chess from 'chess.js'

import { roughSquare } from '../utils/customRough.js';

class Board extends React.Component {

    state = {
        fen: 'start',
        index: 0
    }

    componentDidMount() {
        this.game = new Chess();
    }

    calcWidth = ({screenWidth, screenHeight}) => {
        if (typeof window !== 'undefined' && window.document.getElementById('board')) {
            return (screenWidth - (14.25 * parseFloat(getComputedStyle(document.querySelector('body'))['font-size'])))/2
        } else {
            return screenWidth*0.425
        }
    }

    nextMove = () => {
        console.log(`Moving piece: ${this.props.game.moves[this.state.index]}`)
        this.game.move(this.props.game.moves[this.state.index])
        this.setState({
            fen: this.game.fen(),
            index: this.state.index + 1
        })
    }

    previousMove = () => {
        console.log(this.game.fen())
        this.game.undo()
        console.log(this.game.fen())
        this.setState({
            fen: this.game.fen(),
            index: this.state.index - 1
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
                        position={this.state.fen}
                        calcWidth={this.calcWidth}
                        roughSquare={roughSquare}
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

export default connect(mapStateToProps)(Board)