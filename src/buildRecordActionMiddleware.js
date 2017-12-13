export default function buildRecordActionMiddleware() {
  const actions = [];
  let recording = true;

  function middleware() {
    return next => action => {
      if (recording) actions.push(action);
      return next(action);
    };
  }

  middleware.stopRecording = function stopRecording() {
    recording = false;
  };

  return {
    actions,
    middleware
  };
}
