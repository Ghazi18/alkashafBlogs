export default function ContactUs() {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl ">
          للنقد أو الاقتراح أو الاستفسار، تواصل معنا وسنجيبك في أقرب وقت إن شاء
          الله تعالى
        </h2>
      </div>

      <section className="mt-8">
        <div className="mx-auto max-w-2xl">
          <div
            className="rounded-lg bg-white p-6 shadow-lg text-right"
            dir="rtl"
          >
            <form action="#" className="space-y-6">
              <div>
                <label className="sr-only" htmlFor="name">
                  الاسم
                </label>
                <input
                  className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-black focus:ring-black"
                  placeholder="الاسم"
                  type="text"
                  id="name"
                  dir="rtl"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    البريد
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-black focus:ring-black"
                    placeholder="البريد"
                    type="email"
                    id="email"
                    dir="rtl"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    الجوال
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-black focus:ring-black"
                    placeholder="الجوال"
                    type="tel"
                    id="phone"
                    dir="rtl"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  نص الرسالة
                </label>
                <textarea
                  className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-black focus:ring-black"
                  placeholder="نص الرسالة"
                  rows="6"
                  id="message"
                  dir="rtl"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-black px-5 py-3 text-center font-medium text-white hover:bg-gray-800"
                >
                  ارسال
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
