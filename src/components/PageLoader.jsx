import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import pageLoader from "../assets/loader.json"
export default function PageLoader() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-900">
      <Lottie className='size-40' animationData={pageLoader}/>
    </div>
  );
}