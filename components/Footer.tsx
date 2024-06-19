import React from 'react'
import Shimmerbutton from './ui/shimmer-button'
import { IconHeartHandshake } from '@tabler/icons-react'
import { socialMedia } from '@/constants'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id="contact">
        <div className='flex flex-col items-center justify-center mx-10'>
            <h1 className='text-4xl md:text-6xl font-sans font-bold text-amber-500'> Fueling Connections: <span className='text-blue-300'> Together </span>, We Create.</h1>
            <a href="mailto:rehneetsingh300@gmail.com" className='pt-10 cursor-pointer'>
                <Shimmerbutton title='Get in Touch' icon={<IconHeartHandshake/>} position='left'/>
            </a>
        <div className='flex mt-16 justify-between items-center'>
            <div className='flex items-center md:gap-3 gap-6 justify-center'>
                {socialMedia.map((profile)=>(
                    <a key={profile.id} className='cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-200 bg-opacity-75  rounded-lg border border-amber-500 p-3 ' href={profile.link}>
                        <img src={profile.img} alt='profile.id' width={20} height={20}/>
                    </a>
                ))}
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer