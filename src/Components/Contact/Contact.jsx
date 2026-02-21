import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import phone from "../../assets/phone-ring.png";
import whats from "../../assets/mobile-alt-1.png";
import emailIcon from "../../assets/envelope.png";
import shape from "../../assets/Oval.png";
import points from "../../assets/Dotted Shape.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    job_type: "",
    message: "",
    company: "Smart Website Client"
  });
  const [errors, setErrors] = useState({});
  const validateField = (name, value) => {
    let errorMsg = "";
    if (name === "name") {
      if (value.trim().length < 3) errorMsg = "الاسم لازم يكون 3 حروف على الأقل";
    }
    if (name === "phone") {
      const egyptPhoneRegex = /^(010|011|012|015)[0-9]{8}$/;
      if (!egyptPhoneRegex.test(value)) errorMsg = "رقم الهاتف غير صحيح (لازم 11 رقم مصري)";
    }
    if (name === "job_type") {
      if (!value) errorMsg = "لازم تختار نوع الخدمة";
    }
    if (name === "message") {
      if (value.trim().length < 10) errorMsg = "اكتب تفاصيل أكتر شوية (10 حروف ع الأقل)";
    }

    setErrors(prev => ({ ...prev, [name]: errorMsg }));
    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameErr = validateField("name", formData.name);
    const phoneErr = validateField("phone", formData.phone);
    const jobErr = validateField("job_type", formData.job_type);
    const msgErr = validateField("message", formData.message);

    if (nameErr || phoneErr || jobErr || msgErr) {
      return; 
    }

    try {
      const response = await axios.post("http://localhost:8000/api/v1/contact", formData);
      Swal.fire({
        icon: 'success',
        title: 'تم الإرسال!',
        text: 'تم استلام بياناتك بنجاح، شكراً لك.',
        timer: 3000,
        showConfirmButton: false,
      });
      setFormData({ name: "", phone: "", job_type: "", message: "", company: "Smart Website Client" });
      setErrors({});
      
    } catch (error) {
      let errorMsg = "تأكد من تشغيل السيرفر وحاول مرة أخرى";
      if (error.response) {
        errorMsg = error.response.data.message || "بيانات غير صحيحة";
      }

      Swal.fire({
        icon: 'error',
        title: 'حدث خطأ',
        text: errorMsg,
        confirmButtonColor: '#E9967A',
      });
    }
  };
  const getInputClasses = (fieldName) => {
    const baseClasses = "w-full p-4 bg-white/50 rounded-2xl border transition-all outline-none ";
    const errorClasses = errors[fieldName] 
      ? "border-red-500 focus:ring-red-100 bg-red-50/30 " 
      : "border-gray-200 focus:bg-white focus:border-[#1589EE] focus:ring-4 focus:ring-blue-100 ";
    return baseClasses + errorClasses;
  };

  return (
    <>
      <div className="py-20 px-4 md:px-16 relative overflow-hidden mt-20 mb-20" dir="rtl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="text-right">
            <h6 className="text-[#3758F9] font-bold text-lg mb-4">تواصل معنا</h6>
            <h2 className="text-5xl font-black text-[#444444] mb-4">بيانات التواصل</h2>
            <p className="text-[#637381] font-bold mb-12 text-lg leading-relaxed">
              يفضل ارسال نوع الخدمة + فكرة المشروع + مثال/لينك قريب من المطلوب
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-16 flex items-center justify-center bg-blue-50 rounded-2xl group-hover:scale-110 transition-transform">
                  <img src={phone} alt="phone" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#444444] mb-4">الهاتف/ واتساب</h3>
                  <p className="text-gray-500 font-medium">01005028284</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-16 flex items-center justify-center bg-blue-50 rounded-2xl group-hover:scale-110 transition-transform">
                  <img src={whats} alt="whatsapp" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#444444] mb-4">واتساب مباشر</h3>
                  <p className="text-gray-500 font-medium">فتح المحادثة</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-16 flex items-center justify-center bg-blue-50 rounded-2xl group-hover:scale-110 transition-transform">
                  <img src={emailIcon} alt="email" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#444444] mb-4">البريد الإلكتروني</h3>
                  <p className="text-gray-500 font-medium">info@yourdomain.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-10 lg:mt-0">
            <img src={shape} className="absolute -top-12 -right-12 w-40 z-0 opacity-40 select-none" alt="" />
            <img src={points} className="absolute top-4 -right-8 w-24 z-0 opacity-80 select-none" alt="" />
            <img src={points} className="absolute -bottom-10 -left-10 w-28 z-0 opacity-80 select-none" alt="" />

            <form onSubmit={handleSubmit} className="relative z-10 bg-white/40 backdrop-blur-md p-8 px-10 md:p-12 rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/20">
              <div className="space-y-6 text-right">
                <div>
                  <label className="block mb-2 font-bold text-[#242424] mr-2">الاسم</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="اسمك الكامل"
                    className={getInputClasses("name")}
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1 mr-2 block font-bold">{errors.name}</span>}
                </div>
                <div>
                  <label className="block mb-2 font-bold text-[#242424] mr-2">الهاتف</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={getInputClasses("phone")}
                    dir="rtl"
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1 mr-2 block font-bold">{errors.phone}</span>}
                </div>
                <div>
                  <label className="block mb-2 font-bold text-[#242424] mr-2">نوع الخدمة</label>
                  <div className="relative">
                    <select
                      name="job_type"
                      value={formData.job_type}
                      onChange={handleChange}
                      className={getInputClasses("job_type") + " appearance-none cursor-pointer"}
                    >
                      <option value="" disabled hidden></option>
                      <option value="web_design">تصميم واجهات المستخدم (UI/UX)</option>
                      <option value="frontend">تطوير المواقع (Front-End)</option>
                      <option value="fullstack">تطوير موقع متكامل (Full-Stack)</option>
                      <option value="ecommerce">إنشاء متجر إلكتروني</option>
                      <option value="mobile_app">تطوير تطبيق موبايل</option>
                      <option value="branding">تصميم هوية بصرية (Branding)</option>
                    </select>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                  {errors.job_type && <span className="text-red-500 text-xs mt-1 mr-2 block font-bold">{errors.job_type}</span>}
                </div>
                <div>
                  <label className="block mb-2 font-bold text-[#242424] mr-2">تفاصيل الطلب</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    maxLength="50"
                    placeholder="تفاصيل الطلب"
                    className={getInputClasses("message") + " resize-none"}
                  ></textarea>
                  <div className="flex justify-between items-center mt-1 px-2">
                    {errors.message ? 
                      <span className="text-red-500 text-xs font-bold">{errors.message}</span> : 
                      <span></span> 
                    }
                    <span className="text-xs text-gray-500">{formData.message.length}/50</span>
                  </div>
                </div>

                <button type="submit" className="w-full py-4 bg-[#E9967A] text-white rounded-2xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">
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