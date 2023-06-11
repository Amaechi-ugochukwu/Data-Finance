import Home from "./pages/Home"
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"

import { BrowserRouter , Routes , Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route exact path = "/" element ={<Home/>} />
        <Route  path = "/contact"  element = {<Contact/>}/>

      
    </Routes>
    </BrowserRouter>
   

  )
}

export default App;
