import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function EditPost() {
  const navigate = useNavigate();
  const location = useLocation();
  const [inputValue, setInputValue] = useState(location.state.content);

  const editPost = async (post) => {
    await fetch(`http://localhost:7070/posts/${ location.state.id }`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
  };

  const cancelClick = () => {
    navigate(`/posts/${ location.state.id }`, { replace: true, state: { id: location.state.id } });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const post = {
      "id": location.state.id,
      "content": inputValue
    };

    editPost(post);

    setInputValue('');
    navigate('/', { replace: true });
  };

  const changeHandler = (event) => setInputValue(event.target.value);

  return (
    <div className='form-wrapper'>
      <button className='back-btn' onClick={ cancelClick }>x</button>
      <form className='form' action="submit" onSubmit={ submitHandler }>
        <textarea
          name="post" 
          className='post-text'
          value={ inputValue }
          onChange={ changeHandler }
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  )
}
