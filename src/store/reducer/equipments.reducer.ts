import { SUCCESS_GET_EQUIPMENTS, FAILURE_GET_EQUIPMENTS } from '../constants';

  const initialState = {
    equipments: [],
    error: false
  };
  
  export default function(state = initialState, action: any) {
    switch (action.type) {
      case SUCCESS_GET_EQUIPMENTS:
        return {...initialState, equipments: action.payload};
      case FAILURE_GET_EQUIPMENTS:
        return {...initialState, error: true };
      default:
        return state;
    }
  }