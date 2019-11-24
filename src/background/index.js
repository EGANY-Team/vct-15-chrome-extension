import * as EventHandlers from "./event-handler";
import * as APIHandlers from "./api-handler";
import * as Actions from "../configs/actions";

chrome.runtime.onMessage.addListener(({ type, payload }, sender, reply) => {
  switch (type) {
    case Actions.LIST_ALL_POSTS:
      APIHandlers.listPosts()
        .then(posts => {
          reply({
            error: null,
            data: posts
          });
        })
        .catch(error => {
          reply({
            error,
            data: null
          });
        });
      break;
    case Actions.SAVE_IMAGES:
      APIHandlers.saveImages(payload);
      break;
    case Actions.LIST_IMAGES:
      APIHandlers.listImages()
        .then(images => {
          reply({
            error: null,
            data: images
          });
        })
        .catch(error => {
          reply({
            error,
            data: null
          });
        });
      break;
    default:
    // do nothing
  }

  // return true to wait for async calls
  return true;
});
