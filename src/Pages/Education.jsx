
const Education = () => {
  return (
    <div>
       <section className="mt-20  w-[80%] mx-auto flex flex-col">
          <div className="relative heading flex justify-center items-center bg-gray-100 w-full p-8">
            <h1 className="text-5xl md:text-[80px] font-extrabold -tracking-tighter opacity-[.1]">EDUCATION</h1>
            <p className="text-2xl md:text-4xl font-medium absolute opacity-[.8]">EDUCATION</p>
          </div>

          <div className="main-content w-full flex flex-col lg:flex-row justify-center items-center lg:gap-20 ">
            <div className=" sm:w-[90%] lg:w-[50%]  mx-auto mt-16 p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-3xl sm:text-2xl font-bold text-center mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600">
                  Education
                </span>
              </h2>
              <div className="flex flex-col gap-6">
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-blue-700">
                    Gujarat Technological University (GTU)
                  </h3>
                  <p className="text-gray-700">
                    <span className="font-medium">B.E. Computer Engineering</span> | CGPA: 8.83
                  </p>
                  <p className="text-gray-600 text-sm">2022 - Present | Junagadh, India</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-blue-700">
                    Gujarat Technological University (GTU)
                  </h3>
                  <p className="text-gray-700">
                    <span className="font-medium">Diploma Computer Engineering</span> | CGPA: 8.33
                  </p>
                  <p className="text-gray-600 text-sm">2019 - 2022 | Junagadh, India</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-blue-700">
                    Madhav School Bhesan
                  </h3>
                  <p className="text-gray-700">
                    <span className="font-medium">SSC Board</span> | Percentage: 72%
                  </p>
                  <p className="text-gray-600 text-sm">2018 - 2019 | Bhesan, India</p>
                </div>
              </div>
            </div>

            <div className="right ">
              <img src="/images/frontEndTechnology3.gif" className="mt-20" alt="" />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Education
