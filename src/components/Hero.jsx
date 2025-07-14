import React from 'react'
import heroLayer1 from "../assets/images/hero-layer1.jpg"

const Hero = () => {
  return (
    <section className="bg-[#DDCFC6] px-4 py-16 h-screen">
      <div className='w-[85%] mx-auto'>
        <div className='flex bg-white h-[578px] w-[80%] translate-y-40'>
          <div className='border border-red-300 w-[50%] mt-20 p-4 flex flex-col justify-center'>
            <h2 className='text-4xl font-bold mb-8'>We Create Websites</h2>
            <p className='mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit reprehenderit sapiente veritatis eius blanditiis, dolorem quis corporis at exercitationem deserunt. Veniam beatae atque facere magnam at, assumenda perferendis magni quisquam.</p>

            <p>Image from Freepik</p>
            <button className='px-4 py-2 mt-8 w-[40%] bg-black text-white rounded-md'>view portfolio</button>
          </div>
      </div>

      <div classname="bg-red-50">
        <img src={heroLayer1} alt="" />
      </div>
      </div>
    </section>
  )
}

export default Hero
