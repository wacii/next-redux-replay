export default function buildRecordActionMiddleware() {
  const actions = [];

  return {
    actions,
    middleware
  };

  function middleware() {
    return next => action => {
      actions.push(action);
      return next(action);
    };
  }
}
