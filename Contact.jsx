import git from "./assets/github.png"
import vit from "./assets/link.png"
import bit from "./assets/kinder.png"


function Contact(){
    return(
      <>
 
<div className="moooom">
    <div className="boom">




          <h1>
        CONTACT ME
      </h1>
      <div className="ass">

< a href=" muralinagaraj3@gmail.com">
        <p className="vada" >  
          <img id="imga" src={vit} alt="" />           
          <p>muralinagaraj3@gmail.com</p>   
              </p>
              </a>



 <a href="https://www.linkedin.com/in/murali-nagaraj-851434354?utm_source=share_via&utm_content=profile&utm_medium=member_android">
         <p className="sada" > 
               <img id="imga" src={bit} alt="" />   
       <p>Linkidin Profile</p>   

          </p>
          </a>


  <a href="https://github.com/batmanmurali"> 
          <p className="pida" >  
            <img id="imga" src={git} alt="" /> 
      <p>Github Profile</p> 
              </p>

              </a>
      </div>

     

      </div>
   <div className="jig">

   </div>
      
      <samp>

       
        <input className="hurry" type="Your Name" placeholder="Your Name" />
        <br />

    <input className="hurryes" type="text" placeholder="Your Email" />
        <br />
        
    <input  className="hurrys" type="text"  placeholder="Your Message" />
    <button className="kkk">Send Message </button>

      </samp>




</div>
    



      </>
         

      
    )
}
export default Contact
