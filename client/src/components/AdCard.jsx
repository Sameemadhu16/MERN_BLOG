import { Link } from 'react-router-dom';

export default function AdCard({ ad }) {
  return (
    <div className='group relative w-full border border-blue-500 hover:border-2 h-[300px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
      <img
        src={ad.image}
        alt='ad'
        className='h-[200px] w-full object-cover group-hover:h-[160px] transition-all duration-300 z-20'
      />
      <div className='p-3 flex flex-col gap-2'>
        <p className='text-lg font-semibold line-clamp-2'>{ad.title}</p>
        <span className='italic text-sm text-gray-500'>{ad.category}</span>
        <div
          className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'
          dangerouslySetInnerHTML={{
            __html: ad.content && ad.content.substring(0, 100) + '...'
          }}
        ></div>
        <div
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          Advertisement
        </div>
      </div>
    </div>
  );
}
