import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ptSans } from '@/utils/fonts'

const AboutAkgec = () => {
  return (
    <div id='aboutakg'  className={`flex flex-col md:flex-row ${ptSans.className}`}>
        <div className='w-full md:w-[60%] p-4 pt-[10vh] md:p-[4rem] md:pr-[6rem]'>
            <div className='text-4xl font-semibold'>About Akgec</div>
            <Image
             className='pt-10 md:hidden'
             src='/akg.png'
             alt='akgec'
             width={250}
             height={544}
            />
            <div className='mt-8 mb-8 md:mb-16 text-xl'>Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad is affiliated to Dr. A.P.J.
                Abdul Kalam Technical University, Lucknow, India and is approved by the All-India
                Council for Technical Education.<br/> The college was established in 1998 and offers B. Tech
                Courses in ten disciplines of Engineering. The College also offers M. Tech in Computer
                Science & Engineering, Electronics  Communication Engineering, Electrical and
                Electronics Engineering, Mechanical Engineering and Automation & Robotics. The college strives for excellence and has been consistently maintaining excellent academic results and placements.
            </div>
            <Link href='https://www.akgec.ac.in/about/' className='text-xs text-[#1983FF] px-12 py-4 border border-[#1983FF]'>Read More...</Link>
            </div>
        <div className='w-[40%] hidden md:block'>
        <Image
            className='py-10 pr-16'
            src='/akg.png'
            alt='akgec'
            width={488}
            height={544}
         />
        </div>
    </div>
  )
}

export default AboutAkgec