

import { Link } from "react-router-dom";
import Home from "./Home";
function Navbar(){
    return(
        <>
<section>
    <ul>
           <li>
         <Link   to="/Home"  >Home</Link> 
        
    </li>
       <li>
        <Link  to="/About">About</Link>
    </li>
        <li>
        <Link   to="/Project">Project</Link>
    </li>
    
     
     <li>
        <Link   to="/Skills" >Skill</Link>
    </li>
        <li>
        <Link to="/Contact">Contact</Link>
    </li>
</ul>

<br /><br />

</section>

        
        </>
      

    )
}
export default Navbar