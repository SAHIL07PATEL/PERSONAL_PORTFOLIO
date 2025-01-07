import { Link } from "react-router-dom"
import Education from "./Education"
import Contact from "./Contact"
import { useEffect, useRef } from "react"
import Typed from "typed.js"


const Project = () => {

  const projects = [
    {
      imgUrl: "/images/Screenshot 2024-12-28 140255.png",
      projectName: "My Shop"
    },
    {
      imgUrl: "/images/portfolio.png",
      projectName: "My Portfolio"
    }
  ]

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["TO MY PROJECT SECTION,"],
      typeSpeed: 90,
      loop: true,
      loopCount: Infinity,
      cursorChar: "|"
    });
    return () => {
      typed.destroy();
    };
  }, [])


  return (
    <div>


      <div className='container w-[80%] mx-auto mt-16 flex flex-col lg:flex-row gap-11 justify-center lg:items-start items-center'>
        <div className="left-content lg:w-[50%] flex flex-col gap-10 py-16">
          <h1 className=' text-xl md:text-3xl font-bold'><span className='text-purple-700'>WELOCOME </span> <span ref={el} /></h1>
          <p className="font-semibold md:text-[18px]">A project page is a dedicated webpage or section within a website that provides detailed information about a specific project. It is typically used to showcase the objectives, scope, progress, and outcomes of a particular project.</p>

          <div className="buttons flex max-sm:flex-col  lg:flex-row items-center lg:items-center gap-6 mt-5">
            <div>
              <a href="https://github.com/SAHIL07PATEL" className="bg-gradient-to-r from-gray-600 to-black py-3 px-10 hover:from-black hover:to-gray-600 transition-all duration-200 ease-in-out  font-semibold text-white rounded-lg"><i className="ri-github-fill pr-2 text-[18px]"></i>GITHUB</a>
            </div>
            <a to="" href="https://github.com/SAHIL07PATEL" className="bg-gray-300 hover:bg-gradient-to-r hover:from-black hover:to-gray-600 hover:text-white transition-all duration-200 ease-in-out py-3 px-10  font-semibold  rounded-lg">Explore More</a>
          </div>
        </div>

        <div className="image lg:w-[40%]">
          <img src="../../images/home-banner.webp" className='' alt="" />
        </div>
      </div>

      <div className="w-[80%] mx-auto relative heading flex justify-center items-center mt-20 mb-11 border bg-gray-100  p-10">
        <h1 className="text-4xl md:text-[80px] font-extrabold -tracking-tighter opacity-[.1]">MYPROJECTS</h1>
        <p className="text-2xl md:text-4xl font-medium absolute opacity-[.8]">MY PROJECTS</p>
      </div>

      <div className="projects w-[80%] mx-auto py-8 flex flex-col md:flex-row gap-20 justify-around">
        {
          projects.map((item) => (
            <>
              <div className="w-full  md:w-[50%] border-2 rounded-lg shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <img
                  src={item.imgUrl}
                  className="w-full lg:h-76 object-cover rounded-t-lg"
                  alt="Project Screenshot"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold text-gray-800">{item.projectName}</h3>
                  <Link
                    to="#"
                    className="text-blue-500 hover:underline mt-2 block text-sm"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </>
          ))
        }
      </div>

      <Education />
      <Contact />



    </div>
  )
}

export default Project
