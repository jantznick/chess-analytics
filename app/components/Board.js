import React from 'react';
import Chessboard from 'chessboardjsx';
import {connect} from 'react-redux'

import { roughSquare } from '../utils/customRough.js';

class Board extends React.Component {

    calcWidth = ({screenWidth, screenHeight}) => {
        if (typeof window !== 'undefined' && window.document.getElementById('board')) {
            return (screenWidth - (14.25 * parseFloat(getComputedStyle(document.querySelector('body'))['font-size'])))/2
        } else {
            return screenWidth*0.425
        }
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
                        position={this.props.fen}
                        calcWidth={this.calcWidth}
                        roughSquare={roughSquare}
                    />
                </div>
                <div id="boardControls">
                    <span className="material-icons">navigate_before</span>
                    <span className="material-icons">navigate_next</span>
                </div>
            </div>
        )
    }

}

Board.defaultProps = {
    showProbabilityBar: true
}

const mapStateToProps = ({game: pgn}) => {
	return pgn
};

export default connect(mapStateToProps)(Board)