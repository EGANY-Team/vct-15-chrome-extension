import * as Actions from "../configs/actions";

chrome.runtime.onMessage.addListener(({ type, payload }, sender, reply) => {
  switch (type) {
    case Actions.HAS_IMAGES:
      queryImages(images => {
        if (images.length >= 5) {
          reply(true);
        }
        reply(false);
      });
      break;
    default:
      // do nothing
      reply(false);
  }
});

function queryImages(callback) {
  const images = Array.from(document.querySelectorAll("img"));

  if (typeof callback === "function") {
    callback(images);
  }
}
