import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import Card from '../Agence/Card.jpg'
import Card1 from '../Agence/Card1.jpg'
const UpperPortion = () => {
  const SecondImageRef = useRef()
  const ChangeBgRef = useRef()
    const ImageDivRef = useRef()
    const ImageRef=useRef()
    const images = [
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007',
    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64'
  ];
  gsap.registerPlugin(ScrollTrigger)
 
  useGSAP(()=>{
    gsap.to(ImageDivRef.current,{
        scrollTrigger:{
            trigger:ImageDivRef.current,
        
            start:'top 13%',
            end:'top -100%',
            pin:true,
            scrub:1,

            onUpdate:((elem)=>{
                let ImageIndex
                if(elem.progress<1){

                     ImageIndex=Math.floor(elem.progress*images.length)
                }
                else{
                   ImageIndex=images.length-1;
                }
                ImageRef.current.src=images[ImageIndex]


            })
        }
    }
    )
gsap.to(ChangeBgRef.current,{
  backgroundColor:'#000000',
  color:'#ffffff',
  duration:'2',
  scrollTrigger:{
    trigger:ChangeBgRef.current,
  
   start: "top 0%",    // when section enters screen
    end: "top 20%", 
    
    scrub:'3',

  },
 
})
gsap.to('.marque1',{
  xPercent:-100,
  repeat:-1,
  duration:10,
  ease:'linear',
})
gsap.from('.marque2',{
  xPercent:-148.3,
  repeat:-1,
  duration:10,
  ease:'linear',
 
})
gsap.to('.MarqueRef',{
opacity:1,

  scrollTrigger:{
    trigger:'.MarqueRef',
    start:'top 90%',
    end:'top 40%',
    scrub:true,
    }
})
gsap.to('.MarqueRef2',{
opacity:1,

  scrollTrigger:{
    trigger:'.MarqueRef2',
   
    start:'top 80%',
    end:'top 40%',
    scrub:true,
    }
})

   


  })

  

  return (
    <div className='h-[200vh] w-screen'>
        <div>
            
            <div className='relative mt-80 uppercase text-center text-[21vw] leading-[275px] z-100 '>
                <h1 className='flex flex-col'>Soixan7e Douze
</h1>
            </div>
            <div ref={ImageDivRef} className='h-[42vh] w-[15vw] rounded-2xl overflow-hidden absolute top-[13vh] left-[30vw]'>
<img ref={ImageRef} className='object-cover' src={images[1]} alt="" />
            </div>
            <div className='text-[4vw] leading-[7.5vh]   mt-8 ml-[35vw] font-[font2]'>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
            </div>
            
        </div>
        <div ref={ChangeBgRef} className='  h-[200vh] mt-96 flex flex-col justify-center items-center'>
<div className=' h-[99vh] w-[30vw] rounded-2xl object-cover pt-2'>
<div >
<div >

<img src={Card} alt="no" className='z-100 w-full h-full object-cover rounded-2xl relative'/>
</div>

{/* marque effec */}
<div className='MarqueRef w-full overflow-hidden opacity-0'>
  <div className='marque1 flex justify-between text-[10vw] absolute w-full top-[275vh] left-0' >
<h1 className='text-[#d3fd50]'>ISABELLE</h1>
<h1 className='text-[#d3fd50] ml-[60vw]'>ISABELLE</h1>



  </div>
  {/* Second marque */}
  <div className='marque2 h-50  absolute w-full top-[320vh] right-0 flex gap-16  z-200'>
    <div className='flex gap-16 w-full mr-[50vw]'>

    <h1 className='text-[#d3fd50] text-[10vw] '>BEAUCHEMINE</h1>
    <p className='mt-[140px] text-4xl whitespace-nowrap '>DIRECTOR PRINCIPAL</p>
    </div>
    <div className=' flex gap-16 w-full '>
       <h1 className='text-[#d3fd50] text-[10vw] '>BEAUCHEMINE</h1>
    <p className='mt-[140px] text-4xl whitespace-nowrap'>DIRECTOR PRINCIPAL</p>
    </div>
  </div>

</div>
{/* //Marque end */}
</div>

</div>
<div className='-mt-30 h-[99vh] w-[30vw] rounded-2xl shadow-2xl z-300 '>
  <div className='ImageRef'>
<img ref={SecondImageRef}  src={Card1} alt="no" className='z-10 w-full h-full object-cover rounded-2xl relative' />
  </div>
  {/* Marque Effect */}
  <div className='w-full overflow-hidden MarqueRef2 opacity-0 '>
  <div className='z-0 marque1 flex justify-between text-[10vw] absolute w-full top-[354vh] left-0 ' >
<h1 className='text-[#d3fd50]'>ISABELLE</h1>
<h1 className='text-[#d3fd50] ml-[50vw]'>ISABELLE</h1>



  </div>
  {/* Second marque */}
  <div className='marque2 h-50  absolute w-full top-[400vh] right-0 flex gap-16  z-200'>
    <div className='flex gap-16 w-full mr-[50vw]'>

    <h1 className='text-[#d3fd50] text-[10vw] '>BEAUCHEMINE</h1>
    <p className='mt-[140px] text-4xl whitespace-nowrap '>DIRECTOR PRINCIPAL</p>
    </div>
    <div className=' flex gap-16 w-full '>
       <h1 className='text-[#d3fd50] text-[10vw] '>BEAUCHEMINE</h1>
    <p className='mt-[140px] text-4xl whitespace-nowrap'>DIRECTOR PRINCIPAL</p>
    </div>
  </div>

</div>

</div>
</div>


    </div>
  )
}

export default UpperPortion
