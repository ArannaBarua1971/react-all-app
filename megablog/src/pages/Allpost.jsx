import React, { useEffect, useState } from "react";
import postController from "../appwrite/articles";
import { PostCard } from "../components";
import { Container } from "../components";

function Allpost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    postController.getAllPost().then((posts) => setPosts(posts.documents));
  }, []);

  return (
    <div>
      <Container>
        {posts.map((post) => {
          <div key={post.$id} className="p-2 w-1/4">
            <PostCard {...post} />
          </div>;
        })}
      </Container>
    </div>
  );
}

export default Allpost;
