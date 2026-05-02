import captain from "./assets/22.png"
import captin from "./assets/23.png"
import capta from "./assets/24.png"
import capt from "./assets/25.png"
import cap from "./assets/26.png"
import ca from "./assets/27.png"
import c from "./assets/28.png"
import n from "./assets/29.jpg"
import en from "./assets/30.webp"
import ain from "./assets/31.jpg"
import ind from "./assets/32.webp"
import tain from "./assets/33.jpg"
import ptain from "./assets/34.jpg"
import a from "./assets/35.jpg"
import b from "./assets/36.avif"
import cat from "./assets/37.jpg"
import d from "./assets/39.webp"
import e from "./assets/40.jpg"
import f from "./assets/42.jpg"
import g from "./assets/43.jpg"
import h from "./assets/44.webp"
import i from "./assets/45.webp"
import j from "./assets/47.jpg"
import k from "./assets/49.jpg"
import l from "./assets/50.jpg"
import m from "./assets/51.jpg"
import yn from "./assets/52.jpg"
import o from "./assets/53.webp"
import pee from "./assets/54.jpg"
import quick from "./assets/55.jpg"
import r from "./assets/56.jpg"
import s from "./assets/57.jpg"
import t from "./assets/58.jpg"
import u from "./assets/59.jpg"
import v from "./assets/60.jpg"
import w from "./assets/61.jpg"
import x from "./assets/62.jpg"
import y from "./assets/63.jpg"
import z from "./assets/64.jpg"
import forn from "./assets/65.jpg"
import bat from "./assets/66.jpg"
import  ball from "./assets/68.jpg"
import all from "./assets/69.jpg"
import man from "./assets/70.jpg"
import tvk from "./assets/72.jpg"
import dmk from "./assets/74.webp"
import admk from "./assets/79.jpg"
import find from "./assets/81.jpg"
import and from "./assets/84.jpg"
import murali from "./assets/88.jpg"
import keerthiga from "./assets/90.jpg"
import keerthi from "./assets/90.png"
import wonder from "./assets/91.jpg"
import der from "./assets/90.jpg"
import saar from "./assets/90.png"
import sir from "./assets/91.jpg"
 import Cheems from "./Cheems"
import vice from "./assets/a.png"


import { Link } from "react-router-dom"
import { useRef } from "react"


