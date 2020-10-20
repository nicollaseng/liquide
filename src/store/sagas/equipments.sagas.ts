import { put, call } from 'redux-saga/effects';
import { fetchEquipments } from '../../api/services/equipments.service';

export function* getEquipments() {
	try {
		const response = yield call(fetchEquipments);

		yield put({ type: 'SUCCESS_GET_EQUIPMENTS', payload: response });
	} catch (err) {
		console.log('[ERROR/SAGAS] GET EQUIPMENTS:', err)
		yield put({ type: 'FAILURE_GET_EQUIPMENTS' });
	}
}