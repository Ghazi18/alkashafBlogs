import { FaFacebook, FaInstagram, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactUs() {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          للنقد أو الاقتراحات أياً كانت، تواصل معنا وسنجيبك في أقرب وقت ان شاء الله
          </h2>
          {/* <p className="mt-4 text-gray-500 sm:text-xl">
            متواجدون هنا دائما لخدمتكم ولسبل التعاون ولخدمة لغتنا الام
          </p> */}
        </div>

        {/* <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center rounded-lg bg-blue-50 px-4 py-8 text-center">
            <FaInstagram className="text-pink-500 text-5xl" />
            <dt className="mt-4 text-lg font-medium text-gray-500">
              Instagram
            </dt>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-blue-50 px-4 py-8 text-center">
            <FaXTwitter className="text-blue-400 text-5xl" />
            <dt className="mt-4 text-lg font-medium text-gray-500">Twitter</dt>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-blue-50 px-4 py-8 text-center">
            <FaGlobe className="text-gray-800 text-5xl" />
            <dt className="mt-4 text-lg font-medium text-gray-500">GitHub</dt>
          </div>
        </dl> */}
      </div>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <div className=" flex justify-center gap-x-16 gap-y-8  ">
            {/* Form Section */}
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 text-right">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    الاسم
                  </label>
                  <input
                    className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm text-right"
                    placeholder="الاسم"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      البريد
                    </label>
                    <input
                      className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm text-right"
                      placeholder="البريد"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      الجوال
                    </label>
                    <input
                      className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm text-right"
                      placeholder="الجوال"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    نص الرسالة
                  </label>
                  <textarea
                    className="w-full rounded-lg border-2 border-gray-400 p-3 text-sm text-right"
                    placeholder="نص الرسالة"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    ارسال
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info Section */}
            {/* <div className="lg:col-span-2 lg:py-12 text-right">
              <p className="max-w-xl text-lg">
                هو منصة متخصصة في تقديم خدمة المعاجم العربية، حيث يوفر
                للمستخدمين إمكانية البحث عن معاني الكلمات والمصطلحات باللغة
                العربية بدقة وسهولة. يتميز الموقع بقاعدة بيانات غنية تشمل معاجم
                عربية قديمة وحديثة، مما يتيح للمستخدمين الوصول إلى الشروحات
                اللغوية، والمترادفات، والأضداد، والمشتقات، والتصريفات النحوية
                للكلمات. يقدم الموقع واجهة استخدام سهلة وبسيطة، تتيح للباحثين،
                الطلاب، واللغويين استكشاف المعاني بسرعة ودقة.
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-purple-600">
                  0151 475 4450
                </a>
                <address className="mt-2 not-italic">
                  المملكة العربية السعودية , جدة حي الروضة
                </address>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
