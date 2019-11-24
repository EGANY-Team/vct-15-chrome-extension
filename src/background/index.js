import * as EventHandlers from "./event-handler";
import * as APIHandlers from "./api-handler";
import * as Actions from "../configs/actions";

chrome.runtime.onMessage.addListener(({ type, payload }, sender, reply) => {
  switch (type) {
    case Actions.LIST_ALL_POSTS:
      handleAsync(APIHandlers.listPosts, reply);
      break;
    case Actions.SAVE_IMAGES:
      handleSync(APIHandlers.saveImages.bind(null, payload), reply);
      break;
    case Actions.LIST_IMAGES:
      handleAsync(APIHandlers.listImages, reply);
      break;
    case Actions.LOAD_IMAGE_RETRIEVER:
      handleSync(EventHandlers.injectImageSetter, reply);
      break;
    default:
      // do nothing
      reply(false);
  }

  // return true to wait for async calls
  return true;
});

function handleAsync(handler, reply) {
  handler()
    .then(data => reply({ error: null, data }))
    .catch(error => reply({ error, data: null }));
}

function handleSync(handler, reply) {
  handler();
  reply(true);
}
