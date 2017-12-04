/**
 * @jest-environment node
 */

import { shallow } from "enzyme";
import { createElement } from "react";
import { applyMiddleware, createStore } from "redux";
import nextReduxReplay from "../src/nextReduxReplay";

function MyComponent(props) {
  return createElement("div", props);
}

function setup() {
  const actions = [{ type: "SOME_ACTION" }, { type: "OTHER_ACTION" }];
  const results = { some: "data" };

  return {
    actions,
    results,
    component(props) {
      return createElement(MyComponent, props);
    },
    makeStore: jest.fn(middleware =>
      createStore(() => ({}), undefined, applyMiddleware(middleware))
    ),
    initStore({ store }) {
      actions.forEach(action => store.dispatch(action));
      return Promise.resolve(results);
    }
  };
}

test("getInitialProps() returns expected actions", () => {
  const { makeStore, initStore, actions, component } = setup();
  const { getInitialProps } = nextReduxReplay(makeStore, initStore)(component);

  expect.assertions(1);
  return getInitialProps().then(value =>
    expect(value).toMatchObject({ actions })
  );
});

test("renders component with props from `initStore()`", async () => {
  const { makeStore, initStore, results, component } = setup();
  const wrappedComponent = nextReduxReplay(makeStore, initStore)(component);
  const initialProps = await wrappedComponent.getInitialProps();

  const element = shallow(createElement(wrappedComponent, initialProps));
  expect(element.dive().props()).toMatchObject(results);
});

test("renders provided element with expected props", () => {
  const { makeStore, initStore, component } = setup();
  const wrappedComponent = nextReduxReplay(makeStore, initStore)(component);
  wrappedComponent.getInitialProps();
  const props = { a: "a", b: "b" };

  const element = shallow(createElement(wrappedComponent, props));
  expect(element.dive().props()).toMatchObject(props);
});

describe("when `getInitialProps()` not called", () => {
  test("throws error when actions not provided", () => {
    const { makeStore, initStore, component } = setup();
    const wrappedComponent = nextReduxReplay(makeStore, initStore)(component);
    expect(() => shallow(createElement(wrappedComponent))).toThrow();
  });

  test("doesn't throw if actions provided", () => {
    const { makeStore, initStore, component } = setup();
    const wrappedComponent = nextReduxReplay(makeStore, initStore)(component);
    expect(() =>
      shallow(createElement(wrappedComponent, { actions: [] }))
    ).not.toThrow();
  });
});

test("creates a new store every time", () => {
  const { makeStore, initStore, component } = setup();

  function wrap(component) {
    return nextReduxReplay(makeStore, initStore)(component);
  }

  shallow(createElement(wrap(component), { actions: [] }));
  expect(makeStore.mock.calls).toHaveLength(1);

  shallow(createElement(wrap(component), { actions: [] }));
  expect(makeStore.mock.calls).toHaveLength(2);
});

test("creates a new actions middleware every time", () => {
  const { makeStore, initStore, actions, component } = setup();
  const { getInitialProps } = nextReduxReplay(makeStore, initStore)(component);

  expect.assertions(1);
  return getInitialProps().then(() =>
    getInitialProps().then(value => expect(value).toMatchObject({ actions }))
  );
});
