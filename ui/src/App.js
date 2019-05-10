import React from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown'

class App extends React.Component {
	render() {
		const markdown = '# Heading'

		return (
			<div className="App">
				<ReactMarkdown source={markdown} />
			</div>
		);
	}
}

export default App;
