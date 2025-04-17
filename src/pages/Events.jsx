import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';



const Events = () => {
const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium aliquid modi animi obcaecati quas rem, doloremque quidem laudantium illum unde facilis dolore. Rerum necessitatibus a fuga eius molestiae itaque."
    const events = [
        { name: "Event 1", description: lorem, image: "https://picsum.photos/200", link: "" },
        { name: "Event 2", description: lorem, image: "https://picsum.photos/200", link: "" },
        { name: "Event 3", description: lorem, image: "https://picsum.photos/200", link: "" },
        { name: "Event 4", description: lorem, image: "https://picsum.photos/200", link: "" },
        { name: "Event 5", description: lorem, image: "https://picsum.photos/200", link: "" },
    ]

    return (
        <div className=' bg-gradient-to-b from-[#000F1F] to-[#002747]   p-5 py-20 text-white min-h-screen select-none lg:pt-20 pt-40'>






            <h1 className="text-4xl font-bold w-full text-center mb-5">EVENTS</h1>



            <div className="my-16">

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


                    {events?.map((item, i) => (
                        <SwiperSlide key={i}>

                            <div className="max-w-xs bg-[#1c2939]/70  my-2 text-white rounded-2xl overflow-hidden shadow-lg p-4 mx-auto">
                                <img
                                    src={item.image}
                                    alt="image from event"
                                    className="rounded-xl mb-4 w-full h-48 object-cover"
                                />
                                <h2 className="text-xl font-bold text-[#0096FF]">{item.name}</h2>
                                <p className="mt-2 text-sm">
                                    {item.description}
                                </p>
                                <button className="mt-4 bg-[#0096FF] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">
                                    Registration
                                </button>
                            </div>



                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>



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

export default Events