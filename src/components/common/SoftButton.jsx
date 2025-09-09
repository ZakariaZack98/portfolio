import React from 'react'

const SoftButton = ({label, clickHandler, colorClass}) => {
  return (
    <button className={`${colorClass} rounded-lg md:px-8 px-5 md:py-3 py-2 border text-white cursor-pointer font-medium`} onClick={clickHandler ? clickHandler : null}>
      <p className='hover:opacity-50'>{label}</p>
    </button>
  )
}

export default SoftButton
