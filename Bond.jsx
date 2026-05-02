
function Bond(props){
    return(
        <>



        <div className="success">

            <img className="is" src={props.Image} alt="" />

            <div id="as">
                 <p>{props.Brand}</p>
                <p>{props.Price}</p>
                <button className="step">View</button>
                <button className="stone">Add to Cart</button>

            </div>
           
        </div>


        
        
                
        </>
    )
}
export default Bond