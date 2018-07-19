import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Routes from '../../utils/routes.js';
import './Home.css';

class Home extends Component {
	renderTitle() {
		return <h1> 
				Welcome to the Photo Album App 
				<span role='img' aria-label="Star">✨</span>
			</h1>;
	}
	renderButton() {
		return <Link to={Routes.toUsers()}>
				<button>See Users</button>
			</Link>;
	}
	render() {
		return <div className='Home'>
		  	{this.renderTitle()}
		  	{this.renderButton()}
		  </div>;
	}
}

export default Home;