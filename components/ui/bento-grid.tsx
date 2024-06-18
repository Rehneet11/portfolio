"use client";
import { cn } from "@/lib/utils/cn";

import { BackgroundGradientAnimation } from "./background-gradiant-animation";

import GridGlobe from "./GridGlob";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/constants/confetti.json'
import Shimmerbutton from "./shimmer-button";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[21rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto md:p-10 p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  icon,
  imgClassName,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  icon?: React.ReactNode;
  imgClassName?: string;
  id:number;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["Mongo-db", "NextJS", "NodeJs"];
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('rehneetsingh300@gmail.com');
    setCopied(true);
  }

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={cn(
        "rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-amber-500 bg-white border border-transparent flex flex-col overflow-hidden",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-xl">
        {img && (
          <img
            src={img}
            alt={img}
            className={cn("object-cover w-full h-65 sm:h-84 pt-4", imgClassName)}
          />
        )}
        {id === 5 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 text-center">
              <p className="mb-4 text-5xl absolute flex items-center">
                Connect with Me
              </p>
              <div className="relative flex justify-center items-center">
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <div className=" mb-20 flex items-center justify-center">
              <Shimmerbutton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="mt-4"
              />
              </div>
            </div>
          </BackgroundGradientAnimation>
        )}
        {id === 6 && (
          <div className="flex items-center justify-center h-full w-full">
            <GridGlobe />
          </div>
        )}
        {id === 3 && (
          <div className="flex gap-4 justify-center py-4">
            <div className="flex flex-col gap-3">
              {leftLists.map((item, i) => (
                <span
                  key={i}
                  className="py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-amber-500"
                >
                  {item}
                </span>
              ))}
              <span className="py-2 px-3 rounded-lg text-center bg-amber-500"></span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="py-2 px-3 rounded-lg text-center bg-amber-500"></span>
              {rightLists.map((item, i) => (
                <span
                  key={i}
                  className="py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-amber-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {id !== 5 && (
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="p-4 flex flex-col space-y-2">
            <div className="flex items-center">
              {icon}
            </div>
            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2">
              {title}
            </div>
            <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
              {description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
