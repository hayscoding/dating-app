import React from 'react';
import {render} from 'react-dom';

var App = React.createClass({
	render () {
		return (<h1>Dating App</h1>);
	}
});

render(<App />, document.getElementById('container'));