import React from 'react';
import {connect} from 'react-redux'

class SelectionTabs extends React.Component {

    handleClick = (event) => {
        console.log(event);
    }

    render() {

        return (
            <div id="selectionTabs">
                <h1>Recent Games for {this.props.player}:</h1>
                {this.props.games.map((game,i) => {
                    return (
                        <div className="gameChoiceWrapper" key={i}>
                            <p className="gameChoice">{game.white.username} vs {game.black.username} </p>
                            <span className="material-icons">navigate_next</span>
                        </div>
                    )
                })}
                <button onClick={() => this.handleClick}>CLICK ME!</button>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
	return ({
        games: state.games,
        player: state.playerData.username
    })
};

export default connect(mapStateToProps)(SelectionTabs)

