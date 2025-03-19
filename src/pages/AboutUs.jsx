export default function AboutUs() {
  return (
    <div className=" py-12 rounded-md">
      <section className="container mx-auto px-6 lg:px-8 text-right">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
          {/* <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-auto object-cover"
              alt="About Us"
            />
          </div> */}
          <div
            className="space-y-6"
            style={{ direction: "rtl", unicodeBidi: "plaintext" }}
          >
            <h2 className="text-5xl font-bold text-black text-center">
              الكشـــاف
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              الكشّاف مشروع يعنى بوصل اللغة العربية خاصّة، وعلوم التراث عامّة،
              بحاجات النّاس، والمشتغلين بمختلف العلوم والفنون. ونحن بهذا لا نحيط
              اللغة بالوعظ البارد، ولا نكتفي بالحثّ عليها، وبيان قيمتها، وفضلها
              على سائر اللغات، وإنما ننفذ بها إلى السوق، وإلى ورش الأعمال،
              ومراكز البحث، وخدمة الباحثين كل في علمه وفنّه. ونقول: إن حاجة
              العلوم والصناعات إلى اللغة أشد من حاجة اللغة إليها، ولن تحيا اللغة
              إلا بردها آلة، بعد أن ظلت ردحاً طويلاً من الزمان غاية ينقطع عندها
              الطريق.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              يقوم المشروع اليوم على بنية رقميّة تسهل البحث في التراث العربيّ،
              وههنا منتجان رقميّان: أما الأول، فهو الكشّاف عن الألفاظ: وهو معجم
              ذكيّ يكشف لك عن معاني الكلمات في أهم المعاجم العربيّة، دون الحاجة
              إلى معرفة شيء في علم التصريف. وأما الثاني، فهو الكشّاف عن المعاني،
              وهم معجم تفصح له عما يدور في خلدك من معانٍ ، ليرشدك إلى الألفاظ
              التي تعبّر عنها، وهذه الألفاظ هي مفاتحك للبحث عمّا يهمك في كتب
              التراث. ونحن نعبّر عن أفكار المشروع وفلسفته ونستكتب لذلك
              في هذه المدوّنة.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
