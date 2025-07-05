import {
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

const TopHeader = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-gray-200 text-sm py-2 px-4 border-b border-yellow-500 hidden md:flex transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        {/* Left Side Info */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-yellow-500" />
            <span>Restaurant St, Delicious City, Sylhet 9578, BD</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-yellow-500" />
            <span>Daily: 8.00 am to 10.00 pm</span>
          </div>
        </div>

        {/* Right Side Info */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-yellow-500" />
            <span>880 123 456 9529</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-yellow-500" />
            <span>booking@restaurant.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
