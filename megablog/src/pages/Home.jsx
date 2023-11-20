import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import postController from "../appwrite/articles";
import { Container,PostCard } from "../components";

function Home() {
  const authStatus =useSelector(state=> state.auth.status)
    const [posts, setPosts] = useState([]);
  useEffect(() => {
    postController.getAllPost().then((posts) => setPosts(posts.documents));
  }, []);

  if (!authStatus) {
    return (
      <div className="w-full py-8 mt-4 text-center bg-gray-500 h-[500px]">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-white">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
