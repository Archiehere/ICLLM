import React from 'react'
import Image from 'next/image'
import { ptSans } from '@/utils/fonts'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='flex w-[100%] h-[90vh] xs:h-[80vh] md:h-[100vh]'>
        <div className={`text-white mt-[10vh] h-auto w-[50vw] bg-[#191919] hidden md:flex md:flex-col justify-center ${ptSans.className}`}>
            <div className='w-[80%] ml-auto'>
              <div className='text-[2rem] lg:text-[2.5rem] font-bold tracking-widest py-10 leding-[2rem] lg:leading-[3.5rem] w-[85%]'>
                INTERNATIONAL CONFERENCE ON LARGE LANGUAGE MODELS
              </div>
              <div className='text-xl w-[70%]'>
                Organised by IT Department ,AKGEC Ghaziabad
              </div>
              <div className='text-lg w-[70%]'>Jan 17-23,2024</div>
              <div className='pt-8'>
                <Link href='' className='px-12 py-4 bg-[#1983ff]'>Register</Link>
              </div>
            </div>
        </div>
        <Image
            className='mt-[10vh] w-[50vw] h-auto hidden md:block'
            src='/conf.png'
            alt='hero'
            width={730}
            height={730}
         />
         <div className='mt-[20vh] xs:mt-[15vh] md:hidden text-white' style={{
          backgroundImage: 'url("conf.png")'
         }}>
            <div className='w-[80%] ml-5'>
              <div className='text-[1.5rem] font-bold tracking-widest py-10 leding-[2rem] w-[90%]'>
                INTERNATIONAL CONFERENCE ON LARGE LANGUAGE MODELS
              </div>
              <div className='text-lg font-bold'>
                Organised by IT Department, AKGEC Ghaziabad
              </div>
              <div className='text-lg w-[70%]'>Jan 17-23,2024</div>
              <div className='pt-8'>
                <Link href='' className='text-lg px-12 py-4 bg-[#1983ff]'>Register</Link>
              </div>
            </div>
         </div>
    </div>
  )
}

export default Hero