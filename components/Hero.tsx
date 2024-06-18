import React from 'react'
import { BackgroundBeams } from './ui/background-beams'
import { TextGenerateEffect } from './ui/text-generate-effect'
import Shimmerbutton from './ui/shimmer-button'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className=" h-screen w-full  bg-black relative flex flex-col items-center justify-center antialiased">
      <div className='flex justify-center relative my-20 z-10 '>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center'>
        <div className="max-w-2xl mx-auto p-4">
        <img src='heroImg.jpg' className='h-[300px]'/>
        
      </div>
          <h2 className='text-amber-500 uppercase tracking-widest text-center text-xs max-w-80'>
          Building Seamless Digital Experiences from Front to Back
          </h2>
          <TextGenerateEffect words="Every Line of Code tells a Story" className='text-center text-[40px] md:text-5xl lg:text-6xl md:whitespace-nowrap'/>
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-amber-500'> Hi, I am Rehneet Singh, a Full Stack Web Developer from India</p>
          <a href="#about"><Shimmerbutton title='Projects' icon={<FaLocationArrow/>} position='right'/></a>
        </div>
      </div>
      
      
      <BackgroundBeams />
      
    </div>
    
  )
}

export default Hero