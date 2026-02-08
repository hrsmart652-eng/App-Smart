import React from 'react';
import bg from '../../assets/Robotic hand holding smartphone, Automation and smart technology.png';
import gray from '../../assets/C.png'
import line from '../../assets/D.png'
import ui from '../../assets/Icon.png'
import ay from '../../assets/Group 1000002132.png'
import AI from '../AI/AI';

const Home = () => {
  const features = ["أداء سريع", "قابل للتوسع", "دعم فني", "تصميم المواقع و التطبيقات"];

  return (
    <div className="relative w-full min-h-screen bg-transparent py-10 overflow-hidden" dir="rtl">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 pr-6 md:pr-24 pl-12">
        <div className="flex-1 z-10 flex flex-col items-start justify-center">
          <h1 className="text-5xl font-black leading-tight text-[#444444] max-w-[550px]">
            سمارت تكنولوجى — حلول رقمية ذكية تنمّي شغلك
          </h1>
          <p className="text-lg text-[#666666] mt-6 max-w-[560px] leading-relaxed font-bold">
            نطوّر تطبيقات موبايل ومواقع احترافية ومتاجر إلكترونية، ونبني حلول ذكاء اصطناعي تساعدك تبيع أكثر وتخدم عملاءك أسرع وبشكل أذكى.
          </p>
          <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-4 max-w-[560px]">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white text-[#111928] border border-gray-100 shadow-sm py-6 px-8 rounded-2xl flex items-center justify-center transition-transform hover:scale-105
                  ${index === 3 
                    ? "w-auto px-12 mx-auto md:mx-0 md:ml-auto md:mr-auto"
                    : "flex-1 min-w-[150px] text-center"}
                `}
              >
                <h2 className="text-[#111928] font-bold text-sm md:text-base whitespace-nowrap">
                  {feature}
                </h2>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <img 
            src={bg} 
            alt="Robotic Hand" 
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-start gap-10 mt-16 px-20 ml-10" dir="ltr">
        <div className="flex items-center gap-2">
          <img src={gray} className="w-10 h-10 object-contain" alt="graygrids" />
          <h3 className="text-[#1E1983]  text-[32px]">graygrids</h3>
        </div>

        <div className="flex items-center gap-2">
          <img src={line} className="w-10 h-10 object-contain" alt="Lineicons" />
          <h3 className="text-[#444444] font-bold text-[32px]">Lineicons</h3>
        </div>

        <div className="flex items-center gap-2">
          <img src={ui} className="w-10 h-10 object-contain" alt="UIdeck" />
          <h3 className="text-[#444444] font-bold text-[32px]">UIdeck</h3>
        </div>

        <div className="flex items-center gap-2">
          <img src={ay} className="w-10 h-10 object-contain" alt="Ayro UI" />
          <h3 className="text-[#444444] font-bold text-[32px]">
          Ayro <span className="font-normal">UI</span>
         </h3>
        </div>
      </div>

      <AI />
    </div>
  );
};

export default Home;