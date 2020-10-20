import { put, call } from 'redux-saga/effects';
import { fetchEquipments } from '../../api/functions/equipments.service';

export function* getEquipments() {
    try {
      const response = yield call(fetchEquipments);
  
      yield put({ type: 'SUCCESS_GET_EQUIPMENTS', payload: { data: response } });
    } catch (err) {
      yield put({ type: 'FAILURE_GET_EQUIPMENTS' });
    }
  }