import axios from 'axios';

const Utils = {
	getUsers: () => {
		return axios.get('https://jsonplaceholder.typicode.com/users');
	},
	getAlbums: (userId) => {
		return axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
	},
	getPhotos: (albumId) => {
		return axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);	
	}
}

export default Utils;
