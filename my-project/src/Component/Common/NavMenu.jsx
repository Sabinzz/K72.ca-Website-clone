import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image1 from '../Project/Image1.jpg'

const NavMenu = ({ onClose }) => {
  const marqueeRefs = useRef([])
  const menuItems = [
    { label: 'Projects', path: '/Projects' },
    { label: 'Agence', path: '/Agence' },
    { label: 'Contacts' },
    { label: 'Blogs' },
  ]

  useGSAP(() => {
    marqueeRefs.current.filter(Boolean).forEach((marquee) => {
      gsap.to(marquee, {
        xPercent: -21.9,
        repeat: -1,
        duration: 3.5,
        ease: 'linear',
      })
    })
  }, [])

  const showMarquee = (index) => {
    const marquee = marqueeRefs.current[index]
    if (marquee) marquee.style.opacity = '1'
  }

  const hideMarquee = (index) => {
    const marquee = marqueeRefs.current[index]
    if (marquee) marquee.style.opacity = '0'
  }

  return (
    <div className='fixed inset-0 z-[1000] bg-black overflow-x-hidden'>
      <button
        type='button'
        aria-label='Close navigation menu'
        onClick={onClose}
        className='relative pt-2 cursor-pointer'
      >
        <div className='bg-white h-[1.5px] absolute left-24 w-33 rotate-135 origin-top-left'></div>
        <div className='bg-white h-[1.5px] w-33 rotate-45 origin-top-left'></div>
      </button>

      <nav className='flex flex-col mt-30 text-white uppercase font-[font2]'>
        {menuItems.map((item, index) => {
          const label = <h1 className='text-[7vw]'>{item.label}</h1>

          return (
            <div
              key={item.label}
              onMouseEnter={() => showMarquee(index)}
              onMouseLeave={() => hideMarquee(index)}
              className='cursor-pointer w-full border-t-2 border-b-2 relative border-white h-28 flex items-center justify-center overflow-hidden'
            >
              {item.path ? (
                <Link to={item.path} onClick={onClose} className='relative z-10'>
                  {label}
                </Link>
              ) : (
                <span className='relative z-10'>{label}</span>
              )}

              <div
                ref={(element) => {
                  marqueeRefs.current[index] = element
                }}
                className='pointer-events-none absolute inset-0 z-20 flex pl-4 text-black bg-[#d3fd50] overflow-x-hidden w-[300vw] opacity-0 h-full'
              >
                {[0, 1, 2].map((repeatIndex) => (
                  <div
                    key={repeatIndex}
                    className={`${repeatIndex === 0 ? 'ml-[100vw]' : 'ml-7'} flex gap-8`}
                  >
                    <h1 className='mt-2 text-[5vw]'>Pour tout voir</h1>
                    <div className='pt-4'>
                      <img src={Image1} alt='' className='rounded-full object-cover h-[12vh] w-64' />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </nav>
    </div>
  )
}

export default NavMenu
