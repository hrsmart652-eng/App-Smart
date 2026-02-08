
import React, { useState } from 'react';

const Question = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "كم مدة تنفيذ الموقع أو المتجر؟",
      answer: "حسب المتطلبات و نوع الموقع/المتجر لكنه غالباً يساغرق أسبوعين إلى أربع أسابيع"
    },
    {
      question: "هل يوجد دعم فني بعد التنفيذ؟",
      answer: "بالتأكيد، نوفر ضماناً ودعماً فنياً مستمراً بعد التسليم لمعالجة أي استفسارات أو تحديثات تطلبها."
    },
    {
      question: "ما هي تكلفة تطوير التطبيقات الذكية؟",
      answer: "التكلفة تعتمد على المزايا والوظائف المطلوبة، نحن نقدم عروضاً تنافسية تبدأ من باقات بسيطة وصولاً للحلول المتقدمة."
    },
    {
      question: "هل المتاجر تدعم الشحن والدفع؟",
      answer: "نعم، نقوم بربط المتجر ببوابات الدفع الإلكتروني وشركات الشحن العالمية والمحلية لتسهيل عملية البيع."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-7xl mx-auto" dir="rtl">
      <h2 className="text-5xl font-bold text-[#444444] mb-16">الأسئلة الشائعة:</h2>

      <div className="space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div 
              key={index}
              onClick={() => toggleAccordion(index)}
              className={`relative cursor-pointer transition-all duration-300 rounded-sm overflow-hidden ${
                isOpen ? 'bg-[#F8FAFAB2]' : 'bg-[#F8FAFAB2] border-b border-gray-100'
              }`}
            >
              <div className={`absolute right-0 top-0 bottom-0 w-1.5 bg-[#3758F9] transition-transform duration-300 origin-top ${
                isOpen ? 'scale-y-100' : 'scale-y-0'
              }`} />

              <div className="flex items-center justify-between p-5">
                <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                  isOpen ? 'text-[#000000]' : 'text-[#444444]'
                }`}>
                  {item.question}
                </h3>

                <span className={`transform transition-transform duration-300 text-[#444444] ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>
              <div className={`transition-all duration-500 ease-in-out ${
                isOpen ? 'max-h-40 opacity-100 pb-6 pr-5 pl-5' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <p className="text-gray-600 leading-relaxed  border-r border-gray-200">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Question;