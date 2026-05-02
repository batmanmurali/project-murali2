
function Bond(props){
    return(
        <>



        <div className="wayto">

            <img className="skip" src={props.Image} alt="" />

            <div id="jump">
                 <p>{props.Brand}</p>
                <p>{props.Price}</p>
                <button className="saa">View</button>
                <button className="blood">Add to Cart</button>

            </div>
           
        </div>


        
        
                
        </>
    )
}
export default Bond