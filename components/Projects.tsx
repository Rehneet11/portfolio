"use client"
import React from 'react'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

const Projects = () => {
  return (
    <div className='pt-10 px-10' id="projects">
      <div className='font-sans font-bold text-5xl md:text-7xl flex justify-center gap-5 mb-10'>
        <span className='text-amber-400'>Recent</span>  <span className='text-blue-300'> Projects</span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-blue-300"
            >
              PINIT
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Pinit is a Real Time Collaborative White Board , built using Next Js.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/pinitphoto.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem 
            translateZ="110"
            className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 pt-5'>
                NextJS, Tailwind CSS, TypeScript, Clerk, Convex and LiveBlocks
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://pinit-three.vercel.app/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-amber-500"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/Rehneet11/pinit"
                target="__blank"
                className="px-4 py-2 rounded-xl dark:bg-amber-500 text-blue-900 text-xs font-bold"
              >
                Github Link
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-blue-300"
            >
              Munchit
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Munchit is a Full Stack Food Ordering and Restaurant Management Platform.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/munchitphoto.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem 
            translateZ="110"
            className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 pt-5'>
                MongoDB, Express.js, React.js, Node.js, Typescript, Tailwind CSS, Auth0, Stripe
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://munchit-frontend.onrender.com/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-amber-500"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/Rehneet11/munchit-frontend"
                target="__blank"
                className="px-4 py-2 rounded-xl dark:bg-amber-500 text-blue-900 text-xs font-bold"
              >
                Github Link
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  )
}

export default Projects
