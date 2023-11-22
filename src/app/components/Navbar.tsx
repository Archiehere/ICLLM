'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { openSans, oswald } from '../utils/fonts'

const navLinks = [
    { name: 'Home', link: '#' },
    { name: 'About AKGEC', link: '#aboutakg' },
    { name: 'Comittee', link: '#comittee' },
    { name: 'Keynote Speakers', link: '#speakers' },
]

const Navbar = (props: any) => {
    const {page=''} = props
    const [expanded, setExpanded] = React.useState(false)

    const handleClick = () => {
        setExpanded(!expanded)
    }

    return (
        <div className={`w-[100%]  fixed flex flex-col justify-center items-center md:p-1 text-[#333] bg-[#fbfbfb] border-b-[1px] ${openSans.className}`}>
            <div className='flex w-[100vw] md:w-[55vw] h-[10vh] md:p-0 justify-between items-center'>
                <Image
                    className='px-1 py-1 ml-auto md:ml-0 h-15  hidden md:block' 
                    src='Azadi.svg'
                    alt='Azadi'
                    width={70}
                    height={70}
                />
                <Image
                    className='px-1 py-1 ml-auto md:ml-0 h-15 ' 
                    src='akglogo.svg'
                    alt='akglogo'
                    width={70}
                    height={70}
                />
                <div className='flex-col px-2'>
                    <div className={`font-sans font-bold text-sm md:text-xs lg:text-sm w-auto ${oswald.className}`}>Ajay Kumar Garg Engineering College</div>
                    <div className='text-xs  hidden md:block'>(Affiliated to Dr. APJ Abdul Kalam Technical University, Lucknow, UP, College Code - 027)</div>
                </div>
                <Image
                    className='px-1 py-1 ml-auto md:ml-0 h-15  hidden md:block' 
                    src='25Years.svg'
                    alt='25Years'
                    width={70}
                    height={70}
                />
                <Image
                    className='px-1 py-1 ml-auto md:ml-0 h-15 hidden md:block' 
                    src='NAAC.svg'
                    alt='NAAC'
                    width={70}
                    height={70}
                />
                <div className={`py-7 px-8 ml-auto border-l-[1px] ${(expanded?'':'')} md:hidden`} onClick={handleClick}>
                    {
                    !(expanded)?
                    <Image
                        src='ham.svg'
                        alt='ham-menu'
                        width={20}
                        height={20}
                    />:
                    <Image
                        src='cross.svg'
                        alt='cross'
                        width={20}
                        height={20}
                    />}
                </div>
            </div>
            <div className={`flex flex-col border-t-[1px] md:flex-row [&>*]:mb-1 [&>*]:mt-[24px] md:[&>*]:mt-0 md:[&>*]:mb-0 w-[100vw] py-1 justify-center items-center text-[12px] lg:text-[16px] ${(!(expanded)?'hidden':'')} md:flex`}>
                <div>
                <Image
                    className='px-1 mr-6 pt-1 hidden md:block' 
                    src='ICLLM.svg'
                    alt='ICLLM'
                    width={90}
                    height={40}
                />
                </div>
                {navLinks.map((link, index) => {
                    return (
                        <Link key={index} className={"hover:font-bold w-[9rem] text-center "+((page==="home")?"font-bold":"")} href={link.link}>
                            {link.name}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar