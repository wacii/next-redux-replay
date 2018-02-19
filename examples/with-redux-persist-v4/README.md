An example _Redux_ + _Redux Persist_ app using _Next Redux Replay_.

```bash
yarn install
yarn dev
```

This is a fork of the _Next.js_ `with-redux` example. See [the original example](https://github.com/zeit/next.js/tree/canary/examples/with-redux) for more information on what the app does.

_Redux Persist_ is used to persist the count between page loads. On the index page, the default count will be present as a flash of content before the persistor loads the saved value. On the _/other_ page, a loading indicator will be displayed while the page and persisted data are being rehydrated.

The second approach is more appropriate for a production application, but both are useful in understanding the various stages the page goes through.
