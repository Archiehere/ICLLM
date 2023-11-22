'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { openSans, oswald } from '../utils/fonts'

const Navbar = (props: any) => {
    const {page=''} = props
    const [expanded, setExpanded] = React.useState(false)

    const handleClick = () => {
        setExpanded(!expanded)
    }

    return (
        <div className={`w-[100%]  fixed flex flex-col justify-center items-center md:p-1 text-[#333] bg-[#fbfbfb] border-b-[1px] ${openSans.className}`}>
            <div className='flex w-[55vw] h-[10vh] md:p-0 border-b-[1px] justify-between items-center'>
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
                    <div className={`font-sans font-bold text-sm md:text-xs lg:text-sm w-[40%]  md:w-auto ${oswald.className}`}>AJAY KUMAR GARG ENGINEERING COLLEGE</div>
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
                    className='px-1 py-1 ml-auto md:ml-0 h-15  hidden md:block' 
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
            <ul className={`flex flex-col md:flex-row [&>*]:mb-1 [&>*]:mt-[24px] md:[&>*]:mt-0 md:[&>*]:mb-0 w-[100vw] py-1 justify-center items-center text-[12px] lg:text-[16px] ${(!(expanded)?'hidden':'')} md:flex`}>
                <li>
                <Image
                    className='px-1 mr-6 pt-1' 
                    src='ICLLM.svg'
                    alt='ICLLM'
                    width={90}
                    height={40}
                />
                </li>
                <li className={"hover:font-bold w-[9rem] text-center "+((page==="home")?"font-bold":"")}>
                    <Link href="/">Home</Link>
                </li>
                <li className={'hover:font-bold w-[12rem] text-center '+((page=='patroninchief')?"font-bold":"")}>
                    <Link href="/patroninchief">About AKGEC</Link>
                </li>
                <li className={'hover:font-bold w-[12rem] text-center '+((page=='editorialteam')?"font-bold":"")}>
                    <Link href="/editorialteam ">Committee</Link>
                </li>
                <li className={'hover:font-bold w-[12rem] text-center '+((page=='editorialboard')?"font-bold":"")}>
                    <Link href="/editorialboard">Keynote Speakers</Link>
                </li>
                
            </ul>
        </div>
    )
}

export default Navbar