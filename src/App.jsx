
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routes from './routes'


function App() {
  // This is main page.
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
