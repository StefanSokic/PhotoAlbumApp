import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import Routes from '../../utils/routes.js';
import Utils from '../../utils/api.js';

class Albums extends Component {
  constructor() {
		super();
		this.state = { albums: [] };
	}
	componentWillMount() {
		const { userId } = this.props.match.params;
		Utils.getAlbums(userId)
			.then(response => {
				this.setState({ albums: response.data});
			})
			.catch(error => {
				alert('error', error);
			})
	}
	renderAlbum(album, index) {
		return <Link key={index} to={Routes.toPhotos(album.userId, album.id)}>
				<p>{album.title}</p>
			</Link>;
	}
	renderAlbums() {
		return _.map(this.state.albums, (album, index) => {
			return this.renderAlbum(album, index);
		});
	}
	render() {
		return <div> 
				<h1>Albums <span role='img' aria-label="Camera">📸</span> </h1>
				{this.renderAlbums()}
			</div>;
	}
}

export default Albums;