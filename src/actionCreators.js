import { TOGGLE_START_STOP_BUTTON } from './actions';

export function toggleStartStopButton(label) {
  return { type: TOGGLE_START_STOP_BUTTON, payload: label};
}