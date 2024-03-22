"use client"
import Image from 'next/image';
import React from 'react'
import { marketstories } from '@/constants'

const marketStories = ({isSidebar}) => {
  return (
    
      <div className={`marketStoriesSection w-[40%] max-md:w-[100%] h-[100vh] duration-150 scroll-mt-10 py-3  ${isSidebar && 'w-[25%] duration-150'} `} id="marketStories">
      <h2 className='text-red-400 text-2xl mb-10 font-bold bg-slate-300 mx-auto w-[50%] max-md:w-[60%] p-1 items-center text-center md:text-left shadow-lg'>MARKET STORIES</h2>
      <div className='allStories flex flex-col gap-3 -mt-8'>
        {marketstories.map((items) => (
        <div className={`storyCard w-[80%] max-md:h-[20rem] h-[14rem]  ${isSidebar ? "md:w-[63%]" : "md:w-[40%]" }  bg-white mx-auto border-4 shadow-lg pb-3 overflow-hidden`}>
          <Image className={`cursor-pointer duration-150 w-[100%] `} src={items.storuUrl} alt="downarrow" height={100} width={100}/>
          <h5 className='storyTitle mt-1 font-bold text-[12px] ml-4 max-sm:text-[18px]'>{items.storyTitle}</h5>
          <p className='storyAbout ml-4 w-[90%] text-[10px] mt-1 max-sm:text-[14px]'>{items.about}</p>
        </div>
        ))}
      </div>
      
      </div>
  )
}

export default marketStories
