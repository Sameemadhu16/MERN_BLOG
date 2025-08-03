import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className='group relative w-full max-w-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'>
      <Link to={`/post/${post.slug}`} className='block relative overflow-hidden'>
        <img
          src={post.image}
          alt='post cover'
          className='h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500'
        />
        <div className='absolute top-4 right-4'>
          <span className='bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg'>
            {post.category}
          </span>
        </div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      </Link>
      
      <div className='p-6'>
        <Link to={`/post/${post.slug}`}>
          <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300'>
            {post.title}
          </h3>
        </Link>
        
        <div className='flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4'>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          <span>{Math.ceil(post.content.length / 1000)} min read</span>
        </div>
        
        <Link
          to={`/post/${post.slug}`}
          className='inline-flex items-center text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-800 dark:hover:text-teal-300 transition-colors duration-300 group/link'
        >
          Read Article
          <svg className='w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </Link>
      </div>
      
      {/* Decorative elements */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-600'></div>
    </div>
  );
}