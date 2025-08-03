import { useEffect, useState } from 'react';

export default function SidebarAd({ category = 'sidebar' }) {
  const [ad, setAd] = useState(null);

  useEffect(() => {
    const fetchSidebarAd = async () => {
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
    fetchSidebarAd();
  }, [category]);

  if (!ad) return null;

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4'>
      <div className='text-xs text-gray-500 mb-2 text-center'>Advertisement</div>
      <div className='text-center'>
        <img
          src={ad.image}
          alt={ad.title}
          className='w-full h-32 object-cover rounded-lg mb-2'
        />
        <h3 className='text-sm font-semibold mb-1 line-clamp-2'>{ad.title}</h3>
        <div
          className='text-xs text-gray-600 dark:text-gray-400 line-clamp-2'
          dangerouslySetInnerHTML={{
            __html: ad.content && ad.content.substring(0, 80) + '...'
          }}
        ></div>
      </div>
    </div>
  );
}
