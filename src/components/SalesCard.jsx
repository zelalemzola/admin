import React from 'react'

const SalesCard = ({name,email,sellAmount}) => {
   
  return (
    <div className='flex flex-wrap items-center justify-between gap-3'>
     <section className='flex justify-between gap-3'>
        <div className='h-12 w-12 rounded-full bg-gray-100 p-1'>
            <img src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${name}`} width={200} height={200} alt="avatar" />
        </div>

        <div className='text-sm'>
            <p>{name}</p>
            <div className='text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400'>
                {email}
            </div>
        </div>
        
     </section>
    <p>{sellAmount}</p>
    </div>
  )
}

export default SalesCard