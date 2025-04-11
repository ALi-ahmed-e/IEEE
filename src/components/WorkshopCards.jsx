import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';



const WorkshopCards = ({ workshops }) => {

    console.log(workshops)
    return (
        <div className=' bg-gradient-to-b from-[#000F1F] to-[#002747]   p-5 py-20 text-white'>







            <h1 className="text-4xl font-bold w-full text-center mb-5">Workshops</h1>


            {Object.entries(workshops).map(([key, section], idx) => (
                <div key={idx} className="mb-16">
                    <h2 className="text-2xl font-bold text-center mb-8">{section.name}</h2>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={20}
                        slidesPerView={3}
                        loop
                        breakpoints={{
                            340: { slidesPerView: 1 },
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="px-4"
                    >
                        

                        {section.items.map((item, i) => (
                            <SwiperSlide key={i}>

                                <div className="group bg-gray-700 rounded-xl p-6 shadow-xl text-center flex flex-col justify-center max-w-sm transition duration-300 h-42 mx-auto" >
                                    <h3 className="text-4xl font-semibold -mb-10 group-hover:mb-3 transition-all duration-300">{item.name}</h3>

                                    <p className="text-sm text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {item.description}
                                    </p>
                                </div>



                            </SwiperSlide>
                        ))}
                        
                    </Swiper>
                </div>
            ))}


            <style>{`
		
        .swiper-button-next,
        .swiper-button-prev {
          background-color: #fff;
          border-radius: 100%;
          color: blue;
          width: 27px !important;
          height: 27px !important;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px !important;
          font-weight: bold;
      `}</style>

        </div>
    )
}

export default WorkshopCards