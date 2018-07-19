import React, { Component } from 'react';
import _ from 'lodash';

import Utils from '../../utils/api.js';
import './Photos.css'

class Photos extends Component {
  constructor() {
		super();
		this.state = { photos: [] };
	}
	componentWillMount() {
		const { albumId } = this.props.match.params;
		Utils.getPhotos(albumId)
			.then(response => {
				this.setState({ photos: response.data});
			})
			.catch(error => {
				alert('error', error);
			});
	}
	renderPhoto(photo, index) {
		return <div className='PhotoTile' key={index}>
				<img alt={`img${index}`} src={photo.thumbnailUrl} />
				<p>{photo.title}</p>
			</div>;
	}
	renderPhotos() {
		return _.map(this.state.photos, (photo, index) => {
			return this.renderPhoto(photo, index);
		});
	}
	render() {
		return <div className='Photos'> 
				<h1>Photos <span role='img' aria-label="Photo">🖼</span> </h1>
				<div className='PhotoContainer'>
					{this.renderPhotos()}
				</div>
			</div>;
	}
}

export default Photos;