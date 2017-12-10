An example _Redux_ + _Redux Persist_ app using _Next Redux Replay_.

```bash
yarn install
yarn dev
```

This is a fork of the _Next.js_ `with-redux` example. See [the original example](https://github.com/zeit/next.js/tree/canary/examples/with-redux) for more information on what the app does.

_Redux Persist_ is used to persist the count between page loads. The default count will be present as a flash of content before the persistor loads the saved value. In an actual app this should be hidden using a [PersistGate](https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md), but it is useful here to see what is happening. 