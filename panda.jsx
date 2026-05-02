
function panda(props){
    return(
        <>



        <div className="kanch">

            <img className="hates" src={props.Image} alt="" />

            <div id="come">
                 <p>{props.Brand}</p>
                <p>{props.Price}</p>
                <button className="mood">View</button>
                <button className="sood">Add to Cart</button>

            </div>
           
        </div>


        
        
                
        </>
    )
}
export default panda