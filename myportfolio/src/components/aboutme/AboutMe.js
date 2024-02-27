import React from 'react'
import aboutMe from '../../assets/Group 50.png'

const AboutMe = () => {
  return (
    <div className='pt-20 '>
        <div className="flex">
        <h1 className="text-4xl font-bold">
          <span className="text-purple-400 pr-1">#</span>
          <span className="home">About Me</span>
        </h1>
        <div className="pt-5 ml-2">
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="4"
            viewBox="0 0 239 2"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M239 1.5H0V0.5H239V1.5Z"
              fill="#C778DD"
            />
          </svg>
        </div>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-2/4'>
            <p className='pt-10 md:pt-20'>
            Hello, i’m Dhiraj!
            </p>
            <p className='pt-8 md:pt-16'> 
            I’m a self-taught front-end developer based in Kharghar, Navi Mumbai. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 
            </p>
            <p className='pt-8 md:pt-16'>
            Transforming my creativity and knowledge into a websites has been my passion for over a year.I always strive to learn about the newest technologies and frameworks.
            </p>
        </div>
        <div className='w-full md:w-2/4 flex justify-center pt-5 md:pt-0'>
             <img src={ aboutMe} alt="" className='' />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
