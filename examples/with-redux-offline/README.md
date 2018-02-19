An example _Redux_ app using _Next Redux Replay_.

```bash
yarn install
yarn dev
```

This is a fork of the _Redux Offline_ [basic example](https://github.com/redux-offline-team/redux-offline/tree/master/examples/basic) using _Next.js_.

The index page shows pending requests immediately, before rehydration has completed. You should not do this in production as it results in a flash of incorrect information. Still, it is useful to see all the stages a page goes through as the app is initializing.

The _/other_ page shows a loading indicator while the requests are being loaded from storage. This is the general approach that should be taken.