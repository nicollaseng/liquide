import {combineReducers} from 'redux';

import equipments from './equipments.reducer'

const rootReducer = combineReducers({
  equipments
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>