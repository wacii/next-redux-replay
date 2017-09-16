import { shallow } from "enzyme";
import { createElement } from "react";
import nextReduxReplay from "../src/nextReduxReplay";

const noop = () => {};

test("getInitialProps() returns expected actions", () => {
  const actions = [{ type: "SOME_ACTION" }, { type: "OTHER_ACTION" }];
  const callCreateStore = createStore => createStore(noop);
  const setup = store => {
    actions.forEach(action => store.dispatch(action));
    return Promise.resolve();
  };
  const hoc = nextReduxReplay(callCreateStore, setup);
  const { getInitialProps } = hoc(noop);

  expect.assertions(1);
  return getInitialProps().then(value => expect(value).toEqual(actions));
});

test("renders provided element with expected props", () => {
  const callCreateStore = createStore => createStore(noop);
  const setup = () => Promise.resolve();
  const hoc = nextReduxReplay(callCreateStore, setup);
  const component = props =>
    createElement("div", { ...props, id: "my-component" }, "Hello!");
  const wrappedComponent = hoc(component);
  wrappedComponent.getInitialProps();
  const props = { a: "a", b: "b" };

  const element = shallow(createElement(wrappedComponent, props));
  expect(element.find("#my-component").props()).toMatchObject(props);
});
