import React from "react";
import { ArrowLeft } from "lucide-react";
import logo from "../../assets/logo-removebg-preview 2.png";

const WE = () => {
  const points = [
    "تصميم UI&UX يلبي احتياجات المستخدمين .",
    "التنفيذ بمراحل واضحة و تسليم منظم",
    "حلول متطورة و مبتكرة",
    "دعم فني بعد الإطلاق",
  ];

  return (
    <div className=" px-24" dir="rtl">
      <h2 className="text-4xl font-black text-[#444444] mb-10 mr-4">من نحن</h2>
      <div className=" antialiased relative bg-white/40 p-12 rounded-[40px] shadow-sm border border-gray-50 overflow-hidden min-h-[400px] ">
        <div className="absolute left-0 top-0 h-full w-2/2 z-0 opacity-20 lg:opacity-100">
          <img
            src={logo}
            alt="Logo BG"
            className="w-full h-full object-contain transform pointer-events-none"
          />
        </div>
        <div className="relative z-10 w-full lg:w-[82%]">
          <p className="text-m text-[#242424] leading-relaxed mb-12 font-medium">
            سمارت تكنولوجي شركة تقنية تقدم حلول مبتكرة و متطورة تراعي احتياجات
            المستخدمين و العملاء بالإضافة لخدمات تقنية متكاملة من الفكرة حتى
            الإطلاق، تركز على التصميم العصري سريع الأداء و سهل الاستخدام.
          </p>
          <div className="space-y-8">
            {points.map((text, index) => (
              <div
                key={index}
                className="group flex items-center gap-5 transition-all duration-300 cursor-pointer w-fit"
              >
                <div className="text-[#FF7F50] transition-transform duration-300 group-hover:-translate-x-2">
                  <ArrowLeft size={24} />
                </div>

                <h3 className="text-1xl font-bold text-[#444444] group-hover:text-[#FF7F50] transition-colors ">
                  {text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WE;
