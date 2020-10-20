import api from ".."
import { endpointsCreator } from "../endpoints"

export const fetchEquipments = async () => {
    const endpoint = endpointsCreator().EQUIPMENTS.EPI
    const response = await api.get(endpoint)
    console.log(response)
}