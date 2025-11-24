import React from 'react'
import Image1 from '../Component/Project/Image1.jpg'
import Image2 from '../Component/Project/Image2.jpg'
import Image3 from '../Component/Project/Image3.jpg'
import Image4 from '../Component/Project/Image4.jpg'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
const Project = () => {
  const ImageRef = useRef()
  const ImageRef2 = useRef()
  const ImageRef3 = useRef()
  const ImageRef4 = useRef()
  const ImageSap = useRef()
  const ImageSap2 = useRef()
  const ImageSap3 = useRef()
  const ImageSap4 = useRef()
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    gsap.to(ImageSap.current,{
height:"80vh",
ease:"linear",
transformOrigin:"bottom",

      scrollTrigger:{
        trigger:ImageSap.current,
        
        start:"bottom 100%",
        end:"bottom 15%",
        scrub:1,
        
      }
    }
    )
    gsap.to(ImageSap2.current,{
height:"80vh",
ease:"linear",
transformOrigin:"bottom",

      scrollTrigger:{
        trigger:ImageSap2.current,
        
        start:"bottom 100%",
        end:"bottom 15%",
        scrub:1,
        
      }
    }
    )
    gsap.to(ImageSap3.current,{
height:"80vh",
ease:"linear",
transformOrigin:"bottom",

      scrollTrigger:{
        trigger:ImageSap3.current,
        
        start:"bottom 100%",
        end:"bottom 15%",
        scrub:1,
        
      }
    }
    )
    gsap.to(ImageSap4.current,{
height:"80vh",
ease:"linear",
transformOrigin:"bottom",

      scrollTrigger:{
        trigger:ImageSap4.current,
        
        start:"bottom 100%",
        end:"bottom 15%",
        scrub:1,
        
      }
    }
    )
  })
  return (
    <div className=''>
<div>
<div className='uppercase flex font-[font1]'>
  <h1 className='text-[27vh] mt-[35vh]'>projects</h1>
  <p className='mt-[43vh] text-[6vh] bold'> 16</p>
</div>
<div>
  <div className='-mt-20 relative flex object-cover h-full w-full gap-3 oveflow-hidden mx-3'> 





  <img ref={ImageSap} onMouseEnter={()=>{
    ImageRef.current.style.opacity="100%"
  }} onMouseLeave={()=>{
    ImageRef.current.style.opacity="0"
  }} src={Image1} alt="" className='hover:scale-101 transition-all ease-out hover:brightness-75 object-cover h-[20vh] w-[100vh] cursor-pointer hover:rounded-4xl'/>
 <img ref={ImageSap2} onMouseEnter={()=>{
    ImageRef2.current.style.opacity="100%"
  }} onMouseLeave={()=>{
    ImageRef2.current.style.opacity="0"
  }} src={Image2} alt="" className='hover:scale-101 transition-all ease-out hover:brightness-75 object-cover h-[20vh] w-[102.5vh] cursor-pointer hover:rounded-4xl'/>

<div ref={ImageRef} className=' opacity-0 border-2 px-3  border-white absolute top-1/2 left-[10vw] rounded-full text-[4vw] text-white '>
  <h1 className='-mt-5 -mb-4'>VOIR LE PROJECT</h1>
</div>
<div ref={ImageRef2} className='opacity-0 border-2 px-3  border-white absolute top-1/2 left-[60vw] rounded-full text-[4vw] text-white '>
  <h1 className='-mt-5 -mb-4'>VOIR LE PROJECT</h1>
</div>
  </div>
  <div className='mt-2 relative flex object-cover h-full w-full gap-3 oveflow-hidden mx-3'> 





  <img ref={ImageSap3} onMouseEnter={()=>{
    ImageRef3.current.style.opacity="100%"
  }} onMouseLeave={()=>{
    ImageRef3.current.style.opacity="0"
  }} src={Image3} alt="" className='hover:scale-101 transition-all ease-out hover:brightness-75 object-cover h-[20vh] w-[100vh] cursor-pointer hover:rounded-4xl'/>
 <img ref={ImageSap4} onMouseEnter={()=>{
    ImageRef4.current.style.opacity="100%"
  }} onMouseLeave={()=>{
    ImageRef4.current.style.opacity="0"
  }} src={Image4} alt="" className='hover:scale-101 transition-all ease-out hover:brightness-75 object-cover h-[20vh] w-[102.5vh] cursor-pointer hover:rounded-4xl'/>

<div ref={ImageRef3} className=' opacity-0 border-2 px-3  border-white absolute top-1/2 left-[10vw] rounded-full text-[4vw] text-white '>
  <h1 className='-mt-5 -mb-4'>VOIR LE PROJECT</h1>
</div>
<div ref={ImageRef4} className='opacity-0 border-2 px-3  border-white absolute top-1/2 left-[60vw] rounded-full text-[4vw] text-white '>
  <h1 className='-mt-5 -mb-4'>VOIR LE PROJECT</h1>
</div>
  </div>


</div>
</div>

    </div>
  )
}

export default Project