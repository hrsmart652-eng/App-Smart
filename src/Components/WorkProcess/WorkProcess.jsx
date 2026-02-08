
import React from 'react'
import processBackground from '../../assets/svgviewer-png-output.png' 
import Technology from '../Technology/Technology'
import icon6 from '../../assets/streamline-ultimate_team-meeting.png'
import icon5 from '../../assets/define.png' 
import icon4 from '../../assets/streamline-ultimate_ab-testing-monitors.png'
import icon3 from '../../assets/streamline-freehand_programming-language-browser-css.png'
import icon2 from '../../assets/ph_figma-logo-thin.png' 
import icon1 from '../../assets/carbon_text-link-analysis.png'

const ProcessSteps = () => {
  const steps = [
    { id: 1, img: icon1, title: "تحليل الاحتياج", desc: "تحديد الهدف والجمهور المستهدف والمخرجات", position: 'top' },
    { id: 2, img: icon2, title: "تصميم UI&UX", desc: "تحديد الهدف والجمهور المستهدف والمخرجات", position: 'bottom' },
    { id: 3, img: icon3, title: "التطوير والبرمجة", desc: "تنفيذ فعلي وربط الخدمات المطلوبة", position: 'top' },
    { id: 4, img: icon4, title: "اختبار وتسليم", desc: "جودة في تقييم منتجاتنا الرقمية للوصول لأفضل النتائج", position: 'bottom' },
    { id: 5, img: icon5, title: "دعم وتطوير", desc: "تقديم الدعم الفني وتطوير المنتجات حسب احتياج المستخدم", position: 'top' },
    { id: 6, img: icon6, title: "فريق عمل متكامل", desc: "نخبة من المصممين والمبرمجين الأكفاء", position: 'bottom' },
  ];

  return (
    <div className="py-20 px-6 overflow-hidden" dir="rtl">
      
      <div className="max-w-7xl mx-auto mb-16 text-right">
        <h2 className="text-3xl md:text-5xl font-black text-[#444444] mb-4">خطوات التنفيذ</h2>
        <p className="text-lg md:text-xl text-gray-400 font-medium">من التفكير إلى التصميم خطوة بخطوة</p>
      </div>
      <div className="max-w-3xl mx-auto relative min-h-[500px] md:h-[600px]"> 
        <div className="absolute inset-0 hidden md:flex items-center justify-center z-0">
          <img 
            src={processBackground} 
            alt="Line decor" 
            className="w-full object-contain opacity-40 scale-125" 
          />
        </div>
        <div className="max-w-[850px] mx-auto relative z-10 flex flex-col md:flex-row h-full items-center">
          {steps.map((step) => (
            <div key={step.id} className="flex-1 flex flex-col items-center w-full md:h-full relative">
              <div className="hidden md:flex h-1/2 flex-col justify-start pt-2">
                {step.position === 'top' && (
                  <div className="text-center mb-20">
                    <h3 className="text-xl font-black text-[#444444] mb-1">{step.title}</h3>
                    <p className="text-[15px] text-gray-500 leading-snug max-w-[150px] mx-auto line-clamp-2">
                      {step.desc}
                    </p>
                  </div>
                )}
              </div>
              <div className="relative flex items-center justify-center h-0 overflow-visible">
                <div className="w-20 h-20 flex items-center justify-center transition-all duration-300 hover:scale-125 z-20 cursor-pointer">
                  <img 
                    src={step.img} 
                    alt={step.title} 
                    className="w-10 h-10 object-contain" 
                  />
                </div>
              </div>
              <div className="hidden md:flex h-1/2 flex-col justify-end pb-2">
                {step.position === 'bottom' && (
                  <div className="text-center mt-20">
                    <h3 className="text-xl font-black text-[#444444] mb-1">{step.title}</h3>
                    <p className="text-[15px] text-gray-500 leading-snug max-w-[150px] mx-auto line-clamp-2">
                      {step.desc}
                    </p>
                  </div>
                )}
              </div>
              <div className="md:hidden mt-2 text-center pb-8">
                <h3 className="text-xl font-black text-[#444444] mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500 max-w-[250px] mx-auto">{step.desc}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <Technology />
      </div>
    </div>
  )
}

export default ProcessSteps;