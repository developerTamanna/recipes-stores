import { Mail } from 'lucide-react';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white px-4 py-16 font-sans mt-10">
      <div
        className="mx-auto max-w-6xl px-4 py-12 border-y border-[#c59d5f]"
        style={{
          backgroundImage: "url('https://i.postimg.cc/ZqhH2Kk4/footer-bg.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="grid grid-cols-3 text-sm gap-8 text-gray-300">
          {/* Left navigation */}
          <ul className="flex flex-col items-start space-y-4 tracking-wider uppercase text-xs">
            <li>
              <Link className="hover:text-[#c59d5f]">Home</Link>
            </li>
            <li>
              <Link className="hover:text-[#c59d5f]">Menus</Link>
            </li>
            <li>
              <Link className="hover:text-[#c59d5f]">About Us</Link>
            </li>
            <li>
              <Link className="hover:text-[#c59d5f]">Our Chefs</Link>
            </li>
            <li>
              <Link className="hover:text-[#c59d5f]">Contact</Link>
            </li>
          </ul>

          {/* Center content */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://i.postimg.cc/sXGpgkCw/badge-1.png"
              alt="Grilli Logo"
              className="h-12 mb-6"
            />
            <p>Restaurant St, Delicious City, London 9578, UK</p>
            <a
              href="mailto:booking@grilli.com"
              className="text-[#c59d5f] hover:underline"
            >
              booking@grilli.com
            </a>
            <a
              href="tel:+88123123456"
              className="text-[#c59d5f] hover:underline"
            >
              Booking Request : +88-123-123456
            </a>
            <p>Open : 09:00 am – 01:00 pm</p>

            <div className="flex justify-center gap-1 my-3">
              <div className="w-3 h-[2px] bg-[#c59d5f]"></div>
              <div className="w-3 h-[2px] bg-[#c59d5f]"></div>
              <div className="w-3 h-[2px] bg-[#c59d5f]"></div>
            </div>

            <h2 className="text-white text-3xl font-light mb-1">
              Get News & Offers
            </h2>
            <p className="text-xs">
              Subscribe us & Get{' '}
              <span className="text-[#c59d5f] font-bold">25% Off.</span>
            </p>

            <form className="mt-6 w-full max-w-md flex">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-4 h-4" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-black border border-gray-600 py-2 pl-10 pr-4 placeholder-gray-400 text-white text-sm focus:outline-none"
                />
              </div>
              <button
                type="button"
                className="bg-[#c59d5f] text-black px-5 text-sm font-semibold border-l border-gray-500 hover:bg-[#b48d55]"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right navigation */}
          <ul className="flex flex-col items-end space-y-4 tracking-wider uppercase text-xs">
            <li>
              <Link className="hover:text-[#c59d5f]">Facebook</Link>
            </li>
            <li>
              <Link className="hover:text-[#c59d5f]">Instagram</Link>
            </li>
            <li>
              <Link className="hover:text-[#c59d5f]">Twitter</Link>
            </li>
            <li>
              <Link className="hover:text-[#c59d5f]">YouTube</Link>
            </li>
            <li>
              <Link className="hover:text-[#c59d5f]">Google Map</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-xs">
        © 2025 Grilli. All Rights Reserved | Crafted by{' '}
        <a
          href="https://github.com/developerTamanna"
          className="text-[#c59d5f] underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tamanna AKter
        </a>
      </div>
    </footer>
  );
}
