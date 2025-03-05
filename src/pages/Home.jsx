import { Link } from "react-router-dom";
import { blogs } from "../constants/blogsData"; // Importing shared blogs data

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto pb-2" dir="rtl">
      <h1 className="text-4xl font-bold mb-10 md:mb-16 text-right">
        أحدث المقالات
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <Link key={blog.id} to={`/blog/${blog.id}`} className="block">
            <div className="rounded-lg py-5 text-right   transition">
              <p className="text-gray-500 text-xs font-semibold">{blog.date}</p>
              <h2 className="text-2xl font-bold text-black mt-2">
                {blog.title}
              </h2>
              <p className="text-gray-700 mt-2 text-md">{blog.intro}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

//   shadow-sm hover:shadow-md transition
// hover:bg-gray-100
