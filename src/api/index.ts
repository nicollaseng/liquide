import axios from 'axios';
import Constants from 'expo-constants';

const baseURL = 'https://my.api.mockaroo.com';

const api = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json; charset=utf-8'
	}
});

api.interceptors.request.use(
	async config => {
		const { API_KEY } = Constants.manifest.extra;
		const url = config.url ?? '';

		config.url = baseURL + url + `?key=${API_KEY}`;

		return config;
	},
	response => Promise.reject(response)
);

export default api;
