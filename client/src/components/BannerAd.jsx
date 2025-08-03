import { useEffect, useState } from 'react';

export default function BannerAd({ category = 'banner' }) {
  const [ad, setAd] = useState(null);

  useEffect(() => {
    const fetchBannerAd = async () => {
      try {
        const res = await fetch(`/api/add/getAdds?category=${category}&limit=1`);
        const data = await res.json();
        if (res.ok && data.adds.length > 0) {
          setAd(data.adds[0]);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchBannerAd();
  }, [category]);

  if (!ad) return null;

  return (
    <div className='bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-lg p-6 mb-6'>
      <div className='text-xs text-gray-500 mb-3 text-center'>Advertisement</div>
      <div className='flex flex-col md:flex-row items-center gap-4'>
        <img
          src={ad.image}
          alt={ad.title}
          className='w-full md:w-48 h-32 object-cover rounded-lg'
        />
        <div className='flex-1 text-center md:text-left'>
          <h3 className='text-xl font-bold mb-2 text-gray-800 dark:text-white'>{ad.title}</h3>
          <div
            className='text-gray-600 dark:text-gray-300 line-clamp-3'
            dangerouslySetInnerHTML={{
              __html: ad.content && ad.content.substring(0, 200) + '...'
            }}
          ></div>
          <div className='mt-3'>
            <span className='inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm'>
              {ad.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
