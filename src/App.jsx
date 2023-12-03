import './App.css'
import CreatePost from './components/CreatePost'
import Posts from './components/Posts'
import { Route, Routes } from 'react-router';
import Post from './components/Post';
import EditPost from './components/EditPost';

function App() {
  return (
    <>
      <Routes>
        <Route 
          path='/posts/new'
          element={ <CreatePost /> }
        />
        <Route 
          path='/'
          element={ <Posts /> }
        />
        <Route 
          path='/posts/:id'
          element={ <Post /> }
        />
        <Route
          path='/posts/edit'
          element={ <EditPost /> }
        />
      </Routes>
    </>
  )
}

export default App
