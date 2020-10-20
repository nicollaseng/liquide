import { SUCCESS_GET_EQUIPMENTS, FAILURE_GET_EQUIPMENTS } from '../constants';

const initialState = {
  epi: [],
  error: false
};
  
export default function(state = initialState, action: any) {
  switch (action.type) {
    case SUCCESS_GET_EQUIPMENTS:
      return {...initialState, epi: action.payload};
    case FAILURE_GET_EQUIPMENTS:
      return {...initialState, error: true };
    default:
      return state;
  };
};