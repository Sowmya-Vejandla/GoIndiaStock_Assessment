import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = ({isSidebar,sidebar}) => {
  return (
    <div className={`sidebar w-0 max-md:fixed z-[9999] bg-[#1e375f] max-md:w-0 h-[100vh] ${isSidebar && 'w-[35%] duration-150 max-md:w-[60%] max-sm:w-[50%]'} duration-150`} >
      
        <div className={`mt-7 flex op opacity-0 justify-between px-5 items-center ${isSidebar && 'opacity-100'}`}>
            <Image className='rounded-full max-sm:w-4' src={"/user-acc.jpg"} alt="user" height={40} width={40}/>
            <h2 className='font-bold text-2xl absolute ml-12 max-sm:ml-5 text-white max-sm:text-[12px]'>Hello, User</h2>
            <Image className='rounded-full max-sm:w-4' src={"/notification.png"} alt="notification" height={40} width={40}/>
            <Image className='rounded-full max-sm:w-4 hidden crossMenu rotate-90 cursor-pointer' src={"/downarrow.png"} alt="notification" height={30} width={30} onClick={sidebar}/>
        </div>
        <hr className='mt-3'/>
        <div className={`flex opacity-0 items-center gap-6 max-sm:gap-2 mt-4 ml-5 ${isSidebar && 'opacity-100'} hover:bg-black duration-150 rounded-lg p-3`}>
        <Image className='rounded-md max-sm:w-5' src={"/message.png"} alt="message" height={30} width={30}/>
            <Link href="#discussionForm" className='text-white text-xl font-bold  max-sm:text-[14px]'>DiscussionForm</Link>
            <Image className='rounded-md ml-20 cursor-pointer max-sm:ml-1 max-sm:w-3' src={"/downarrow.png"} alt="downarrow" height={20} width={20}/>
        </div>
        <div className={`flex opacity-0 items-center gap-6 max-sm:gap-2 mt-4 ml-5  ${isSidebar && 'opacity-100'} hover:bg-black duration-150 rounded-lg p-3`}>
        <Image className='rounded-full max-sm:w-5 bg-white' src={"/dollar.png"} alt="dollar" height={30} width={30}/>
            <Link href="#marketStories" className='text-white text-xl font-bold  max-sm:text-[14px] '>Market Stories</Link>
        </div>
        <div className={`flex opacity-0 flex-col  gap-3 mt-5 ml-20 max-sm:ml-10 max-sm:gap-7   ${isSidebar && 'opacity-100'} `}>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold max-sm:text-[12px]  '>Sentiment</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold max-sm:text-[12px]  '>Market</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold max-sm:text-[12px]  '>Sector</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold max-sm:text-[12px]  '>Watchlist</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold max-sm:text-[12px]  '>Events</h5>
            <h5 className='text-[17px] text-white cursor-pointer font-semibold max-sm:text-[12px]  '>News/Interview</h5>
        </div>
      </div>
  )
}

export default Sidebar
