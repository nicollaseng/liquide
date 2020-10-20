import axios from 'axios'

const baseURL = 'https://my.api.mockaroo.com'

const api = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json; charset=utf-8'
	}
})

api.interceptors.request.use(
	async config => {
		return config
	},
	response => Promise.reject(response)
)

export default api
