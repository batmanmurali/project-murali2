
import{BrowserRouter,Routes,Route} from "react-router-dom"
 import Home from "./Home"
 import Project from "./Project"
 import About from "./About"
 import Contact from "./Contact"
 import Navbar from "./Navbar"
import Skills from "./Skills"
import Commerce from "./Commerce"
import Shop from "./Shop"
import Cheems from "./Shop"
import Bom from "./Lights"
import Saaba from "./Invests"
import Pant from "./malligo"
import Routers from "./Reacter"
import Bond from "./James"
import Tuban from "./sultan"
import Faced from "./Face"
import Deva from "./Deva"
import Deval from "./Seri"
import Host from "./Home"
import Battle  from "./Bruces"




function App(){
    return(
<>

<body>
    <BrowserRouter> <Navbar>
    
</Navbar>
 <Routes>
    < Route path="/" element={<Host/>}/> 
     < Route path="/home" element={<Home/>}/> 
        <Route   path="/Project" element={<Project/>}/>
     <Route   path="/About" element={<About/>}/>
      <Route   path="/Contact" element={<Contact/>}/> 
       <Route   path="/Skills" element={<Skills/>}/>
        <Route   path="/Commerce" element={<Commerce/>}/>
        <Route path="/Shop" element={<Shop/>}/>
          <Route path="/Shop" element={<Cheems/>}/> 
         <Route path="/Lights" element={<Bom/>}/>
          <Route path="/Invests" element={<Saaba/>}/>
          <Route path="/malligo" element={<Pant/>}/>
            <Route path="/Reacter" element={<Routers/>}/>
                 <Route path="/James" element={<Bond/>}/>
                     <Route path="/sultan" element={<Tuban/>}/>
                     <Route path="/Face" element={<Faced/>}/>
                           <Route path="/Deva" element={<Deva/>}/>
                            <Route   path="/Seri"   element={<Deval/>}/>
                               <Route   path="/Bruces"   element={<Battle/>}/>

    
</Routes>
</BrowserRouter>
    
</body>





</>



    )
}
export default App