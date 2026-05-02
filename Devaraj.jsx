
function Devaraj(props){
    return(
        <>
        <div className="karthick">

            <img className="simbu" src={props.Image} alt="" />

            <div id="keerthana">
                 <p>{props.Brand}</p>
                <p>{props.Price}</p>
                <button className="karthiga">View</button>
                <button className="arun">Add to Cart</button>

            </div>
           
        </div>


        
        
                
        </>
    )
}
export default Devaraj