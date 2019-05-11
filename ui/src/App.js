import React from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown'

import Article from './Article'

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			page: 'general',
			general: '',
			church: '',
			combat: '',
			courtOffices: '',
			merchantry: '',
			navy: '',
			skills: '',
			townManagement: ''
		}

		this.setPage = this.setPage.bind(this)
	}

	componentWillMount() {
		fetch('./General.md').then(res => res.text()).then(text => this.setState({ general: text }))
		fetch('./Church.md').then(res => res.text()).then(text => this.setState({ church: text }))
		fetch('./Combat.md').then(res => res.text()).then(text => this.setState({ combat: text }))
		fetch('./Court-Offices.md').then(res => res.text()).then(text => this.setState({ courtOffices: text }))
		fetch('./Merchantry.md').then(res => res.text()).then(text => this.setState({ merchantry: text }))
		fetch('./Navy.md').then(res => res.text()).then(text => this.setState({ navy: text }))
		fetch('./Skills.md').then(res => res.text()).then(text => this.setState({ skills: text }))
		fetch('./Town-Management.md').then(res => res.text()).then(text => this.setState({ townManagement: text }))
	}
	
	setPage(newPage) {
		this.setState({ page: newPage })
	}

	render() {
		const { page, general, church, combat, courtOffices, merchantry, navy, skills, townManagement } = this.state;

		return (
			<div className="App">
				<nav>
					<button onClick={() => this.setPage('general')}>General</button>
					<button onClick={() => this.setPage('church')}>Church</button>
					<button onClick={() => this.setPage('combat')}>Combat</button>
					<button onClick={() => this.setPage('courtOffices')}>Court Offices</button>
					<button onClick={() => this.setPage('merchantry')}>Merchantry</button>
					<button onClick={() => this.setPage('navy')}>Navy</button>
					<button onClick={() => this.setPage('skills')}>Skills</button>
					<button onClick={() => this.setPage('townManagement')}>Town Management</button>
				</nav>

				{ page === 'general' && <Article id='general' source={ general } /> }
				{ page === 'church' && <Article id='church' source={ church } /> }
				{ page === 'combat' && <Article id='combat' source={combat} /> }
				{ page === 'courtOffices' && <Article id='courtOffices' source={courtOffices} /> }
				{ page === 'merchantry' && <Article id='merchantry' source={merchantry} /> }
				{ page === 'navy' && <Article id='navy' source={navy} /> }
				{ page === 'skills' && <Article id='skills' source={skills} /> }
				{ page === 'townManagement' && <Article id='townManagement' source={townManagement} /> }
			</div>
		);
	}
}

export default App;
