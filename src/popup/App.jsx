import React, { useEffect, useState } from "react";
import { FaImages, FaExternalLinkSquareAlt } from "react-icons/fa";

import { HAS_IMAGES, LOAD_IMAGE_RETRIEVER } from "../configs/actions";

import Header from "./components/Header";
import Menu from "./components/Menu";

const App = () => {
  const [hasImages, setHasImages] = useState(false);

  function saveImages() {
    chrome.runtime.sendMessage({ type: LOAD_IMAGE_RETRIEVER });
  }
  function openCustomPage() {
    const customPage = chrome.runtime.getURL("custom-page/index.html");
    if (customPage) {
      window.open(customPage);
    }
  }

  useEffect(() => {
    chrome.tabs.query({ active: true }, tabs => {
      const [tab] = tabs;
      if (tab) {
        chrome.tabs.sendMessage(
          tab.id,
          { type: HAS_IMAGES },
          null,
          setHasImages
        );
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <main className="pa3">
        {hasImages && (
          <Menu
            icon={FaImages}
            title="Save first 5 images"
            onClick={saveImages}
          />
        )}
        <Menu
          icon={FaExternalLinkSquareAlt}
          title="View saved images"
          onClick={openCustomPage}
        />
      </main>
    </div>
  );
};

export default App;
