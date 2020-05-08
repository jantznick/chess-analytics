import React from 'react';
import {Link} from 'react-router-dom';

class App extends React.Component {

	render() {

		return (
            <React.Fragment>
                <div id="header">
                    <h1>Pavlov Chess</h1>
                </div>
                <div className="links">
                    <Link to="/learn">Chess.com Analytics</Link>
                    <Link to="/pavlov">Pavlov Trainer</Link>
                </div>
            </React.Fragment>
		)
	}
}

export default App