import React from "react";
import phone from "../../assets/phone-ring.png";
import whats from "../../assets/mobile-alt-1.png";
import email from "../../assets/envelope.png";
import shape from "../../assets/Oval.png";
import points from "../../assets/Dotted Shape.png";

const Contact = () => {
  return (
    <>
      <div
        className="py-20 px-4 md:px-16  relative overflow-hidden mt-20 mb-20"
        dir="rtl"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="text-right">
            <h6 className="text-[#3758F9] font-bold text-lg mb-4">
              تواصل معنا
            </h6>
            <h2 className="text-5xl font-black text-[#444444] mb-4">
              بيانات التواصل
            </h2>
            <p className="text-[#637381] font-bold mb-12 text-lg leading-relaxed">
              يفضل ارسال نوع الخدمة + فكرة المشروع + مثال/لينك قريب من المطلوب
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-16 flex items-center justify-center bg-blue-50 rounded-2xl group-hover:scale-110 transition-transform">
                  <img
                    src={phone}
                    alt="phone"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#444444] mb-4">
                    الهاتف/ واتساب
                  </h3>
                  <p className="text-gray-500 font-medium">01005028284</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-14 h-16 flex items-center justify-center bg-blue-50 rounded-2xl group-hover:scale-110 transition-transform">
                  <img
                    src={whats}
                    alt="whatsapp"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#444444] mb-4">
                    واتساب مباشر
                  </h3>
                  <p className="text-gray-500 font-medium">فتح المحادثة</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-14 h-16 flex items-center justify-center bg-blue-50 rounded-2xl group-hover:scale-110 transition-transform">
                  <img
                    src={email}
                    alt="email"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#444444] mb-4">
                    البريد الإلكتروني
                  </h3>
                  <p className="text-gray-500 font-medium">
                    info@yourdomain.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-10 lg:mt-0">
            <img
              src={shape}
              className="absolute -top-12 -right-12 w-40 z-0 opacity-40 select-none"
              alt=""
            />
            <img
              src={points}
              className="absolute top-4 -right-8 w-24 z-0 opacity-80 select-none"
              alt=""
            />
            <img
              src={points}
              className="absolute -bottom-10 -left-10 w-28 z-0 opacity-80 select-none"
              alt=""
            />

            <form className="relative z-10 bg-white/40 backdrop-blur-md p-8 px-20 md:p-12 rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/20">
              <div className="space-y-6 text-right">
                <div>
                  <label className="block mb-2 font-bold text-[#242424] mr-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    placeholder="اسمك الكامل"
                    className="w-full p-4 bg-white/50 rounded-2xl border border-gray-200 focus:bg-white focus:border-[#1589EE] focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-bold text-[#242424] mr-2">
                    {" "}
                    الهاتف
                  </label>
                  <input
                    type="tel"
                    placeholder="ادخل رقم الهاتف"
                    className="w-full p-4 bg-white/50 rounded-2xl border border-gray-200 focus:bg-white focus:border-[#1589EE] focus:ring-4 focus:ring-blue-100 transition-all outline-none text-right"
                    dir="rtl"
                  />
                </div>

                <div className="relative">
                  <label className="block mb-2 font-bold text-[#242424] mr-2">
                    نوع الخدمة
                  </label>

                  <div className="relative">
                    <select
                      defaultValue=""
                      className="w-full p-4 bg-white/50 rounded-2xl border border-gray-200 focus:bg-white focus:border-[#1589EE] focus:ring-4 focus:ring-blue-100 transition-all outline-none appearance-none cursor-pointer text-[#444444]"
                    >
                      <option value="" disabled hidden></option>
                      <option value="web_design">
                        تصميم واجهات المستخدم (UI/UX)
                      </option>
                      <option value="frontend">
                        تطوير المواقع (Front-End)
                      </option>
                      <option value="fullstack">
                        تطوير موقع متكامل (Full-Stack)
                      </option>
                      <option value="ecommerce">إنشاء متجر إلكتروني</option>
                      <option value="mobile_app">تطوير تطبيق موبايل</option>
                      <option value="branding">
                        تصميم هوية بصرية (Branding)
                      </option>
                    </select>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute left-4 bottom-5 pointer-events-none text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="relative">
                  <textarea
                    rows="4"
                    maxLength="50"
                    placeholder="تفاصيل الطلب"
                    className="w-full p-4 bg-white/50 rounded-2xl border border-gray-200 focus:bg-white focus:border-[#1589EE] focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none"
                  ></textarea>
                  <div className="text-right text-sm text-gray-500 mt-1 mr-2">
                    0/50
                  </div>
                </div>
                <button className="w-full py-4 bg-[#E9967A] text-white rounded-2xl font-bold text-lg  hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">
                  أرسل الرسالة
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
