import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import Education from "./Education";
import Contact from "./Contact";

const About = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["MY NAME IS SAHIL DHOLARIYA,"],
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
      <div className="container w-[80%] mx-auto mt-16 flex flex-col md:flex-row gap-11 justify-center lg:items-start items-center">
        <div className="left md:w-[61%] flex flex-col gap-7 md:gap-11 justify-center">
          <p className='text- lg:text-3xl lg:pt-11 font-semibold'> <span className="text-purple-700 tracking-[2px]">HELLO!</span> 👋  <span ref={el} /></p>
          <p className="text-gray-700 leading-relaxed tracking-wide font-medium text-base lg:text-lg">
            I’m a <span className="text-blue-700 font-bold">passionate and dedicated individual</span> with a strong foundation in web development and software engineering. My expertise lies in building
            <span className="text-blue-700 font-bold"> responsive and visually appealing web applications</span>. I am always striving to enhance my skills by learning modern technologies and exploring innovative ways to deliver exceptional user experiences.
          </p>

          <div className="buttons flex flex-col lg:flex-row items-start lg:items-center gap-6 mt-5">
            <div>
              <a href="/SAHIL_RESUME.pdf" download="../../resume/SAHIL_RESUME.pdf" className="bg-gradient-to-r from-blue-500 to-purple-700 py-3 px-10 hover:from-purple-500 hover:to-blue-800 transition-all duration-200 ease-in-out  font-semibold text-white rounded-lg">GET  CV</a>
            </div>
            <Link to="" className="bg-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-700 hover:text-white transition-all duration-200 ease-in-out py-3 px-10  font-semibold  rounded-lg">Explore More</Link>
          </div>
        </div>

        <div className="image max-md:hidden max-md:mt-5 w-[70%] md:w-[60%] lg:w-[40%]">
          <img src="/images/sahil.webp" className=" rounded-xl shadow-xl hover:scale-110 cursor-pointer transition-all duration-200 ease-in-out" alt="" />
        </div>
      </div>

      <div className="w-[80%] mx-auto relative heading flex justify-center items-center mt-20 mb-11 border bg-gray-100  p-10">
        <h1 className="text-5xl md:text-[80px] font-extrabold -tracking-tighter opacity-[.1]">ABOUT US</h1>
        <p className="text-2xl md:text-4xl font-medium absolute opacity-[.8]">ABOUT US</p>
      </div>



      <div className="about w-[80%] mx-auto flex flex-col lg:flex-row justify-center items-center gap-5">
        <div className="first-content lg:w-[33%] flex flex-col gap-5 justify-center">
          <h2 className="text-2xl font-semibold text-blue-600"><span className="text-3xl ">M</span>y Mission</h2>
          <p className="font-semibold max-sm:text-[14px]">To grow as a proficient React.js Developer by building responsive and impactful web applications while staying committed to learning and leveraging modern web technologies. I aim to deliver seamless user experiences that align with industry trends and expectations.</p>
        </div>


        <div className="second w-[80%] lg:w-[33%]">
          <img src="/images/mission-vision.webp" alt="" />
        </div>

        <div className="third-content lg:w-[33%] flex flex-col gap-5">
          <h2 className="text-2xl font-semibold text-blue-600"><span className="text-3xl ">M</span>y Vision</h2>
          <p className="font-semibold max-sm:text-[14px]">To establish myself as a versatile web developer, creating scalable and innovative solutions that cater to global needs. I aspire to contribute to a dynamic team environment, fostering creativity and collaboration while continuously evolving as a tech enthusiast.</p>
        </div>
      </div>

      <Education />

      <Contact />
    </div>
  )
}

export default About
