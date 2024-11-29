import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./components/Login"
import Home from './components/Home'
import Details from './components/Details'


 function App() {
  return (
    <div>
        <BrowserRouter>
           <Routes>
             <Route index element={<Login/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/home" element={<Home/>}/>
             <Route path="/details" element={<Details/>}/>
           </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App


