import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12 static ">
      <div className="max-w-6xl mx-auto bottom-0 flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-4 md:mb-0">
          <h2 className="font-bold text-xl">Fry Coffee</h2>
          <p className="text-gray-400">تجربه بهترین قهوه‌ها</p>
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-yellow-500">
            خانه
          </Link>
          <Link href="/about" className="hover:text-yellow-500">
            درباره ما
          </Link>
          <Link href="/content" className="hover:text-yellow-500">
            تماس با ما
          </Link>
          <Link href="/product" className="hover:text-yellow-500">
            فروشگاه
          </Link>
        </div>
        <p className="text-gray-500 mt-4 md:mt-0">
          © 2025 Fry Coffee. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
