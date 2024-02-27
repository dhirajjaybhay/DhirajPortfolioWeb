import React from 'react'

const Experience = () => {
  return (
    <div className='pt-20' id='experience'>
        <div className="flex">
        <h1 className="text-4xl font-bold">
          <span className="text-purple-400 pr-1">#</span>
          <span className="home">Experience</span>
        </h1>
        <div className="pt-5 ml-2">
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            width="120"
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
      <div className='pt-10'>
        <div>
            <p className='text-3xl font-bold'>
            Software Developer (Intern)
            </p>
            <p className='pt-6 font-bold text-2xl'>
            Destek Infosolutions Pvt Ltd. Pune | June 2023- September 2023
            </p>
            <ul className='pt-6'>
                <li>1.Designing, maintaining, and building the reusable, efficient, and reliable angular code</li>
                <li>2.Develop and test software using Angular</li>
                <li>3.Assisting in maintaining and updating existing applications and modules</li>
                <li>4.Working on Rest API's using Angular</li>
                <li className='text-blue-500'><a href="https://drive.google.com/file/d/1q5LYoo4dbxKIyl_AptOZWrEoTELMe-pk/view" target='_blank'>Experiance Letter</a></li>
            </ul>
        </div>
        <div>
        <p className='text-3xl font-bold pt-10'>
            Projects
            </p>
            <ul className='pt-6'>
                <li>1.ViaExam : Online Exam Management</li>
                <li>2.Anubandh : Marriage matrimony website</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience
