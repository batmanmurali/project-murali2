
function Routers(props){
    return(
        <>



        <div className="killi">

            <img className="fate" src={props.Image} alt="" />

            <div id="branch">
                 <p>{props.Brand}</p>
                <p>{props.Price}</p>
                <button className="priya">View</button>
                <button className="surya">Add to Cart</button>

            </div>
           
        </div>


        
        
                
        </>
    )
}
export default Routers