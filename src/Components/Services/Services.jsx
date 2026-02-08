import React from 'react'


const Services = () => {
  const boxStyle = "bg-white/40 p-10 rounded-[35px] shadow-sm border border-gray-50 flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl antialiased min-h-[280px]";
  
  const titleStyle = "text-2xl font-black text-[#444444] mb-4 leading-tight";
  const pStyle = "text-[#242424] opacity-80 leading-relaxed mb-8 font-medium max-w-[280px]";
  const btnStyle = "text-white bg-[#E9967A] py-4 px-10 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-[#FF7F50]/40";

  return (
    <div className="px-24 " dir="rtl">
      <h2 className="text-4xl font-black text-[#444444] mb-10 mr-4 mt-20">خدماتنا</h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="w-full lg:w-1/3 h-full">
          <div className={boxStyle}>
            <h2 className={titleStyle}>تطوير تطبيقات موبايل</h2>
            <p className={pStyle}>
             Android / iOS — تطبيقات سريعة
            وسهلة الاستخدام مع تصميم
           احترافي وربط قواعد بيانات ولوحات
           تحكم عند الحاجة.
            </p>
            <button className={btnStyle}>التفاصيل</button>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-10">
          <div className={boxStyle}>
            <h2 className={titleStyle}>حلول ذكاء اصطناعي</h2>
            <p className={pStyle}>
             شات بوت لخدمة العملاء، أتمتة
             الردود، تحليل البيانات، وتوليد تقارير
             ذكية حسب طبيعة نشاطك.
            </p>
            <button className={btnStyle}>التفاصيل</button>
          </div>
          
          <div className={boxStyle}>
            <h2 className={titleStyle}>تصميم وتطوير مواقع
              إلكترونية</h2>
            <p className={pStyle}>
             مواقع شركات وخدمات وحجوزات
             — متجاوبة 100% مع الموبايل،
            سريعة، ومهيأة لمحركات البحث
           (SEO).   
            </p>
            <button className={btnStyle}>التفاصيل</button>
          </div>
        </div>
        <div className="w-full lg:w-1/3 h-full">
          <div className={boxStyle}>
            <h2 className={titleStyle}>إنشاء متاجر إلكترونية</h2>
            <p className={pStyle}>
            متجر كامل: منتجات + سلة +
           كوبونات + إدارة الطلبات + تقارير —
           مع إمكانية الدفع والشحن حسب
          بلدك.
            </p>
            <button className={btnStyle}>التفاصيل</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services