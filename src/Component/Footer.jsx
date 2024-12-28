import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='mt-24 bg-gradient-to-br from-blue-700 via-purple-700 to-purple-700 text-transparent text-white '>

        <div className='footer-content w-[80%] mx-auto py-16'>

          <div className="  flex flex-col md:flex-row items-start md:flex-wrap gap-9 max-lg:gap-12 justify-around">
            <div className='space-y-8 w-full md:w-[40%]'>
              <p className='text-3xl font-semibold'>SAHIL DHOLARIYA.</p>
              <p className='font-semibold'>A group of creative designers and software developers who work together to provide the best work possible and assist clients in turning their concepts into successful realities.</p>
              <div className="icons">
                <i className="ri-linkedin-box-fill text-3xl cursor-pointer"></i>
                <i className="ri-instagram-line text-3xl cursor-pointer"></i>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-2xl font-bold">About Us</p>
              <div className="flex flex-col gap-3 font-medium text-white">
                <p className="cursor-pointer hover:underline w-fit transition-all duration-300">
                  About Us
                </p>
                <p className="cursor-pointer hover:underline w-fit transition-all duration-300">
                  Projects
                </p>
                <p className="cursor-pointer hover:underline w-fit transition-all duration-300">
                  Technologies
                </p>
              </div>
            </div>


            <div className='flex flex-col gap-7'>
              <p className='text-xl font-bold'>Services</p>
              <div className='flex flex-col gap-2 font-semibold'>
                <p className='cursor-pointer hover:underline w-fit transition-all duration-300'>Website Development</p>
                <p className='cursor-pointer hover:underline w-fit transition-all duration-300'>Website Designing</p>
              </div>
            </div>

            <div className='flex flex-col gap-7'>
              <p className='text-xl font-bold'>Contact Information</p>
              <div className='flex flex-col gap-2 font-semibold'>
                <p ><i className="ri-phone-fill hover:underline"></i><span className='cursor-pointer hover:underline w-fit transition-all duration-300'>+91 9106027262</span></p>
                <p><i className="ri-mail-line"></i> <span className='cursor-pointer hover:underline w-fit transition-all duration-300'>sahildholariya070@gmail.com</span></p>
                <p ><i className="ri-map-pin-line"></i>  <span className='cursor-pointer hover:underline w-fit transition-all duration-300'>Navrangpura, Ahmedabad </span></p>
              </div>
            </div>
          </div>


        </div>
        <div className="copyright w-full h-16 flex justify-center items-center border-spacing-4 border-t shadow-lg">
          <p className=' font-semibold text-sm md:text-[16px]'>
            Copyright @2024 Sahil Dholariya All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
