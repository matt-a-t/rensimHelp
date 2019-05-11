import React from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown'

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			general: ''
		}
	}

	componentWillMount() {
		fetch('../General.md').then(res => res.text()).then(text => this.setState({ general: text }))
	}
	
	render() {
		return (
			<div className="App">
				<nav>
					<li><a href='#begging'>General</a></li>
				</nav>
				<div id='general'>
					<ReactMarkdown 
						source={this.state.general} />
				</div>
			</div>
		);
	}
}

export default App;
