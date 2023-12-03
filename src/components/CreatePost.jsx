import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const addPost = async (post) => {
    await fetch('http://localhost:7070/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
  };

  const cancelClick = () => {
    navigate('/', { replace: true });
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const post = {
      "id": 0,
      "content": inputValue
    };

    addPost(post);

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
        <button>Add</button>
      </form>
    </div>
  )
}
 