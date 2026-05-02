import { Link } from "react-router-dom"
import dis from "./assets/b.png"
import di from "./assets/n.png"

function Project(){
    return(       
        
        

        <div className="mamitha">
          <search className="sear">
            <h2> This is MURALI Project</h2>
            <p>Browse my React</p>
        </search>

        <section id="kk">
            <div className="sachein" >
                <h3>E-commorce Project</h3>
                <img className="im" src={dis} alt="" />
                <button className="q">Github</button>
                <Link to="/Commerce" >
                <button className="w"> Live Demo </button>
                </Link>

            </div>
             <div className="sach" >
                <h3>Portfolio Website</h3>
                <img className="im" src={di} alt="" />
                <button className="e">Github</button>

            <Link  to="/home" >
            <button className="r">Live Demo</button>
            
            </Link>
                

            </div>


        </section>
        
        </div>

        
      

                
         
    )
}
export default Project
