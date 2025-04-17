import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { FaLinkedin, FaFacebook } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/navigation'

const OurTeams = () => {
  const teams = {
    EX_COM: {
      title: 'EX-COM',
      members: [
        {
          role: 'Chairman',
          name: 'Kareem Raafat',
          description:
            'The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice to major corporations and has a proven track record of success in complex cases.',
          linkedin: '#',
          facebook: '#',
          image: 'https://example.com/kareem.jpg',
        },
        {
          role: 'Vice Chairman',
          name: 'Suhaila Essam',
          description:
            'The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice to major corporations and has a proven track record of success in complex cases.',
          linkedin: '#',
          facebook: '#',
          image: 'https://example.com/suhaila.jpg',
        },
        {
          role: 'Treasurer',
          name: 'Abdallah Darwish',
          description:
            'The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice to major corporations and has a proven track record of success in complex cases.',
          linkedin: '#',
          facebook: '#',
          image: 'https://example.com/abdallah.jpg',
        },
        {
          role: 'Secretary',
          name: 'Malak Mohamed',
          description:
            'The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice to major corporations and has a proven track record of success in complex cases.',
          linkedin: '#',
          facebook: '#',
          image: 'https://example.com/malak.jpg',
        },
      ],
    },

    BOARD: {
      title: 'BOARD',
      members: [
        {
          role: 'Head HR',
          name: 'Shrouk Negeda',
          description:
            'The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice.',
          linkedin: '#',
          image: 'https://example.com/shrouk.jpg',
        },
        {
          role: 'Vice Head HR',
          name: 'Mariam Mohamed',
          description:
            'The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice.',
          linkedin: '#',
          image: 'https://example.com/mariam.jpg',
        },
        {
          role: 'Vice Head HR',
          name: 'Jane A. Jerry',
          description:
            'The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice.',
          linkedin: '#',
          image: 'https://example.com/jane.jpg',
        },
        // repeated rows
        {
          role: 'Head HR',
          name: 'Shrouk Negeda',
          description:
            'The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice.',
          linkedin: '#',
          image: 'https://example.com/shrouk.jpg',
        },
        {
          role: 'Vice Head HR',
          name: 'Mariam Mohamed',
          description:
            'The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice.',
          linkedin: '#',
          image: 'https://example.com/mariam.jpg',
        },
        {
          role: 'Vice Head HR',
          name: 'Jane A. Jerry',
          description:
            'The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice.',
          linkedin: '#',
          image: 'https://example.com/jane.jpg',
        },
      ],
    },

    DEVELOPERS: {
      title: 'Developers Team',
      members: [
        {
          name: 'Ahmed Ali',
          role: 'Name: Ahmed Ali',
          description:
            'Professional Summary: An attorney with 20+ years of experience serving top-tier corporations with strategic legal insight in complex cases.',
          linkedin: '#',
          facebook: '#',
          image: 'https://example.com/ahmed1.jpg',
        },
        {
          name: 'Ahmed Ali',
          role: 'Name: Ahmed Ali',
          description:
            'Professional Summary: An attorney with 20+ years of experience serving top-tier corporations with strategic legal insight in complex cases.',
          linkedin: '#',
          facebook: '#',
          image: 'https://example.com/ahmed2.jpg',
        },
        {
          name: 'Ahmed Ali',
          role: 'Name: Ahmed Ali',
          description:
            'Professional Summary: An attorney with 20+ years of experience serving top-tier corporations with strategic legal insight in complex cases.',
          linkedin: '#',
          facebook: '#',
          image: 'https://example.com/ahmed3.jpg',
        },
      ],
    },
  }

  return (
    <div className="bg-gradient-to-b from-[#000F1F] to-[#002747] pb-20 p-5 pt-40 text-white lg:pt-32">
      <h1 className="text-4xl font-bold w-full text-center mb-10">Our Teams</h1>

      {Object.entries(teams).map(([key, section], idx) => (
        <div key={idx} className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">{section.title}</h2>

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
            {section.members.map((member, i) => (
              <SwiperSlide key={i}>
                <div className="bg-[#0f1b2b] text-white rounded-2xl p-6 w-[260px] flex flex-col items-center shadow-lg mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white mb-4"
                  />
                  {member.role && <h3 className="text-center text-lg font-semibold">{member.role}</h3>}
                  <h4 className="text-center text-base font-bold mb-3">{member.name}</h4>
                  <p className="text-sm text-center text-gray-300 mb-4">{member.description}</p>
                  <div className="flex gap-4">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white hover:text-blue-400 text-xl" />
                      </a>
                    )}
                    {member.facebook && (
                      <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-white hover:text-blue-500 text-xl" />
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <br />
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
        }
      `}</style>
    </div>
  )
}

export default OurTeams
