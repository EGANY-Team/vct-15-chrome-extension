export function injectImageSetter() {
  injectScript("content/image-retriever.js");
}

function injectScript(path) {
  chrome.tabs.executeScript({
    file: path
  });
}
