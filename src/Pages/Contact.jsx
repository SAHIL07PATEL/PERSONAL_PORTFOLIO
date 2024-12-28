const Contact = () => {


  const contactDetails = [
    {
      name: "Let's Talk",
      contact: "+91 9106027262",
      icon: "ri-chat-ai-fill text-6xl mb-5 text-blue-700"
    },
    {
      name: "Let's Talk Whatsapp",
      contact: "+91 9106027262",
      icon: "ri-whatsapp-fill text-6xl mb-5 text-green-700"
    },
    {
      name: "E-mail Us",
      contact: "+91 9106027262",
      icon: "ri-mail-ai-fill text-6xl mb-5 text-blue-700"
    },
  ]
  return (
    <div>
      <section className='mt-36  w-[80%] mx-auto flex flex-col justify-center items-center'>
        <div className="relative heading flex justify-center items-center bg-gray-100 w-full p-5">
          <h1 className="text-[36px] md:text-[80px] font-extrabold -tracking-tighter opacity-[.1]">CONTACT US</h1>
          <p className="text-xl md:text-4xl font-medium absolute opacity-[.8]">CONTACT US</p>
        </div>


        <div className="main-content flex flex-wrap gap-20 justify-center items-center mt-20">

          {
            contactDetails.map((item) => (
              <>
                <div className="w-full lg:w-80 h-60 bg-gray-100 shadow-2xl  transition-transform transform hover:scale-105 flex flex-col justify-center items-center gap-2">
                  <i className={`${item.icon} `}></i>
                  <p className="text-2xl font-semibold">{item.name}</p>
                  <p><span className="text-xl font-bold">Phone:</span>{item.contact}</p>
                </div>
              </>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Contact
