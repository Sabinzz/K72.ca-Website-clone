import React from 'react'

const Video = () => {
  return (
    <div>
        <video src="public/Video1.mp4" className='lg:w-screen w-screen lg:h-screen  h-screen object-cover ' autoPlay loop muted></video>
    </div>
  )
}

export default Video