import React from 'react';

const Technology = () => {
  const cardStyle = "p-5 bg-white/40 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start text-right transition-all duration-300 hover:-translate-y-2 hover:shadow-md cursor-default max-w-[320px]";

  return (
    <div className="max-w-7xl mx-auto px-4 pt-12 text-right" dir="rtl">
      <div>
        <h2 className="text-5xl font-black text-[#444444] mb-4">لماذا سمارت تكنولوجي؟</h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-4xl font-medium mt-6">
          لأننا نهتم بالتجربة الصحيحة والفريدة بما يتناسب مع تحقيق متطلبات المستخدم وصولاً للحداثة والعصرية في طرح منتجاتنا.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-3xl font-semibold mb-8 pr-4 text-[#444444]">عروضنا المميزة:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-start">
          <div className={cardStyle}>
            <h3 className="text-xl font-bold text-[#444444] mb-3">Basic</h3>
            <p className="text-gray-500 text-sm leading-relaxed w-[85%]">
              موقع تعريفي / صفحة واحدة مناسبة للبداية السريعة.
            </p>
          </div>

           <div className={cardStyle}>
           <h3 className="text-xl font-bold text-[#444444] mb-3">Pro</h3>
           <p className="text-gray-500 text-sm leading-relaxed w-[85%]">
            موقع متعدد الصفحات / متجر صغير لنمو وزيادة التحويلات.
            </p>
          </div>
          <div className={cardStyle}>
            <h3 className="text-xl font-bold text-[#444444] mb-3">Business</h3>
            <p className="text-gray-500 text-sm leading-relaxed w-[85%]">
              متجر متقدم / تطبيق / ذكاء اصطناعي / حلول متكاملة حسب احتياجك.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Technology;