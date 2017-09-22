/**
 * @jest-environment jsdom
 */

import { shallow } from "enzyme";
import { createElement } from "react";
import { applyMiddleware, createStore } from "redux";
import { cacheKey } from "../src/nextReduxReplay";
import nextReduxReplay from "../src/nextReduxReplay";

const noop = () => {};

function defaultMakeStore(middleware) {
  return createStore(noop, undefined, applyMiddleware(middleware));
}

test("getInitialProps() returns expected actions", () => {
  const actions = [{ type: "SOME_ACTION" }, { type: "OTHER_ACTION" }];
  const makeStore = defaultMakeStore;
  const setup = ({ store }) => {
    actions.forEach(action => store.dispatch(action));
    return Promise.resolve();
  };
  const hoc = nextReduxReplay(makeStore, setup);
  const { getInitialProps } = hoc(noop);

  expect.assertions(1);
  return getInitialProps().then(value => expect(value).toEqual({ actions }));
});

test("renders component with props from `setup()`", async () => {
  const makeStore = defaultMakeStore;
  const props = { a: "a", b: "b" };
  const setup = () => Promise.resolve(props);
  const hoc = nextReduxReplay(makeStore, setup);
  const component = props =>
    createElement("div", { ...props, id: "my-component" });
  const wrappedComponent = hoc(component);
  const initialProps = await wrappedComponent.getInitialProps();

  const element = shallow(createElement(wrappedComponent, initialProps));
  expect(element.find("#my-component").props()).toMatchObject(props);
});

test("renders provided element with expected props", () => {
  const makeStore = defaultMakeStore;
  const setup = () => Promise.resolve();
  const hoc = nextReduxReplay(makeStore, setup);
  const component = props =>
    createElement("div", { ...props, id: "my-component" }, "Hello!");
  const wrappedComponent = hoc(component);
  wrappedComponent.getInitialProps();
  const props = { a: "a", b: "b" };

  const element = shallow(createElement(wrappedComponent, props));
  expect(element.find("#my-component").props()).toMatchObject(props);
});

describe("when `getInitialProps()` not called", () => {
  test("throws error when actions not provided", () => {
    const makeStore = defaultMakeStore;
    const setup = () => Promise.resolve();
    const hoc = nextReduxReplay(makeStore, setup);
    const wrappedComponent = hoc(() => createElement("div"));
    expect(() => shallow(createElement(wrappedComponent))).toThrow();
  });

  test("doesn't throw if actions provided", () => {
    const makeStore = defaultMakeStore;
    const setup = () => Promise.resolve();
    const hoc = nextReduxReplay(makeStore, setup);
    const wrappedComponent = hoc(() => createElement("div"));
    expect(() =>
      shallow(createElement(wrappedComponent, { actions: [] }))
    ).not.toThrow();
  });
});

describe("memoization", () => {
  // NOTE: cannot delete the property and JSDOM isn't reset between tests
  beforeEach(() => (window[cacheKey] = undefined));

  test("memoizes store on window", () => {
    const makeStore = jest.fn(defaultMakeStore);
    const setup = () => Promise.resolve();
    const hoc = nextReduxReplay(makeStore, setup);
    const wrappedComponent = hoc(() => createElement("div"));
    shallow(createElement(wrappedComponent, { actions: [] }));

    expect(window).toHaveProperty(cacheKey);
  });

  test("creates store only when necessary", () => {
    const makeStore = jest.fn(defaultMakeStore);
    const setup = () => Promise.resolve();
    const component = () => createElement("div");

    function wrap(component) {
      return nextReduxReplay(makeStore, setup)(component);
    }

    shallow(createElement(wrap(component), { actions: [] }));
    expect(makeStore.mock.calls).toHaveLength(1);

    shallow(createElement(wrap(component), { actions: [] }));
    expect(makeStore.mock.calls).toHaveLength(1);

    window[cacheKey] = undefined;
    shallow(createElement(wrap(component), { actions: [] }));
    expect(makeStore.mock.calls).toHaveLength(2);
  });
});
