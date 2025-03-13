export default function AboutUs() {
  return (
    <div className="bg-gray-100 py-12 rounded-md">
      <section className="container mx-auto px-6 lg:px-8 text-right">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
          {/* <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-auto object-cover"
              alt="About Us"
            />
          </div> */}
          <div className="space-y-6" style={{ direction: "rtl", unicodeBidi: "plaintext" }}>
            <h2 className="text-5xl font-bold text-black text-center">الكشـــاف</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              هو منصة متخصصة في تقديم خدمة المعاجم العربية، حيث يوفر للمستخدمين
              إمكانية البحث عن معاني الكلمات والمصطلحات باللغة العربية بدقة
              وسهولة. يتميز الموقع بقاعدة بيانات غنية تشمل معاجم عربية قديمة
              وحديثة، مما يتيح للمستخدمين الوصول إلى الشروحات اللغوية،
              والمترادفات، والأضداد، والمشتقات، والتصريفات النحوية للكلمات.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              يقدم الموقع واجهة استخدام سهلة وبسيطة، تتيح للباحثين، الطلاب،
              واللغويين استكشاف المعاني بسرعة ودقة. كما يضم أدوات متقدمة مثل
              البحث الصوتي، والتعرف على الكلمة من خلال الجذر اللغوي، وتوفير
              اقتراحات لكلمات مشابهة أو ذات صلة. سواء كنت طالبًا، كاتبًا، أو
              باحثًا في اللغة العربية، فإن هذا الموقع سيكون أداة قيمة تساعدك
              في الوصول إلى أدق المعلومات اللغوية بسهولة واحترافية.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
