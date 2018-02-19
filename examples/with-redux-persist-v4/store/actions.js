import { ADD, READY, TICK } from "./constants";

export const addCount = () => dispatch => {
  return dispatch({ type: ADD });
};

export const serverRenderClock = isServer => dispatch => {
  return dispatch({ type: TICK, light: !isServer, ts: Date.now() });
};

export const startClock = () => dispatch => {
  return setInterval(
    () => dispatch({ type: TICK, light: true, ts: Date.now() }),
    800
  );
};

export const ready = () => ({ type: READY });
