import React from 'react'

const SoftButton = ({label, clickHandler, colorClass}) => {
  return (
    <button className={`${colorClass} rounded-lg px-8 py-3 border text-white cursor-pointer font-medium`} onClick={clickHandler ? clickHandler : null}>
      <p className='hover:opacity-50'>{label}</p>
    </button>
  )
}

export default SoftButton
