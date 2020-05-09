import React from 'react';
import {connect} from 'react-redux'

import {selectOpening} from '../actions';

class Line extends React.Component {

    render() {

        return (
            <div id="line">
                <h1>Line Section</h1>
                {this.props.opening.name &&
                    <p>{this.props.opening.name} - {this.props.opening.continuation ? this.props.opening.continuation : 'Select a Continuation!'}</p>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        opening: state.opening
    })
}

export default connect(mapStateToProps)(Line);