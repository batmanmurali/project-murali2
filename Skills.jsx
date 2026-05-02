import raw from "./assets/html.png"
 import taw from "./assets/css.png"
 import saw from "./assets/boot.png"
 import aaw from "./assets/js.png"
 import vaw from "./assets/react.png"
 import haw from "./assets/13.jpg"


function Skills(){
    return(
< section className="sec" >

<div className="ginnn">

<section className="loo">
    <div className="place" >
         <img className="sew" src={raw} alt="" />
         <h3 >HTML</h3>

    </div >
       <div className="place" >
          <img  className="sew" src={taw} alt="" /> 
<h3>CSS</h3>
       </div>
   <div  className="place" >
    <img className="sew" src={saw} alt="" />
    <h3 >BOOTSTRAP</h3>
   </div>
    <div className="place" >
        <img className="sew" src={aaw} alt="" />
        <h3 >JAVASCRIPT</h3>
    </div>
    <div  className="place" >
         <img className="sew" src={vaw} alt="" />
         <h3 >REACT</h3>
    </div>
    <div className="place" >
          <img className="sew" src={haw} alt="" />
          <h3 >JAVA</h3>
    </div>
   
  


</section>
    
</div>

    

    
</section>      
    )
}
export default Skills