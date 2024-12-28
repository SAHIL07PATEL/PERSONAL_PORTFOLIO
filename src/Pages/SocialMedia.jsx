

const SocialMedia = () => {
  return (
    <div>
      {/* ======================= section - 4 ================== */}
      <section  className="mt-20 w-[80%] mx-auto flex flex-col ">
        <div className="relative heading flex justify-center items-center bg-gray-100 w-full p-5">
          <h1 className="text-[36px]  md:text-[80px] font-extrabold -tracking-tighter opacity-[.1]">SOCIAL MEDIA</h1>
          <p className="text-xl md:text-4xl font-medium absolute opacity-[.8]">SOCIAL MEDIA</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 mt-20">
          <a
            href="https://www.instagram.com/sahil.21.___"
            target="_blank" className="instagram w-full md:w-40 h-40 rounded-3xl bg-gradient-to-br bg-gray-200 flex flex-col justify-center items-center shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
            <i className="ri-instagram-fill text-6xl mb-2 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text"></i>
            <p className="text-lg font-semibold">Instagram</p>
          </a>

          <a
            href="https://www.linkedin.com/in/sahil-dholariya-322807232/"
            target="_blank" className="linkedin w-full md:w-40 h-40 rounded-3xl bg-gradient-to-br bg-gray-200 flex flex-col justify-center items-center shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
            <i className="ri-linkedin-box-fill text-6xl mb-2 text-blue-700"></i>
            <p className="text-lg font-semibold">Linkedin</p>
          </a>


          <a
            href="https://www.facebook.com/sahildholariya"
            target="_blank" className="facebook w-full md:w-40 h-40 rounded-3xl bg-gradient-to-br bg-gray-200 flex flex-col justify-center items-center shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
            <i className="ri-facebook-box-fill text-6xl mb-2 text-blue-700"></i>
            <p className="text-lg font-semibold">Facebook</p>
          </a>

          <a
            href="https://github.com/SAHIL07PATEL"
            target="_blank" className="facebook w-full md:w-40 h-40 rounded-3xl bg-gradient-to-br bg-gray-200 flex flex-col justify-center items-center shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
            <i className="ri-github-fill text-6xl mb-2"></i>
            <p className="text-lg font-semibold">GitHub</p>
          </a>

        </div>
      </section>

    </div>
  )
}

export default SocialMedia
