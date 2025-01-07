import { useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import Typed from "typed.js";
import Contact from "./Contact";

const Technologies = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["TECHNOLOGIES."],
      typeSpeed: 90,
      loop: true,
      loopCount: Infinity,
      cursorChar: "|"
    });
    return () => {
      typed.destroy();
    };
  }, [])

  const technologies = [
    {
      techName: "HTML",
      techIcon: "ri-html5-fill group-hover:text-red-600 text-gray-400 text-7xl"
    },
    {
      techName: "CSS",
      techIcon: "ri-css3-line group-hover:text-blue-600 text-gray-400 text-7xl"
    },
    {
      techName: "JS",
      techIcon: "ri-javascript-fill group-hover:text-yellow-400 text-gray-400 text-7xl"
    },
    {
      techName: "Tailwind CSS",
      techIcon: "ri-tailwind-css-fill group-hover:text-blue-400 text-gray-400 text-7xl"
    },
    {
      techName: "REACT JS",
      techIcon: "ri-reactjs-fill group-hover:text-sky-400 text-gray-400 text-7xl"
    },

  ]
  return (
    <div>
      <div className="w-[80%] mx-auto mt-16">
        <div className="flex flex-col lg:flex-row justify-center gap-10">
          <div className="lg:w-[50%] flex flex-col gap-10 justify-center lg:items-start">
            <h1 className="text-4xl font-bold text-purple-600"><span ref={el} /></h1>
            <p className="font-semibold">technologies—React.js, HTML, CSS, and Tailwind CSS—are the foundation of modern web development. Using them together enables the creation of fast, interactive, and well-designed applications that are responsive across all devices.</p>

            <div className="technologi flex flex-wrap gap-5 ">
              <Link className="py-2 px-6 rounded-lg bg-gray-200 font-semibold hover:bg-gray-600  hover:text-white  ">HTML</Link>
              <Link className="py-2 px-6 rounded-lg bg-gray-200 font-semibold hover:bg-gray-600  hover:text-white ">CSS</Link>
              <Link className="py-2 px-6 rounded-lg bg-gray-200 font-semibold hover:bg-gray-600  hover:text-white ">JavaScript</Link>
              <Link className="py-2 px-6 rounded-lg bg-gray-200 font-semibold hover:bg-gray-600  hover:text-white ">Bootstrap</Link>
              <Link className="py-2 px-6 rounded-lg bg-gray-200 font-semibold hover:bg-gray-600  hover:text-white ">Tailwind css</Link>
              <Link className="py-2 px-6 rounded-lg bg-gray-200 font-semibold hover:bg-gray-600  hover:text-white ">React Js</Link>
            </div>
          </div>

          <div className="w-[60%] mx-auto max-lg:mt-12 lg:w-[40%]">
            <img src="/images/technologyBanner.webp" alt="" />
          </div>
        </div>



        <div className=" relative heading flex justify-center items-center mt-20 mb-11 border bg-gray-100  p-10">
          <h1 className="text-3xl md:text-[80px] font-extrabold -tracking-tighter opacity-[.1]">TECHNOLOGIES</h1>
          <p className="text-2xl md:text-4xl font-medium absolute opacity-[.8]">TECHNOLOGIES</p>
        </div>


        <div className="tech flex flex-col lg:flex-row justify-between gap-20 items-center">
          <div className="lg:w-[50%]">
            <img src="/images/backendTechnology3.gif" alt="" />
          </div>

          <div className="max-sm:w-full lg:w-[50%] flex max-sm:flex-col  gap-8 flex-wrap max-lg:justify-center">
            {
              technologies.map((item) => (
                <>
                  <div className=" group max-sm:w-full w-[25%] lg::w-[30%] h-[130px] flex flex-col justify-center items-center border border-black cursor-pointer shadow-md hover:scale-110 transition-all duration-300 ease-out" >
                    <p className="font-semibold text-xl group-hover:text-black text-gray-400">{item.techName}</p>
                    {/* <i className="ri-html5-fill group-hover:text-blue-600 text-gray-400 text-7xl cursor-pointer "></i> */}
                    <i className={item.techIcon}></i>
                  </div>
                </>
              ))
            }
          </div>
        </div>

      </div>
      <Contact />
    </div>
  )
}

export default Technologies
