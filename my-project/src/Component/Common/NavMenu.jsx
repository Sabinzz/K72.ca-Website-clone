import React from 'react'
import Image1 from "../Project/image1.jpg"
import Image2 from "../Project/image2.jpg"
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const NavMenu = () => {
    const MenuRef = useRef()
    const MenuRef2 = useRef()
    const MenuRef3 = useRef()
    const MenuRef4 = useRef()
    useGSAP(()=>{
gsap.to(MenuRef.current,{
      xPercent: -21.9,
  repeat:-1,
    duration:3.5,
  
    ease: "linear"
    
})
gsap.to(MenuRef2.current,{
      xPercent: -21.9,
  repeat:-1,
    duration:3.5,
  
    ease: "linear"
    
})
gsap.to(MenuRef3.current,{
      xPercent: -21.9,
  repeat:-1,
    duration:3.5,
  
    ease: "linear"
    
})
gsap.to(MenuRef4.current,{
      xPercent: -21.9,
  repeat:-1,
    duration:3.5,
  
    ease: "linear"
    
})
    },[])
  return (
    <div >
        <div className='bg-black w-screen h-screen  overflow-x-hidden'>
          <div className=' pt-2 '>
<div className=' bg-white h-[1.5px] absolute left-24 w-33 rotate-135 origin-top-left'>

</div>
<div className='bg-white h-[1.5px] w-33 rotate-45 origin-top-left'>

</div>
          </div>
          {/* Menu Section */}
          <div>
<div className='flex flex-col mt-30 text-white uppercase font-[font2] '>
<div 
onMouseEnter={()=>{
  MenuRef.current.style.opacity="100"
}}
onMouseLeave={()=>{
  MenuRef.current.style.opacity="0"
}}
className='cursor-pointer w-full border-t-2 border-b-2 relative  border-white h-28 flex items-center justify-center'>
<h1 className='text-[7vw] '>Projects</h1>
<div ref={MenuRef}  className=' absolute flex top-0 pl-4 text-black  bg-[#d3fd50] overflow-x-hidden w-[300vw] opacity-0 h-[15vh] '>
   

    
    <div className='ml-[100vw] flex gap-8 '>

    <h1 className='mt-2 text-[5vw]'>Pour tout voir</h1>
    <div className=' pt-4'>
    <img src={Image1} alt="" className='rounded-full object-cover h-[12vh] w-64'/>
    </div>
    </div>
    <div className='flex gap-8 ml-7'>

    <h1 className='mt-2 text-[5vw]'>Pour tout voir</h1>
    <div className=' pt-4'>
    <img src={Image1} alt="" className='rounded-full object-cover h-[12vh] w-64'/>
    </div>
    </div>
    <div className='flex gap-8 ml-7'>

    <h1 className='mt-2 text-[5vw]'>Pour tout voir</h1>
    <div className=' pt-4'>
    <img src={Image1} alt="" className='rounded-full object-cover h-[12vh] w-64'/>
    </div>
   
</div>
</div>
</div>
<div 
onMouseEnter={()=>{
  MenuRef2.current.style.opacity="100"
}}
onMouseLeave={()=>{
  MenuRef2.current.style.opacity="0"
}}
className='cursor-pointer w-full border-t-2 border-b-2 border-white h-28 flex items-center justify-center'>
<h1 className='text-[7vw]'>Agence</h1>
<div ref={MenuRef2}  className=' absolute flex top-[33vh] pl-4 text-black  bg-[#d3fd50] overflow-x-hidden w-[300vw] opacity-0 h-[15vh]  '>
   

    
    <div className='ml-[100vw] flex gap-8 '>

    <h1 className='mt-2 text-[5vw]'>Pour tout voir</h1>
    <div className=' pt-4'>
    <img src={Image1} alt="" className='rounded-full object-cover h-[12vh] w-64'/>
    </div>
    </div>
    <div className='flex gap-8 ml-7'>

    <h1 className='mt-2 text-[5vw]'>Pour tout voir</h1>
    <div className=' pt-4'>
    <img src={Image1} alt="" className='rounded-full object-cover h-[12vh] w-64'/>
    </div>
    </div>
    <div className='flex gap-8 ml-7'>

    <h1 className='mt-2 text-[5vw]'>Pour tout voir</h1>
    <div className=' pt-4'>
    <img src={Image1} alt="" className='rounded-full object-cover h-[12vh] w-64'/>
    </div>
   
</div>
</div>
</div>
<div
onMouseEnter={()=>{
  MenuRef3.current.style.opacity="100"
}}
onMouseLeave={()=>{
  MenuRef3.current.style.opacity="0"
}}
className='cursor-pointer w-full border-t-2 border-b-2 border-white h-28 flex items-center justify-center'>
<h1 className='text-[7vw]'>contacts</h1>
<div ref={MenuRef3}  className=' absolute flex top-[48.2vh] pl-4 text-black  bg-[#d3fd50] overflow-x-hidden w-[300vw] opacity-0 h-[15vh]  '>
   

    
    <div className='ml-[100vw] flex gap-8 '>

    <h1 className='mt-2 text-[5vw]'>Pour tout voir</h1>
    <div className=' pt-4'>
    <img src={Image1} alt="" className='rounded-full object-cover h-[12vh] w-64'/>
    </div>
    </div>
    <div className='flex gap-8 ml-7'>

    <h1 className='mt-2 text-[5vw]'>Pour tout voir</h1>
    <div className=' pt-4'>
    <img src={Image1} alt="" className='rounded-full object-cover h-[12vh] w-64'/>
    </div>
    </div>
    <div className='flex gap-8 ml-7'>

    <h1 className='mt-2 text-[5vw]'>Pour tout voir</h1>
    <div className=' pt-4'>
    <img src={Image1} alt="" className='rounded-full object-cover h-[12vh] w-64'/>
    </div>
   
</div>
</div>
</div>
<div
onMouseEnter={()=>{
  MenuRef4.current.style.opacity="100"
}}
onMouseLeave={()=>{
  MenuRef4.current.style.opacity="0"
}}
className='cursor-pointer w-full border-t-2 border-b-2 border-white h-28 flex items-center justify-center'>
<h1 className='text-[7vw]'>Blogs</h1>
<div ref={MenuRef4}  className=' absolute flex top-[63.4vh] pl-4 text-black  bg-[#d3fd50] overflow-x-hidden w-[300vw] opacity-0 h-[15vh]  '>
   

    
    <div className='ml-[100vw] flex gap-8 '>

    <h1 className='mt-2 text-[5vw]'>Pour tout voir</h1>
    <div className=' pt-4'>
    <img src={Image1} alt="" className='rounded-full object-cover h-[12vh] w-64'/>
    </div>
    </div>
    <div className='flex gap-8 ml-7'>

    <h1 className='mt-2 text-[5vw]'>Pour tout voir</h1>
    <div className=' pt-4'>
    <img src={Image1} alt="" className='rounded-full object-cover h-[12vh] w-64'/>
    </div>
    </div>
    <div className='flex gap-8 ml-7'>

    <h1 className='mt-2 text-[5vw]'>Pour tout voir</h1>
    <div className=' pt-4'>
    <img src={Image1} alt="" className='rounded-full object-cover h-[12vh] w-64'/>
    </div>
   
</div>
</div>
</div>
</div>

          </div>
        </div>


    </div>
  )
}

export default NavMenu