
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import SocialMedia from "./SocialMedia";
import Education from "./Education";
import Contact from "./Contact";

const Home = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer ", " Web Designer"],
      typeSpeed: 90,
      loop: true,
      loopCount: Infinity,
      cursorChar: "|"
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>

      <main>
        {/* =================== Section - 1 ========================*/}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-20">
          <div className=" w-[90%] mx-auto text-center text-white">
            <h1 className="text-5xl max-md:text-2xl font-extrabold leading-tight mb-4">
              Welcome to My Website!
            </h1>
            <p className="text-2xl sm:text-4xl font-medium mb-8">
              Hello, I am a <span ref={el} />{" "}
            </p>
            <div>
              <a  href="/SAHIL_RESUME.pdf" download="../../resume/SAHIL_RESUME.pdf"  className="px-8 py-3 bg-blue-700 text-lg font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Download CV
              </a>
            </div>
          </div>
        </section>

        {/* ======================= Section - 2 ================= */}


        <section className=" flex flex-col justify-center items-center w-full max-lg:px-5 lg:w-[80%] mx-auto mt-20">
          <div className="bg-gray-100 w-full  p-10 relative heading flex justify-center items-center ">
            <h1 className="text-5xl md:text-[80px] font-extrabold -tracking-tighter opacity-[.1]">ABOUT US</h1>
            <p className="text-2xl md:text-4xl font-medium absolute opacity-[.8]">ABOUT US</p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
            <div className="left-content mt-14 lg:w-[60%] w-full ">
              <h2 className="text-2xl sm:text-4xl font-semibold mb-11">
                <span className="text-blue-700 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600">Welcome</span> to my professional journey!
              </h2>
              <div className="max-md:text-sm w-full lg:w-[86%] leading-relaxed text-gray-700 flex flex-col gap-6 ">
                <p>
                  Hi, I’m <span className="font-semibold text-blue-700">Sahil Dholariya</span>, a passionate <span className="font-semibold text-purple-600">React.js Developer</span> and a third-year student pursuing a <span className="font-semibold">B.E. in Computer Engineering</span> at Om Engineering College in Junagadh, Gujarat.
                </p>

                <p>
                  I’m excited about the rapidly evolving world of web development and web designing, where technology is reshaping how we interact and experience the digital world.
                </p>

                <p>
                  Throughout my academic journey, I’ve gained hands-on experience with modern web technologies, including <span className="font-semibold text-blue-500">React.js</span>, <span className="font-semibold text-blue-500">JavaScript</span>, <span className="font-semibold text-blue-500">HTML</span>, and <span className="font-semibold text-blue-500">CSS</span>. I am driven by the potential of building user-centric applications that are intuitive, responsive, and efficient.
                </p>

                <p>
                  My goal is to start my career in web development, contributing to innovative projects and making a tangible impact on the web.
                </p>
              </div>
            </div>

            <div className="right-image-container flex justify-center items-center lg:w-[45%] mt-12">
              <img src="/images/sahil.webp" className="max-md:w-[100%] max-lg:w-[50%] rounded-xl shadow-xl hover:scale-110 cursor-pointer transition-all duration-200 ease-in-out" alt="" />
            </div>
          </div>
        </section>

        {/* ======================= Education ================= */}
        <Education/>
        
        {/* ================== Social Media =============== */}
        <SocialMedia/>


        {/* ================== contact us =============== */}
        <Contact/>

      </main>

    </div>
  )
}

export default Home
