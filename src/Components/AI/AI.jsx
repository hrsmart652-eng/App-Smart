import React from 'react'
import robot from '../../assets/Finding solutions with artificial intelligence.png'
import ai from '../../assets/Lettering AI with electronic chip and robor text.png'
import web from '../../assets/Lettering Web Design with toolbar and buttons text.png'
import design from '../../assets/Buying airline tickets with mobile app.png'

const AI = () => {
  const services = [
    { title: "حلول تقنية ذكية", img: robot },
    { title: "ذكاء اصطناعي", img: ai },
    { title: "تصميم ويب سايت", img: web },
    { title: "تصميم موبايل أبليكشن", img: design },
  ];

  return (
    <div className="py-24 px-28 overflow-visible" dir="rtl">
      <h2 className="text-5xl font-bold text-right mb-24 text-[#444444]">ماذا نقدم ؟</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`group relative h-64 rounded-3xl flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-500 border border-[#E6738E]
              ${(index === 0 || index === 2) ? 'bg-[#F8FAFA]' : 'bg-[#E6ECEF]'}
            `}
          >
            <h3 className="text-xl font-bold text-[#2F5EA0] text-center px-4 mb-8 group-hover:text-[#1589EE] transition-colors duration-300">
              {service.title}
            </h3>
            <div className="absolute -bottom-16 w-44 h-44 transition-all duration-500 transform group-hover:scale-105">
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-contain drop-shadow-xl animate-float-slow" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AI