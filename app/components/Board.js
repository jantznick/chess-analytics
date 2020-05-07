import React from 'react';
import Chessboard from 'chessboardjsx';
import rough from 'roughjs';
import {connect} from 'react-redux'


const roughSquare = ({ squareElement, squareWidth }) => {
    let rc = rough.svg(squareElement);
    const chessSquare = rc.rectangle(0, 0, squareWidth, squareWidth, {
        roughness: 0.8,
        fill: '#b58863',
        bowing: 2
    });
    squareElement.appendChild(chessSquare);
};

class Board extends React.Component {

    render() {

        return (
            <div id="board">
                <div id="boardContainer">
                    <div id="gameProbabilityBar">
                        <div id="whiteProbability">0.75</div>
                        <div id="blackProbability">-1.25</div>
                    </div>
                    <Chessboard
                        position={this.props.fen}
                        // roughSquare={roughSquare}
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

const mapStateToProps = ({game: pgn}) => {
	return pgn
};

export default connect(mapStateToProps)(Board)