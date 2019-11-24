import React, { useEffect, useState } from "react";
import { LIST_ALL_POSTS, LIST_IMAGES } from "../configs/actions";

const App = () => {
  const [store, setStore] = useState();
  const [posts, setPosts] = useState();

  function renderStore() {
    if (store && Object.keys(store).length > 0) {
      return Object.keys(store).map(domain => {
        const images = store[domain];

        return (
          <div key={domain} className="bg-near-white shadow-4 mb3">
            <h2 className="bg-green white pa3">{domain}</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "1rem",
                padding: "1rem"
              }}
            >
              {images.map((src, id) => (
                <img
                  className="db center"
                  style={{
                    maxWidth: "100%",
                    objectFit: "contain"
                  }}
                  key={id}
                  src={src}
                  alt="saved image"
                />
              ))}
            </div>
          </div>
        );
      });
    }
    return <p>No images saved</p>;
  }

  useEffect(() => {
    chrome.runtime.sendMessage(
      { type: LIST_ALL_POSTS },
      null,
      ({ data, error }) => {
        if (!error) setPosts(data.slice(0, 3));
      }
    );
    chrome.runtime.sendMessage(
      { type: LIST_IMAGES },
      null,
      ({ data, error }) => {
        if (!error) setStore(data);
      }
    );
  }, []);

  if (!store || !posts) return <p>Loading...</p>;
  return (
    <div className="w-50 pa3 center">
      <h1 className="green flex items-center justify-between">
        <span>Vọc cùng thành #15</span>
        <span className="orange">Custom page</span>
      </h1>
      <h2>Daily news</h2>
      {posts.map(post => (
        <div key={post.id} className="bg-near-white shadow-4 mb3">
          <h2 className="bg-green white pa3 mv0">{post.title}</h2>
          <p className="pa3 mv0 lh-copy">{post.body}</p>
        </div>
      ))}
      <h2>Saved images</h2>
      {renderStore()}
    </div>
  );
};

export default App;
