import img from "./assets/malhotra.png"
import { Link } from "react-router-dom"



 function Home(){
     return(

        

< div className="do" >


    <span className="finger">


         <search>
                
        <h1>
    Hi , This is Murali Nagaraj
</h1>
<p className="f">Iam Full stack developer</p>
<button className="wtf">Download info</button>



<Link  to="/Contact"  >
<button className="wth">Contact info</button>
</Link>

</search>
         
   <img className="senior" src={img} alt="" />



    </span>

    

    
    


    
    


</div>


    
     )
 }
 export default Home