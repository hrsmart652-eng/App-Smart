import React from "react";
import logo from "../../assets/logo-removebg-preview 1.png";
import circle from "../../assets/Ellipse 2730.png";
import face from "../../assets/facebook-fill.png";
import twitter from "../../assets/twitter (1).png";
import youtube from "../../assets/youtube (1).png";
import linked from "../../assets/linkedin-alt (1).png";

const Footer = () => {
  return (
    <footer className="relative bg-white pt-20 pb-0 mt-40" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 items-start">
          <div className="flex flex-col items-start self-start -mt-16">
            <img src={logo} alt="Logo" className="w-52 object-contain " />
            <h3 className="text-xl font-black text-[#475569] mb-3">
              سمارت تكنولوجي
            </h3>
            <p className="text-[16px] text-[#94a3b8] leading-relaxed mb-1">
              حلول رقمية ذكية • تطبيقات • مواقع • متاجر • ذكاء اصطناعي
            </p>
            <p className="text-[16px] text-[#94a3b8] font-medium">
              © 2026 سمارت تكنولوجى — جميع الحقوق محفوظة
            </p>
          </div>
          <div className="self-start">
            <h4 className="text-lg font-bold text-[#444444] mb-6">
              روابط سريعة
            </h4>
            <ul className="space-y-4 text-[#64748b] text-sm font-bold">
              <li className="hover:text-[#1589EE] cursor-pointer transition-colors">
                دعم فني
              </li>
              <li className="hover:text-[#1589EE] cursor-pointer transition-colors">
                خدماتنا
              </li>
              <li className="hover:text-[#1589EE] cursor-pointer transition-colors">
                تعرف على فريقنا
              </li>
              <li className="hover:text-[#1589EE] cursor-pointer transition-colors">
                تحميل التطبيقات
              </li>
            </ul>
          </div>
          <div className="self-start">
            <h4 className="text-lg font-bold text-[#444444] mb-6">شركتنا</h4>
            <ul className="space-y-4 text-[#64748b] text-sm font-bold">
              <li className="hover:text-[#1589EE] cursor-pointer transition-colors">
                التواصل لتقديم المساعدة
              </li>
              <li className="hover:text-[#1589EE] cursor-pointer transition-colors">
                خدماتنا
              </li>
              <li className="hover:text-[#1589EE] cursor-pointer transition-colors">
                فريق العمل
              </li>
              <li className="hover:text-[#1589EE] cursor-pointer transition-colors">
                الخصوصية و الإعدادات
              </li>
            </ul>
          </div>
          <div className="self-start">
            <h4 className="text-lg font-bold text-[#444444] mb-6 text-right">
              اشترك بالنشرة البريدية
            </h4>
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-[220px] p-2 rounded border border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#8099EC] text-right mb-4 border border-[#8099EC]"
            />
            <button className=" py-3 px-8 bg-[#f2998a] text-white rounded-full font-bold hover:bg-[#e88a7b] transition-all shadow-md">
              اشتراك
            </button>
          </div>
          <div className="flex flex-col items-start lg:items-start text-left relative min-h-[150px]">
            <h4 className="text-lg font-bold text-[#1e293b] mb-6 w-full text-right">
              تابعنا علي :
            </h4>
            <div className="flex flex-row-reverse gap-4 mb-6 z-10 w-full justify-end">
              <div className="w-10 h-10 bg-[#3758F9] rounded-full flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-transform">
                <img
                  src={face}
                  alt="Facebook"
                  className="w-5 h-5 object-contain invert brightness-0"
                />
              </div>

              <img
                src={twitter}
                alt="Twitter"
                className="w-10 h-10 cursor-pointer hover:-translate-y-1 transition-transform border border-[#DFE4EA] rounded-full p-2"
              />

              <img
                src={youtube}
                alt="YouTube"
                className="w-10 h-10 cursor-pointer hover:-translate-y-1 transition-transform border border-[#DFE4EA] rounded-full p-2"
              />

              <img
                src={linked}
                alt="LinkedIn"
                className="w-10 h-10 cursor-pointer hover:-translate-y-1 transition-transform border border-[#DFE4EA] rounded-full p-2"
              />
            </div>

            <p
              className="text-[16px] text-[#94a3b8] font-bold z-10 w-full text-left"
              dir="ltr"
            >
              © 2023 Smart Technology.
            </p>
            <img
              src={circle}
              alt=""
              className="absolute -bottom-40 -left-4 w-32  pointer-events-none z-0"
            />
          </div>
        </div>
        <div className="h-16"></div>
      </div>
      <div className="w-full bg-[#4a6d8c] py-8 px-6 mt-10">
        <div className="max-w-4xl mx-auto text-white/90 text-xs md:text-sm text-center leading-loose font-medium">
          نحترم خصوصيتك. أي بيانات ترسلها عبر نموذج التواصل (مثل الاسم ورقم
          الهاتف) تُستخدم فقط للتواصل معك بخصوص طلبك.
          <br />
          لا نقوم ببيع أو مشاركة بياناتك مع أي طرف ثالث إلا عند الضرورة لتنفيذ
          الخدمة وبموافقتك.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
