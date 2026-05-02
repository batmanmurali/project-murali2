import dhar from "./assets/2.png"
import srk from "./assets/set.jpg"
import sr from "./assets/shirt.jpg"
import s from "./assets/shoe.jpg"
import k from "./assets/watch.jpg"
import Mahesh from "./assets/mahesh.jpg"
import dha from "./assets/3.webp"
import dh from "./assets/3.webp"
import d from "./assets/2.png"
// import dna from "./assets/images.png"
import dn from "./assets/scam.png"
import vice from "./assets/a.png"

import { Link } from "react-router-dom"

function Commerce(){
    return(

        <>
     
         <section id="uk">
              <div className="jjj" >
      <h1>E-shop</h1>
      <input className="sapu" type="text" placeholder="Search for anything....." />

      <div id="free">
       <Link  to="/Deva" ><h4>shop</h4></Link>  
   <Link to="/Seri" >  <h4>About</h4></Link> 
  

      </div>
     
        </div>

   <img className="mahesh" src={Mahesh} alt="" />

        <div className="vg">
           
            <h1 className="h1">Discover Your Style</h1>
            
            <p className="p1">Trendy product at Best Price</p>

            <Link to="/Shop" > <button className="but">Shop Now </button> </Link>
            
           <button className="ton">Explore Collections</button> 
          
        </div>
        <h3 className="vb">Catergories</h3>
      
        <div className="fun">
               <div className="bit" >
                  <img className="height"  src={srk} alt="" />
                  <p>Fashion</p>
                  <img className="width" src={dhar} alt="" /> 
              

            </div>
            <div className="bit" >
                 <img className="height" src={sr} alt="" />
                 <p>Footwear</p>
                   <img className="width" src={dha} alt="" />
                  

            </div>
          
              <div className="bit">
                 <img className="height" src={s} alt="" />
                 <p>Electronic</p>
                   <img className="width" src={dh} alt="" />
                  
              </div>
                 <div className="bit">
                     <img className="height" src={k} alt="" />
                     <p>Accessories</p>
                       <img className="width" src={d} alt="" />
                   
                 </div>

        </div>
        <div className="fin" >
          <h1>Up to 50% off</h1>
          <p className="on">Free Delivey on order above $999</p>
          <button className="vaa">Shop Now</button>


        </div>
        <div className="pash">
             <p className="vash" >Safe Up to 50% Off Limited Time</p>

        </div>
        <div>
            <img className="brba" src={dn} alt="" />
        </div>


        <footer>

            <footer className="foot">
                 <div>
                  <p> Shop Catergery</p>
            <p>About Us</p>

            </div>
            <div>
                <p> Customer Service</p>
                <p>Contact Us</p>
            </div> 
            <img className="vice" src={vice} alt="" />
              

        

            </footer>
               <p className="jk" > 2026 E-shop / All rights Reserved / Privac policyy / Terms & Conditions</p> 

        
            
              
       
             
        </footer>
        
       

         
                    



            </section>  
      

        </>
    )
}
export default Commerce