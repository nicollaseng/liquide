import api from "..";
import { endpointsCreator } from "../endpoints";

export const fetchEquipments = async () => {
	const endpoint = endpointsCreator().EQUIPMENTS.EPI;
	
	try {
		const response = await api.get(endpoint)
		if (response.status === 200) {
				return response.data;
		}
	} catch (error) {
		console.log(error);
	}
}