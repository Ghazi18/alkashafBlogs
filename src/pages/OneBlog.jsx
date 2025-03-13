import { useParams } from "react-router-dom";
import { blogs } from "../constants/blogsData"; // Importing shared blogs data
import { FaInstagram, FaGlobe } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import NotFound from "./NotFound";

export default function OneBlog() {
  const { id } = useParams();

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <NotFound />;
  }

  return (
    <div className="max-w-3xl mx-auto p-5 text-center">
      <h1
        style={{ direction: "rtl", unicodeBidi: "plaintext" }}
        className="text-5xl font-bold"
      >
        {blog.title}
      </h1>
      <p
        style={{ direction: "rtl", unicodeBidi: "plaintext" }}
        className="text-gray-600 mt-8 text-md text-lg text-right"
      >
        {blog.intro}
      </p>

      {/* Social Media Icons */}
      <div className="flex gap-3 my-3 justify-center">
        <ul className="my-6 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="text-xl" />
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">X</span>
              <FaXTwitter className="text-xl" />
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Website</span>
              <FaGlobe className="text-xl" />
            </a>
          </li>
        </ul>
      </div>

      {/* Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg my-4"
      />

      <div className=" my-8 flex flex-col gap-2">
        <span className="font-bold text-lg">{blog.author}</span>
        <span className="text-gray-500 text-md">{blog.date}</span>
      </div>

      <hr className="my-8 border-t border-gray-300" />

      {/* Blog Content */}
      <div
        className="mt-4 text-xl  leading-9 text-right space-y-4"
        style={{ direction: "rtl", unicodeBidi: "plaintext" }}
      >
        {blog.body.split(".").map((paragraph, index) =>
          paragraph.trim() ? (
            <p className="font-normal " key={index}>
              {paragraph}.
            </p>
          ) : null
        )}
      </div>
    </div>
  );
}
