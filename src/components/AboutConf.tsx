import React from 'react'
import { ptSans } from '@/utils/fonts'

const AboutConf = () => {
  return (
    <div className='py-[3rem] px-[2rem] md:px-[5rem]'>
        <div className={`text-2xl md:text-4xl font-semibold mt-3 mb-6 ${ptSans.className}`}>About Conference</div>
        <div className='text-base md:text-xl'>The advent of large language models, powered by advances in deep learning and neural networks, has revolutionized the way we interact with and understand language. These models have demonstrated remarkable capabilities in natural language understanding, generation, and translation, opening up new vistas in fields as diverse as education, healthcare, communication, and entertainment. They have also ignited discussions about the ethical, societal, and environmental implications of their deployment, raising profound questions that demand thoughtful examination.
        <br/><br/>The international conference aims to serve as a bond for researchers, industry practitioners, policymakers, and thought leaders from around the world to engage in a multifaceted dialogue. It will investigate the ethical considerations inherent to this technology, addressing issues of bias, fairness, transparency, and privacy. It will also consider the broader implications for society, including the role of large language models in shaping public discourse and influencing decision-making.
        <br/><br/>The International Conference on Large Language Models (ICLLM) is the premier forum for exchanging news and research results on the theory and applications of Large Language Models and allied technologies.
    </div>
    </div>
  )
}

export default AboutConf