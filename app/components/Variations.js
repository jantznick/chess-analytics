import React from 'react';
import {connect} from 'react-redux'

class Variations extends React.Component {

    render() {

        return (
            <div id="variationSelectionTabs">
                <h1>Variations Section</h1>
                {this.props.opening.continuations &&
                    this.props.opening.continuations.map((cont,i) => {
                        return (
                            <div className="variationSelectionWrapper">
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
}

export default connect(mapStateToProps)(Variations)