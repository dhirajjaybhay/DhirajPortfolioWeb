import React from 'react'

const Footer = () => {
  return (
    <div className='border-t-2 border-gray-50 mt-20'>
      <div className='pt-10'>
      <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z"
                fill="white"
              />
            </svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Dhiraj Jaybhay
            </span>
          </a>
          <p className='pt-4 text-xl'>
            Front-end Web Developer
          </p>
      </div>
      <div className='flex justify-center py-6'>
        <p>
            @Copyright 2024. Made By <span className='text-purple-400'>
            Dhiraj

            </span>
        </p>
      </div>
    </div>
  )
}

export default Footer
