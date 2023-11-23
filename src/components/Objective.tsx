import React from 'react'

const objectives = [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non elementum leo, quis congue quam. Pellentesque id feugiat turpis, sed dapibus nunc. Suspendisse dictum tempor magna' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non elementum leo, quis congue quam. Pellentesque id feugiat turpis, sed dapibus nunc. Suspendisse dictum tempor magna' }, 
]

const Objective = () => {
  return (
    <div className='text-white w-full h-auto py-6 px-4 md:px-[5rem] bg-[#191919]'>
        <div className='text-xl md:text-3xl font-semibold mt-6 mb-8'>Objectives of Conference</div>
        <div className='flex flex-col md:flex-row w-full'>
            {objectives.map((obj,index) => {
                return (
                    <div key={index} className='bg-[#282b30] w-[95%] md:w-[38%] text-lg md:text-xl font-thin py-8 px-7 md:mr-8 mb-6'>{obj.text}</div>
                )
            })}
        </div>
    </div>
  )
}

export default Objective