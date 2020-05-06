import React from 'react';
import {connect} from 'react-redux'
import Chessboard from 'chessboardjsx';

import {getPlayerData} from '../actions';

import {getDate} from '../utils/time';
import Board from './Board';

class App extends React.Component {

    componentDidMount() {
        this.props.getPlayerData();
    }

    handleClick = (event) => {
        console.log(event);
    }

	render() {

		return (
            <React.Fragment>
                <h1>Chess Analytics App</h1>
                <button onClick={() => this.handleClick}>CLICK ME!</button>
                <Board />
            </React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
        game: state.game,
        games: state.games,
        // joinedDate: getDate(state.game.joined)
    }
};

const mapDispatchToProps = {getPlayerData}

export default connect(mapStateToProps,mapDispatchToProps)(App)