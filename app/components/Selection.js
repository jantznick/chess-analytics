import React from 'react';
import {connect} from 'react-redux'

import {
    selectPlayer,
    getPlayerData,
    getGameData
} from '../actions';

class SelectionTabs extends React.Component {

    state = {
        playerSearch: ''
    }

    handlePlayerSearchInput = (event) => {
        this.setState({
            playerSearch: event.target.value
        })
    }

    handlePlayerSearchSubmit = (event) => {
        event.preventDefault()
        this.props.getPlayerData(this.state.playerSearch)
        this.props.getGameData(this.state.playerSearch)
        this.setState({
            playerSearch: ''
        })
    }

    resetPlayer = () => {
        this.props.selectPlayer({})
    }

    renderPlayerSearch = () => {
        return (
            <form onSubmit={this.handlePlayerSearchSubmit}>
                <h3>Search for a player...</h3>
                <input
                    type="text"
                    name="playerSearch"
                    id="playerSearch"
                    value={this.state.playerSearch}
                    onChange={this.handlePlayerSearchInput}
                />
                <button>
                    <span className="material-icons">search</span>
                </button>
            </form>
        )
    }

    render() {

        return (
            <div id="selectionTabs">
                {this.props.player ?
                    <div className="selectionTabs-playerHeader">
                        <h3>Recent Games for {this.props.player}:</h3>
                    </div>
                    :
                    this.renderPlayerSearch()
                }
                {this.props.player &&
                    this.props.games.map((game,i) => {
                        return (
                            <div className="gameChoiceWrapper" key={i}>
                                <p className="gameChoice">{game.white.username} vs {game.black.username} </p>
                                <span className="material-icons">navigate_next</span>
                            </div>
                        )
                    })
                }
                {this.props.player &&
                    <button onClick={this.resetPlayer} className="resetPlayerButton">Reset Player</button>
                }
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

const mapDispatchToProps = {getGameData, getPlayerData, selectPlayer}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionTabs)

