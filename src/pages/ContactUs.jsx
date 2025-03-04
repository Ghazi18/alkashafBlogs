import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">تواصل معنا</h2>
          <p className="mt-4 text-gray-500 sm:text-xl">
            متواجدون هنا دائما لخدمتكم ولسبل التعاون ولخدمة لغتنا الام
          </p>
        </div>

        <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center rounded-lg bg-blue-50 px-4 py-8 text-center">
            <FaFacebook className="text-blue-600 text-5xl" />
            <dt className="mt-4 text-lg font-medium text-gray-500">Facebook</dt>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-blue-50 px-4 py-8 text-center">
            <FaInstagram className="text-pink-500 text-5xl" />
            <dt className="mt-4 text-lg font-medium text-gray-500">Instagram</dt>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-blue-50 px-4 py-8 text-center">
            <FaTwitter className="text-blue-400 text-5xl" />
            <dt className="mt-4 text-lg font-medium text-gray-500">Twitter</dt>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-blue-50 px-4 py-8 text-center">
            <FaGithub className="text-gray-800 text-5xl" />
            <dt className="mt-4 text-lg font-medium text-gray-500">GitHub</dt>
          </div>
        </dl>
      </div>
    </div>
  );
}
