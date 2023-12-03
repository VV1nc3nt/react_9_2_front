import plug from '../assets/plug.jpeg';
import { useNavigate } from 'react-router-dom';

export default function RenderPost({ id, content, created }) {
  const date = new Date(created).toLocaleString();
  const navigate = useNavigate();

  const openPost = () => {
    navigate(`/posts/${ id }`, { replace: true, state: { id } })
  }

  return (
    <div
      key={ id }
      className="post"
      onClick={ openPost }
    >
      <div className="post-header">
        <div className='post-header-left'>
          <img className='avatar' src={ plug } alt="" />
          <span className='nickname'>John Doe</span>
        </div>
        <span>{ date }</span>
      </div>
      <div className='post-mid'>{ content }</div>
    </div>
  )
}
