// creating reducer

import {TOGGLE_START_STOP_BUTTON} from './actions';

const DEFAULT_STATE = {
      currentHr: 0,
      currentMin: 0,
      currentSec: 0,
      currentMillisec: 0,
      intervalId: '',
      startStopButton: 'Start',
}

const toggleStartStopButton = (state, action) => Object.assign({}, state, { startStopButton: action.payload }); 

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_START_STOP_BUTTON:
      return toggleStartStopButton(state, action);
    default:
      return state;
  }
};

export default rootReducer;