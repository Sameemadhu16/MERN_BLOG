import { Link } from 'react-router-dom';

export default function AdCard({ ad }) {
  return (
    <div className='group relative w-full max-w-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'>
      <div className='relative overflow-hidden'>
        <img
          src={ad.image}
          alt='ad'
          className='h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500'
        />
        <div className='absolute top-4 right-4'>
          <span className='bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg'>
            {ad.category}
          </span>
        </div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      </div>
      
      <div className='p-6'>
        <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300'>
          {ad.title}
        </h3>
        
        <div
          className='text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4 leading-relaxed'
          dangerouslySetInnerHTML={{
            __html: ad.content && ad.content.substring(0, 120) + '...'
          }}
        ></div>
        
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
            <span className='text-xs text-gray-500 dark:text-gray-400 font-medium'>
              Sponsored
            </span>
          </div>
          
          <button className='text-teal-600 dark:text-teal-400 font-semibold text-sm hover:text-teal-800 dark:hover:text-teal-300 transition-colors duration-300 flex items-center space-x-1'>
            <span>Learn More</span>
            <svg className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-600'></div>
    </div>
  );
}
