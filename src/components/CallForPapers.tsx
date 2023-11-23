import React from 'react'
import { ptSans } from '@/utils/fonts';

const Topics = ['Language','Deep Learning','Natural Language Processing','Pattern Mining','Natural Language Processing','Pattern Recognition' , 'Data Engineering'];

function CallForPapers() {
  return (
    <div className={`w-[100%]  bg-[#191919] text-white p-3 md:p-[4rem] ${ptSans.className}`}>
      <h2 className='text-3xl font-semibold pb-4'>Call For Papers</h2>
      <h4> A set of topics within the scope of ICLLM -2024 includes (but is not limited to):</h4>

      <div className="w-full md:w-[80%] pt-8 flex flex-wrap gap-3 md:gap-8">
        {Topics.map((topic,index) => (
          <div key={index}  className="bg-[#282B30] hover:bg-[#191919] border-2 border-transparent hover:border-[#282B30] text-sm p-2 px-3 md:text-xl md:p-4 md:px-6 rounded-sm">
            <p>{topic}</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default CallForPapers
