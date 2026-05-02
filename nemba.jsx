
function nemba(props){
    return(
        <>



        <div className="shirt">

            <img className="singam" src={props.Image} alt="" />

            <div id="jailer">
                 <p>{props.Brand}</p>
                <p>{props.Price}</p>
                <button className="jaile">View</button>
                <button className="tj">Add to Cart</button>

            </div>
           
        </div>


        
        
                
        </>
    )
}
export default nemba