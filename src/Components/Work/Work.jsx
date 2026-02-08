import React from 'react'
import mobile1 from '../../assets/Screenshot-iPhone15 Pro Max (2).png'
import mobile2 from '../../assets/Screenshot-iPhone15 Pro Max (3).png'
import mobile3 from '../../assets/Screenshot-iPhone15 Pro(2).png'
import mobile4 from '../../assets/Screenshot-iPhone15.png'

const Work = () => {
  const projects = [
    {
      title: "تطبيق Delivary Home",
      desc: "نقدّم تطبيقًا ذكيًا ومتكاملًا لتوصيل الطعام يربط المطاعم بالعملاء بسرعة وسلاسة، مع تجربة استخدام سهلة وموثوقة في كل خطوة. يتيح التطبيق تصفح القوائم، تخصيص الطلبات، تتبّع حالة التوصيل لحظيًا، والدفع بطرق متعددة وآمنة.",
      mainImg: mobile1,
      subImg: mobile2,
      color: "text-[#F4A460]"
    },
    {
      title: "تطبيق Go Car",
      desc: "نطوّر تطبيق نقل ذكي يربط الركاب بالسائقين بأسرع وقت وبأعلى درجات الأمان والموثوقية. يتيح التطبيق تحديد الموقع بدقة، عرض تكلفة الرحلة مسبقًا، تتبّع السيارة على الخريطة، والدفع بسهولة عبر وسائل متعددة.",
      mainImg: mobile3,
      subImg: mobile4,
      color: "text-[#1589EE]"
    }
  ];

  return (
    <div className="py-16 px-8" dir="rtl">
      <div className="max-w-[1400px] mx-auto mb-20">
         <h2 className="text-5xl font-black text-[#444444] m-10">أعمالنا</h2>
      </div>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-40">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group w-full flex flex-col items-start transition-all duration-500"
          >
            <div className="relative w-full h-[500px] mb-10 flex justify-center items-center overflow-visible">
              <img 
                src={project.mainImg} 
                alt="Main" 
                className="h-[450px] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:-translate-x-8 group-hover:-translate-y-2"
              />
              <img 
                src={project.subImg} 
                alt="Sub" 
                className="absolute h-[300px] object-contain drop-shadow-2xl right-[10%] bottom-5 z-20 transition-transform duration-700 group-hover:translate-x-8 group-hover:-translate-y-6"
              />
            </div>
            <div className="text-right w-full pr-4">
              <h3 className={`text-4xl font-black mb-4 transition-colors ${project.color}`}>
                {project.title}
              </h3>
              <p className="text-[#000000] opacity-90 leading-[1.8] text-m lg:max-w-[450px]">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work