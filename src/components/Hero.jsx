import React from 'react'
import { useEffect } from 'react'

const Hero = ({page}) => {
    
    
    
    return (
        <div  className={`bg-[url('./assets/hero.jpg')]  bg-center bg-no-repeat bg-cover h-screen flex flex-col justify-center lg:pt-0 pt-68`} >


            <div className=' flex flex-col justify-center items-center'>

                {page&&page == "IEEE SHA SB-9"&&<span className='text-xl font-semibold text-white/60 mb-3'>
                    Welcome at

                </span>}

                <h1 className='text-5xl font-bold text-white mb-3'>
                    {page&&page}

                </h1>

               {page&&page == "IEEE SHA SB-9"&& <span className='text-xl font-semibold text-white/60'>
                    El - Shorouk Academy Student Branch
                </span>}

            </div>

        </div>
    )
}

export default Hero