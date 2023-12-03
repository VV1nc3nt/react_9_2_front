import { useLocation, useNavigate } from 'react-router';
import plug from '../assets/plug.jpeg';
import { useEffect, useState } from 'react'


export default function Post() {
  const [post, setPost] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  const date = new Date(post?.created).toLocaleString();

  useEffect(() => {
    const fetchPost = async (id) => {
      try {
        const response = await fetch(`http://localhost:7070/posts/${ id }`);
  
        if (!response.ok) throw new Error(response.statusText);
  
        const { post } = await response.json();
  
        setPost(post);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost(location.state.id);
  }, []);

  const deletePost = async (id) => {
    await fetch(`http://localhost:7070/posts/${ id }`, {
      method: 'DELETE'
    });

    navigate('/', { replace: true });
  };

  const updatePost = () => {
    navigate('/posts/edit', { replace: true, state: { id: location.state.id, content: post?.content } });
  };

  return (
    <>
      <button onClick={ () => navigate('/', { replace: true }) }>Back</button>
      <div
        className="post"
      >
        <div className="post-header">
          <div className='post-header-left'>
            <img className='avatar' src={ plug } alt="" />
            <span className='nickname'>John Doe</span>
          </div>
          <span>{ date }</span>
        </div>
        <div className='post-mid'>{ post?.content }</div>
        <div className='post-bottom'>
          <button 
            className='update-btn'
            onClick={ () => updatePost() }
          >Update</button>
          <button
            onClick={ () => deletePost(post?.id) }
          >x</button>
        </div>
      </div>
    </>
  )
}
