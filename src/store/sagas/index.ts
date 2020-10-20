import { takeEvery, all } from 'redux-saga/effects';

import { getEquipments } from './equipments.sagas';

export default function* root() {
  yield all([
    takeEvery('REQUEST_EQUIPMENT', getEquipments),
  ]);
};