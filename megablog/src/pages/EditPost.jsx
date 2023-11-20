import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postController from "../appwrite/articles";
import { PostForm } from "../components";
import { Container } from "postcss";

function EditPost() {
  const slug = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    postController.getSepecificePost(slug).then((post) => {
      if (post) {
        setPost(post);
      }
    });
  }, [slug]);
  return (
    <div>
      <Container>
        <PostForm post={post}/>
      </Container>
    </div>
  );
}

export default EditPost;
