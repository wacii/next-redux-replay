import { applyMiddleware, createStore } from "redux";
import buildRecordActionMiddleware from "../src/buildRecordActionMiddleware";

const noop = () => {};

test("returned middleware records actions", () => {
  const { actions, middleware } = buildRecordActionMiddleware();
  const store = createStore(noop, undefined, applyMiddleware(middleware));
  expect(actions).toEqual([]);

  const newActions = [{ type: "SOME_ACTION" }, { type: "ANOTHER_ACTION" }];
  newActions.forEach(action => store.dispatch(action));
  expect(actions).toEqual(newActions);
});

test("middleware.stopRecording()", () => {
  const { actions, middleware } = buildRecordActionMiddleware();
  const store = createStore(noop, applyMiddleware(middleware));
  expect(actions).toEqual([]);

  middleware.stopRecording();
  const newActions = [{ type: "SOME_ACTION" }, { type: "ANOTHER_ACTION" }];
  newActions.forEach(action => store.dispatch(action));
  expect(actions).toEqual([]);
});
