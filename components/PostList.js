import React, { useEffect, useState } from "react";
import { mockPosts } from "../data/data";
import PostItem from "./PostItem";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  const handleScroll = () => {
    const list = [...posts, "One more post"];
    setPosts(list);
  };

  useEffect(() => {
    var list = [...posts];
    mockPosts.map((data) => list.push(data.title));
    setPosts(list);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      {posts &&
        posts.map((post) => (
          <PostItem key={Math.random()} title={post}></PostItem>
        ))}
    </>
  );
}
