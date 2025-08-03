import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import AdCard from '../components/AdCard';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [featuredAds, setFeaturedAds] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchFeaturedAds = async () => {
      try {
        const res = await fetch('/api/add/getAdds?limit=3');
        const data = await res.json();
        if (res.ok) {
          setFeaturedAds(data.adds);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchFeaturedAds();
  }, []);
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28'>
          <div className='text-center'>
            <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8'>
              Welcome to{' '}
              <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                Sameera's Blog
              </span>
            </h1>
            <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed'>
              Discover insightful articles and tutorials on web development, software engineering, 
              and the latest programming technologies. Join our community of developers and tech enthusiasts.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link
                to='/search'
                className='inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl'
              >
                Explore All Posts
                <svg className='ml-2 w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                </svg>
              </Link>
              <Link
                to='/about'
                className='inline-flex items-center px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-base font-medium rounded-full text-gray-700 dark:text-gray-300 hover:border-purple-500 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300'
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div className='p-6'>
              <div className='text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2'>100+</div>
              <div className='text-gray-600 dark:text-gray-300'>Articles Published</div>
            </div>
            <div className='p-6'>
              <div className='text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2'>50K+</div>
              <div className='text-gray-600 dark:text-gray-300'>Readers Reached</div>
            </div>
            <div className='p-6'>
              <div className='text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2'>5+</div>
              <div className='text-gray-600 dark:text-gray-300'>Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='py-16 bg-amber-50 dark:bg-gray-900'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <CallToAction />
        </div>
      </section>

      {/* Featured Advertisements Section */}
      {featuredAds && featuredAds.length > 0 && (
        <section className='py-16 bg-gray-50 dark:bg-gray-800'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                Featured Partnerships
              </h2>
              <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
                Discover amazing products and services from our trusted partners
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
              {featuredAds.map((ad) => (
                <AdCard key={ad._id} ad={ad} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts Section */}
      {posts && posts.length > 0 && (
        <section className='py-16 bg-white dark:bg-gray-900'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                Latest Articles
              </h2>
              <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
                Stay updated with the latest insights, tutorials, and industry trends
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-12'>
              {posts.slice(0, 6).map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <div className='text-center'>
              <Link
                to='/search'
                className='inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              >
                View All Articles
                <svg className='ml-2 w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className='py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-white mb-4'>
            Stay in the Loop
          </h2>
          <p className='text-xl text-purple-100 mb-8 max-w-2xl mx-auto'>
            Get the latest articles and tutorials delivered straight to your inbox
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 px-6 py-3 rounded-full border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600'
            />
            <button className='px-8 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg'>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}