import React from 'react';
import {connect} from 'react-redux'

import {selectContinuation} from '../actions'

class Variations extends React.Component {

    render() {

        return (
            <div id="variationSelectionTabs">
                <h1>Variations Section</h1>
                {this.props.opening.continuations &&
                    this.props.opening.continuations.map((cont,i) => {
                        return (
                            <div onClick={() => this.props.selectContinuation(cont)} className="variationSelectionWrapper" key={i}>
                                <p>{cont.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        opening: state.opening
    })
};

const mapDispatchToProps = {selectContinuation};

export default connect(mapStateToProps, mapDispatchToProps)(Variations)