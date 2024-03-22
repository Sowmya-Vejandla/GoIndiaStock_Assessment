import { discussion } from '@/constants'
import Image from 'next/image'
import React from 'react'

const DiscussionForm = ({isSidebar,sidebar}) => {
  return (
    <div className={`discussionSection w-[60%] max-md:w-[100%] h-[100vh] relative duration-150 px-4 max-md:mt-10 scroll-mt-32 ${isSidebar && 'w-[50%] duration-150'} `}  id="discussionForm" >
        <div className={`sidebarArrow  fixed top-[44%]  left-0 bg-[#1e375f] w-4 h-20 cursor-pointer ${isSidebar && 'ml-[25.7%] max-md:ml-[60%] max-sm:ml-[50%] max-md:top-[44%] duration-200'} `} onClick={sidebar}>
        <Image className={`rounded-md -rotate-90 duration-150 mt-6  ${isSidebar && 'rotate-90 duration-150'}`} src={"/downarrow.png"} alt="downarrow" height={40} width={40}/>
        </div>
        <h2 className='text-red-400 text-3xl font-bold bg-slate-300 max-md:hidden w-[50%] max-md:w-[80%] p-2 items-center text-center ml-4 mt-4 shadow-lg'>DISCUSSION FOURM</h2>
        {discussion.map((items) => (
        <div key={items.name} className='mt-3 discussionContainer flex flex-col gap-16'>
        <div className={`discussionBlock bg-white py-4 rounded-md shadow-lg w-[100%] overflow-hidden `}>
          <div className='userDetails flex items-center gap-6'>
          <Image className={`rounded-md duration-150 ml-2 mt-2`} src={items.userUrl} alt="downarrow" height={40} width={40}/>
          <h3 className='max-md:text-sm max-sm:text-[12px]'>{items.userName}</h3>
          <p className={`bg-blue-500 rounded-xl px-3 text-sm text-white max-md:text-sm max-sm:text-[10px] `}>{items.type}</p>
          <p className={`text-blue-500  ${isSidebar ? 'ml-[40%]' : 'ml-[50%]'} max-md:ml-[40%] max-sm:ml-[10%] max-sm:text-[12px]`}>{items.time}</p>
          </div>
          <p className='commentSection mx-14 w-[70%] text-wrap max-md:text-sm  '>{items.post}</p>
          <div className='shareLike flex items-center gap-14 ml-16 max-md:text-[10px] max-md:gap-5'>
            <div className=' mt-3 gap-2 max-md:gap-1   flex items-center'>
            <Image className={`cursor-pointer rounded-md duration-150 `} src={"/heart.png"} alt="downarrow" height={20} width={20}/>
            <p>{items.likes}</p>
            </div>
            <div className=' mt-3 gap-2 max-md:gap-1  flex items-center'>
            <Image className={`cursor-pointer rounded-md duration-150 `} src={"/eye.jpg"} alt="downarrow" height={20} width={20}/>
            <p>{items.views}</p>
            </div>
            <div className=' mt-3 gap-2 max-md:gap-1  flex items-center'>
            <Image className={`cursor-pointer rounded-md duration-150 `} src={"/comment.jpg"} alt="downarrow" height={16} width={16}/>
            <p>{items.comments}</p>
            </div>
            <div className=' mt-3 gap-2 max-md:gap-1  flex items-center'>
            <Image className={`cursor-pointer rounded-md duration-150 `} src={"/share.png"} alt="downarrow" height={16} width={16}/>
            <p>share</p>
            </div>
          </div>
        </div>
        
      </div>
      ))}
      </div>
  )
}

export default DiscussionForm
