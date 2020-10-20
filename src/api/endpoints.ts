export const endpointsCreator = (...args: string[]) => {
	const endpoints = {
			EQUIPMENTS: {
					/**
					 * @method: GET
					 * */
					EPI: '/epi',
			},
	}
	return endpoints
}
	