import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isclicked, setIsclicked] = useState('home');



  const handleClicked = (linkName) => {
    setIsclicked(linkName)
    setToggleMenu(false)
  }


  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }
    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [toggleMenu]);


  return (
    <div>
      <nav className="flex w-[80%] mx-auto justify-between items-center py-9">
        <Link
          to="/"
          className="flex items-center space-x-3 font-bold text-xl relative"
        >

          <div className="text-gray-900 font-extrabold tracking-wide relative">
            <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 bg-clip-text text-transparent hover:scale-110 transition-all duration-300 text-4xl tracking-[3px]">
              SAHIL
            </span>
            <span className="  font-bold text-[12px] absolute left-2 top-8 tracking-[4px] text-blue-600" >DHOLARIYA</span>
          </div>
        </Link>




        <div className="items">
          <ul className={`max-md:text-white max-md:bg-[#242121] max-md:w-[100%] max-md:h-full flex flex-col absolute z-10 top-0 ${toggleMenu ? ('left-0') : ' left-[-800px]'} max-md:px-10 max-md:py-20 justify-center items-center gap-2 max-md:gap-10 lg:gap-9 md:static md:flex-row transition-all duration-300 ease-in-out `}>


            
            <div className=" flex justify-around items-center w-full max-sm:gap-28 ">
            <span className="text-gray-900 font-extrabold tracking-wide">
              <span
                className="md:hidden text-xl text-white text-transparent hover:scale-105 font-bold transition duration-300 ">
                SAHIL DHOLARIYA.
              </span>



            </span>

              <div
                className="toggle-menu md:hidden flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg cursor-pointer transform transition duration-300 hover:scale-110 hover:shadow-xl "
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <i class="ri-close-large-line text-white"></i>
              </div>
            </div>

  

            <li><Link to="/" onClick={() => handleClicked('home')} className={`font-semibold text-[15px] py-2 px-7 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-200 ease-in-out  ${isclicked == 'home' ? ('text-white underline bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2 rounded-lg ') : ('')}`}>Home</Link></li>

            <li><Link to="/about" onClick={() => handleClicked('about')} className={`font-semibold text-[15px] py-2 px-7 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-200 ease-in-out  ${isclicked == 'about' ? ('text-white underline bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2 rounded-lg ') : ('')}`}>About</Link></li>

            <li><Link to="/projects" onClick={() => handleClicked('project')} className={`font-semibold text-[15px] py-2 px-7 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-200 ease-in-out  ${isclicked == 'project' ? ('text-white underline bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2 rounded-lg ') : ('')}`}>Projects</Link></li>

            <li><Link to="/tech" onClick={() => handleClicked('tech')} className={`font-semibold text-[15px] py-2 px-7 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-200 ease-in-out   ${isclicked == 'tech' ? ('text-white underline bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2 rounded-lg ') : ('')}`}>Technologies</Link></li>



          </ul>
        </div>

        <div className="profile max-md:hidden">
          <a href="/resume/Sahil-Resume.pdf" 
                download="SAHIL_RESUME.pdf" className="inline-block py-2 px-6 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 font-semibold flex-nowrap">
            <i className="ri-user-fill mr-2" ></i>  Profile
          </a>
        </div>


        <div
          className="toggle-menu md:hidden flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg cursor-pointer transform transition duration-300 hover:scale-110 hover:shadow-xl"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <i className="ri-menu-3-line text-white text-2xl" />
        </div>





      </nav>
    </div>
  )
}

export default Navbar
