import React from 'react'
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
const Card = ({cardData}) => {
  return (
    <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((card,index)=>(
          <div  className='flex flex-col w-full gap-3 rounded-xl border p-5 shadow' key={index}>
                  <section className='flex justify-between gap-2'>
                      <p className='text-sm'>{card.label}</p>
                      <card.icon className="h-5 w-5 text-gray-400"/>

                  </section>

                  <section className='flex flex-col gap-1'>
                      <h2 className='text-2xl font-semibold'>{card.amount}</h2>
                      <p className='text-xs text-gray-500'>{card.description}</p>
                  </section>
          </div>
        ))}
      </section>
  )
}

export default Card