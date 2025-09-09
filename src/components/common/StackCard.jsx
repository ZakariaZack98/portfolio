import React from 'react'

const StackCard = ({name, desc, logo, logoBgColor}) => {
  return (
    <div className='p-2 h-20 rounded-lg bg-[rgba(255,255,255,0.11)] flex gap-x-4'>
      <picture className={`flex justify-center items-center rounded-md aspect-square`} style={{backgroundColor : logoBgColor}}>
        <img src={logo} alt={`${name} logo`} className='w-9 object-cover object-center'/>
      </picture>
      <div className="text">
        <h5 className='text-lg font-medium'>{name}</h5>
        <p className='opacity-75 text-sm'>{desc}</p>
      </div>
    </div>
  )
}

export default StackCard
