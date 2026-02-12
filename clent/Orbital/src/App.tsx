import { BrowserRouter } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouteNavigator from './routes/RouteNavigator'

function App() {

  return (
    <>
      <BrowserRouter>
        <RouteNavigator/>
      </BrowserRouter>
    </>
  )
}

export default App
