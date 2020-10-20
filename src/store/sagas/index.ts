import { takeLatest} from 'redux-saga/effects';

import { getEquipments } from './equipments.sagas';

export default function* root() {
  yield [
    takeLatest('REQUEST_EQUIPMENT', getEquipments),
  ];
}