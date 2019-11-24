export function listPosts() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(resolve)
      .catch(reject);
  });
}

export function saveImages({ domain, images }) {
  if (
    typeof domain === "string" &&
    domain.length > 0 &&
    Array.isArray(images) &&
    images.length > 0
  ) {
    chrome.storage.local.set({ [domain]: images });
  }
}

export function listImages() {
  return new Promise(resolve => {
    chrome.storage.local.get(resolve);
  });
}
