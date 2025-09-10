import Link from 'next/link'
import React from 'react'
import GradientButton from './GradientButton'
import _ from '@/lib/lib'

const Footer = () => {

  const footerLinks = _.footerLinkGroup;

  return (
    <div className='footer container mx-auto border border-[rgba(255,255,255,0.38)] rounded-2xl pb-10'>
      <div className="top flex flex-col lg:items-start items-center gap-y-5 border-b border-[rgba(255,255,255,0.38)] p-10">
        <h1 className='text-4xl md:text-5xl font-bold lg:max-w-6/10 max-w-full text-center lg:text-start leading-10 lg:leading-14'>Like what you see? Reach out <u className='text-blue-500 cursor-pointer'>via email</u> to collaborate </h1>
        <Link href={'/contact'}>
          <GradientButton label={'Schedule Call'}/>
        </Link>
      </div>
      <div className="bottom flex flex-wrap md:flex-nowrap gap-5 md:gap-0 justify-between p-10">
        <div className="left flex flex-col justify-start md:items-between gap-y-2">
          <h5 className='font-bold text-lg'>Sadee Muhammad Zakaria</h5>
          <p className='opacity-50'>&copy; 2025 | All rights reserved</p>
        </div>
        <div className="right flex gap-x-10">
          {
            footerLinks?.map(group => (
              <div key={group.name} className='flex flex-col items-end gap-y-2 text-sm md:text-base'>
                <h5 className='text-lg font-semibold'>{group.name}</h5>
                {
                  group.links?.map(link => (
                    <Link key={link.label} href={link.path} target={link.path.startsWith('https://') ? '_blank' : '_self'} className='opacity-70 text-sm md:text-base hover:text-blue-500'>{link.label}</Link>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Footer
