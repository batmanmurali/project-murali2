



import ramp from "./assets/only.png"
import rap from "./assets/only.png"
import shamp from "./assets/only.png"
import sheep from "./assets/only.png"
import heep from "./assets/muthu.png" 
import { Link } from "react-router-dom"
















function Seri(){
    return(



        <>

<div id="patient" >
    <h1  >E.Shop</h1>
    <input   id="inpu" type="text" />

    <div  id="fire" >
    <Link to="/Deva" > <h3>Shop</h3></Link>   
    <Link   to="/Seri" >   <h3>About</h3> </Link>  
      {/* <Link   to="/Bruces"> <h3>Profile</h3></Link>  */}
    </div>
</div>

          <h1 className="kit" >About E-Shop</h1>
        <p className="names"> Shop With Confidence</p>
        <p className="parasakthi">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eligendi obcaecati iure corrupti hic rerum in nisi enim animi! Quo veritatis ea at dolore molestias itaque doloremque blanditiis repellat est!</p>
       
       <div className="willers">
         <div className="willing">

            <div>

                <div className="book">
            <img className="fives" src={ramp} alt="" />
            <h5>Professional Team</h5>
                </div>


            </div>

            <p>Professional and Skilled Team dedicated  to your Satisfication</p>
        </div>

         <div className="willing">

            <div className="book">
                    <img className="fives" src={rap} alt="" />
            <h5>Professional Team</h5>
 

            </div >
            <p>Professional and Skilled Team dedicated  to your Satisfication</p>         
        
            
        </div>
         <div className="willing">


            <div className="book">
                   <img className="fives" src={shamp} alt="" />
            <h5>Professional Team</h5>
            </div>
            <p>Professional and Skilled Team dedicated  to your Satisfication</p>         
         
            
        </div>
         <div className="willing">
            <div className="book">
                 <img className="fives" src={sheep} alt="" />
            <h5>Professional Team</h5>     
            </div>
            <p>Professional and Skilled Team dedicated  to your Satisfication</p>


        </div>

       </div>

       <div className="bonf">
        <img className="mag" src={heep} alt="" />
        <h3>Our Sheep</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, non quibusdam alias optio nesciunt, laborum, pariatur odit veritatis harum consequuntur repellat vero dolorem expedita nemo fuga ab eaque rerum necessitatibus!</p>
       </div>
       
        </>
      
    )
}
export default Seri