const Routes = {
	toUsers: () => `/users`,
	toAlbums: (userId) => `/users/${userId}/albums`,
	toPhotos: (userId, albumId) => `/users/${userId}/albums/${albumId}`
}

export default Routes;
