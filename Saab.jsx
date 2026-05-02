
function Saab(props){
    return(
        <>



        <div className="mother">

            <img className="hater" src={props.Image} alt="" />

            <div id="sambar">
                 <p>{props.Brand}</p>
                <p>{props.Price}</p>
                <button className="chicken">View</button>
                <button className="mutton">Add to Cart</button>

            </div>
           
        </div>


        
        
                
        </>
    )
}
export default Saab