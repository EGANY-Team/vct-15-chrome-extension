import { SAVE_IMAGES } from "../configs/actions";

(() => {
  const images = Array.from(document.querySelectorAll("img"));

  if (images.length >= 5) {
    const imageUrls = images.map(image => image.src).slice(0, 5);
    chrome.runtime.sendMessage({ type: SAVE_IMAGES, payload: imageUrls });
    alert("Saved 5 images");
  }
})();