function Shop(){



  // const value=useRef()
  // const changes=()=>{
  //   value.current.classList.toggle("active")
  // }
    
      
    return(
            
        <>


{/* 
<div  style={{style:"relative" , height:"200px"}}  >

<button onClick={changes}   >shop</button>
<div  className="comes"  ref={value} >
  hello master
</div>


</div> */}

         <div className="pond">
              <Link to="/Shop" > <li> Gadjets</li></Link> 
          <Link to="/Lights" ><li>Lights</li></Link>  
         <Link to="/Invests" ><li>Invests</li></Link>   
          <Link to="/malligo" ><li>Air Conditioners</li></Link>  
           <Link to="/Reacter"><li>Washing Machine</li></Link>  
            <Link to="/James" >   <li>Television</li></Link> 
            <Link to="/sultan" > <li>Electronics</li></Link>
           <Link to="/Face" >  <li>Spare Parts</li></Link>
        </div> 


        <span>
            <Cheems  Image={captain} Brand="Brand : TechNova"  Price="Price : ₹ 53999.10"  />
             <Cheems  Image={captin} Brand="Brand : AudioBeat" Price="Price : ₹ 17999.10"  />
 <Cheems  Image={capta} Brand="Brnd : FitTrack"  Price="₹ 31499"  />

 <Cheems  Image={capt} Brand=" Brand : SoundWave"  Price=" Price : ₹ 4499.10"  />

 <Cheems  Image={cap} Brand="Brand : GamerGear" Price="Price : ₹ 7199.10"  />

 <Cheems  Image={ca} Brand="Brand : PortaBook"Price="Price : ₹ 89999.10"  />

 <Cheems  Image={c} Brand="Brand : DrawPad"  Price="Price : ₹ 53999.10"  />

 <Cheems  Image={n} Brand="Brand : HealthFit" Price="Price : ₹ 8099.10"  />

 <Cheems  Image={en} Brand="Brand : AdventureCam"  Price="Price : ₹ 26999.10"  />

 <Cheems  Image={ain} Brand="Brand : KeyMaster" Price="Price : ₹ 11699.10"  />

 <Cheems  Image={ind} Brand="Brand : SkyFly"  Price="Price : ₹ 35999.10"  />

 <Cheems  Image={tain} Brand="Brand : EarTune"  Price="Price : ₹ 13499.10"  />

 <Cheems  Image={ptain} Brand="Brand : ChargeMax"  Price="Price : ₹ 3599.10"  />

 <Cheems  Image={a} Brand="Brand : VirtualRealm"  Price="Price : ₹ 44999.10"  />

 <Cheems  Image={b} Brand="Brand : HomeSmart" Price="Price : ₹ 16199.10"  />

 <Cheems  Image={cat} Brand="Brand : CleanBot"  Price="Price : ₹ 22499.10"  />

 <Cheems  Image={d} Brand="Brand : ViewMax" Price="Price : ₹ 71999.10"  />

 <Cheems  Image={e} Brand="Brand :  PowerPad"  Price="Price : ₹ 2699.10"  />

 <Cheems  Image={f} Brand="Brand : SoundStrike"  Price="Price : ₹ 8999.10"  />

 <Cheems  Image={g} Brand="Brand : DataDrive" Price="Price : ₹ 11699.10"  />

 <Cheems  Image={h} Brand="Brand :  LightLink"  Price="Price : ₹ 1799.10"  />

 <Cheems  Image={i} Brand="Brand :  BrewMaster"  Price="Price : ₹ 6299.10"  />

 <Cheems  Image={j} Brand="Brand :  VoicePro" Price="Price : ₹ 8099.10"  />

 <Cheems  Image={k} Brand="Brand : FitWeight"  Price="Price : ₹ 17999.10"  />

 <Cheems  Image={l} Brand="Brand : ScreenBeam"  Price="Price : ₹ 26999.10"  />

 <Cheems  Image={m} Brand="Brand : ConnectEasy" Price="Price : ₹ 2249.10"  />

 <Cheems  Image={yn} Brand="Brand : DoorGuard"  Price="Price : ₹ 13499.10"  />

 <Cheems  Image={o} Brand="Brand :  PlayPocket"  Price="Price : ₹ 35999.10"  />

 <Cheems  Image={pee} Brand="Brand : PortExpand" Price="Price : ₹ 3599.10"  />

 <Cheems  Image={quick} Brand="Brand : PureAir"  Price="Price : ₹ 17999.10"  />

 <Cheems  Image={r} Brand="Brand : NetSpeed"  Price="Price : ₹ 8099.10"  />

 <Cheems  Image={r} Brand="Brand : PhotoSnap"  Price="Price : ₹ 71999.10"  />

 <Cheems  Image={t} Brand="Brand : BodyTrack"  Price="Price : ₹ 4499.10"  />

 <Cheems  Image={u} Brand="Brand : StoreSafe" Price="Price : ₹ 7199.10"  />

 <Cheems  Image={v} Brand="Brand : LightDesk"  Price="Price : ₹ 5399.10"  />

 <Cheems  Image={w} Brand="Brand : TypeEasy"  Price="Price : ₹ 4499.10"  />

 <Cheems  Image={x} Brand="Brand : RestSound"  Price="Price : ₹ 3599.10"  />

 <Cheems  Image={y} Brand="Brand : PowerSmart"  Price="Price : ₹ 1799.10"  />

 <Cheems  Image={z} Brand="Brand : RelaxPro"  Price="Price : ₹ 11699.10"  />

 <Cheems  Image={forn} Brand="Brand : BlendGo"  Price="Price : ₹ 2669.10"  />

 <Cheems  Image={bat} Brand="Brand : CamClear"  Price="Price : ₹ 7199.10"  />

 <Cheems  Image={ball} Brand="Brand : SunPower" Price="Price : ₹ 5399.10"  />

 <Cheems  Image={all} Brand="Brand : Echo"  Price="Price : ₹ 4499.10"  />

 <Cheems  Image={man} Brand="Brand : YogaFlex"  Price="Price : ₹ 2699.10"  />

 <Cheems  Image={tvk} Brand="Brand : LinkPro"  Price="Price : ₹ 899.10"  />

 <Cheems  Image={dmk} Brand="Brand : RingFit" Price="Price : ₹ 22499.10"  />

 <Cheems  Image={admk} Brand="Brand : BrewPod"  Price="Price : ₹ 8999.10"  />

 <Cheems  Image={find} Brand="Brand : SecureCycle"  Price="Price : ₹ 7199.10"  />

 <Cheems  Image={and} Brand="Brand : StreamBox"  Price="Price : ₹ 4499.10"  />

 <Cheems  Image={murali} Brand="Brand : HydroTrack"  Price="Price : ₹ 3599.10"  />

 <Cheems  Image={keerthiga} Brand="Brand : CoolBreeze"  Price="Price : ₹ 1799.10"  />

 <Cheems  Image={keerthi} Brand="Brand : PetWatch"  Price="Price : ₹ 5399.10"  />

 <Cheems  Image={wonder} Brand="Brand : JumpFit"  Price="Price : ₹ 2699.10"  />

 <Cheems  Image={der} Brand="Brand : NeckEase"  Price="Price : ₹ 4499.10"  />

 <Cheems  Image={saar} Brand="Brand : ReadGlow" Price="Price : ₹ 1349.10"  />

   <Cheems  Image={sir} Brand="Brand : PowerPad" Price="Price : ₹ 3599.10"  />  



            </span>       
{/* 

                    <footer id="matters">
        
                    <footer className="boot">
                         <div>
                          <p> Shop Catergery</p>
                    <p>About Us</p>
        
                    </div>
                    <div>
                        <p> Customer Service</p>
                        <p>Contact Us</p>
                    </div> 
                    <img className="nice" src={vice} alt="" />
                      
                    </footer>
                       <p className="jk" > 2026 E-shop / All rights Reserved / Privac policyy / Terms & Conditions</p> 


                </footer>  */}
        </>




    )
}
export default Shop