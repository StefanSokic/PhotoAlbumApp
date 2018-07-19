import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import Routes from '../../utils/routes.js';
import Utils from '../../utils/api.js';

class Users extends Component {
	constructor() {
		super();
		this.state = { users: [] };
	}
	componentWillMount() {
		Utils.getUsers()
			.then(response => {
				this.setState({ users: response.data});
			})
			.catch(error => {
				alert('error', error);
			});
	}
	renderUsers() {
		return _.map(this.state.users, (user, index) => {
			return this.renderUser(user, index);
		});
	}
	renderUser(user, index) {
		return <Link key={index} to={Routes.toAlbums(user.id)}>
				<p>{user.name}</p>
			</Link>;
	}
	render() {
		return <div> 
				<h1>Users <span role='img' aria-label="User">👩🏾‍</span> </h1>
				{this.renderUsers()}
			</div>;
	}
}

export default Users;
