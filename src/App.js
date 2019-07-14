import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.components';
class App extends React.Component{
	constructor(){
		super();
		this.state = {
			monsters: [],
			searchField: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (ev) => {
		this.setState({ searchField: ev.target.value });
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ monsters: users }));
	}

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		)
		return (
			<div>
				<h1>Montsters List</h1>
				<SearchBox placeholder="Search monsters" handleChange={this.handleChange}/>
				<CardList monsters={filteredMonsters}/>
			</div>
		);
	}
	
}

export default App;
