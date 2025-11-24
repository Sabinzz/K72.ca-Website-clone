import React, { useEffect, useRef } from 'react'
import Video from './Video'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const TopSide = () => {
  
const ellipse=useRef();


useGSAP(()=>{
  const length = ellipse.current.getTotalLength();
  
gsap.set(ellipse.current,{
   strokeDasharray: length,
      strokeDashoffset: length,
        strokeWidth: 1
})
gsap.to(ellipse.current,{
  strokeDashoffset:0,
  
  duration:2,
  yoyo:true,
  repeat:-1,
  ease: "power3.inOut",
})
})

 



  return (
    <div >
    <div className='mt-15 font-[font1] text-center text-white lg:text-[20vh] text-[10vh] absolute w-full top-3.5 lg:leading-[18vh] leading-16'>
      <div className='uppercase '>
        <h1>L'étincelle</h1>
<div className='flex justify-center items-center '>

     <h1 className='flex items-center justify-center'>qui<div className='lg:w-[17vw] lg:h-[15vh] h-[7vh] w-[12vw] rounded-full overflow-hidden -mt-3'><Video/></div> génère</h1>
</div>

     <h1 className='flex items-center justify-center'>la <div className='ml-3'>
      <div className='relative'>
        <span className='relative'>

      créativité
</span>
        <svg  className='absolute top-0'  viewBox="0 0 141.4499969482422 22.037500381469727" style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)"}}>
              <ellipse ref={ellipse} fill="none" stroke='#d3fd50'  cx="70.7249984741211" cy="11.018750190734863" rx="68.7249984741211" ry="9.018750190734863" ></ellipse>
                    
            </svg>
      </div>


      </div></h1>
      </div>
    </div>
    <div className=' leading-[18px] text-white font-[font1] absolute right-0 top-1/2 lg:h-[17vh] h-[36.5vh] w-[20vw]  lg:mt-26 -mt-17 mr-7 lg:mr-1 '>
      <p className='selection:bg-[#d3fd50]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
    </div>
    </div>
  )
}

export default TopSide

// style={{strokeDashoffset: "-425.019", strokeDasharray: "69.1782px,212.61px"}}