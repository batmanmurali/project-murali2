import ff from "./assets/sanda.png"
import salli from "./assets/fanta.png"
import malli from "./assets/panda.png"
import puli from "./assets/ganta.png"
import { Link } from "react-router-dom"




function Bruces(){
    return(
        <>
               <div className="jaws" >
      <h1>E-shop</h1>
      <input className="turmeric" type="text" placeholder="Search for anything....." />

      <div id="parcel">
       <Link  to="/Deva" ><h4>shop</h4></Link>  
   <Link to="/Seri" >  <h4>About</h4></Link> 
     <Link to="/Bruces" >  <h4>Profile</h4></Link>

      </div>
     
        </div>

        <p> profile</p>
        <div className="forget" >
            <h5>Meet Our Team</h5>
            <p>Get know the people who E-shop Success</p>

        </div>

 
            <div className="bb" >
                   <img  src={salli} alt="" />
                   
                  <H3>Emma Smith</H3>
                  <p>Founder & CEO</p>
           

            
                 <img  src={ff} alt="" />
                  
                 <H3>Emma Smith</H3>
                  <p>Founder & CEO</p>
            

         

            
                 <img  src={malli} alt="" />
                  
                 <H3>Emma Smith</H3>
                  <p>Founder & CEO</p>
            

          


  
  <img  src={puli} alt="" />
  <H3>Emma Smith</H3>
                  <p>Founder & CEO</p>


            </div>
               
   


        
        </>
    )
}
export default Bruces