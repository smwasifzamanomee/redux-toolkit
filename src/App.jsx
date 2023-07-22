import './App.css'
import CounterView from './features/counter/CounterView'
import PostView from './features/post/PostView'

function App() {

  return (
    <>
      <h1 className='text-4xl'>Counter</h1>
      <CounterView/>
      <PostView/>
    </>
  )
}

export default App
