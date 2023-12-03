import { Link } from "react-router-dom";
import RenderPost from "./RenderPost"
import { useState, useEffect } from "react"

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:7070/posts');
  
        if (!response.ok) throw new Error(response.statusText);
  
        const data = await response.json();
  
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);
  
  return (
    <>
      <Link
        to='/posts/new'
        className="create"
      >
        Create post
      </Link>
      <div className="posts">
        {
          posts.map((post) => {
            return <RenderPost key={ post.id } id={ post.id } content={ post.content } created={ post.created } />
          })
        }
      </div>
    </>
  )
}
