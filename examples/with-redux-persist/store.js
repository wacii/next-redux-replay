import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
}

export const actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK'
}

// REDUCERS
export const rootReducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, { lastUpdate: action.ts, light: !!action.light })
    case actionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    default: return state
  }
}

// ACTIONS
export const serverRenderClock = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = () => dispatch => {
  return setInterval(() => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }), 800)
}

export const addCount = () => dispatch => {
  return dispatch({ type: actionTypes.ADD })
}

// STORE FACTORY
const config = {
  key: 'root',
  storage
}
const reducer = persistReducer(config, rootReducer)

export const makeStore = middleware => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, middleware))
  )
}
