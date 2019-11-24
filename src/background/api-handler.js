export async function listPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  if (res.ok) {
    return posts;
  }

  throw new Error(res.statusText || "Failed to fetch all posts");
}

export function saveImages(domain, images) {
  if (
    typeof domain === "string" &&
    domain.length > 0 &&
    Array.isArray(images) &&
    images.length > 0
  ) {
    chrome.storage.local.set({ [domain]: images });
  }
}
