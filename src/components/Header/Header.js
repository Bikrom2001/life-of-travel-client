import React, { useContext, useState } from 'react'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
      })
      .catch(error => console.error(error))
  }


  return (
    <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between'>
        <Link
          to='/'
          aria-label='Life of Travel'
          title='Life of Travel'
          className='inline-flex items-center'
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8">
            <path d="M412.284,294.37l-12.5,15.642c-8.354,10.454-50.027,64.208-50.027,95.883,0,36.451,28.049,66.105,62.526,66.105s62.527-29.654,62.527-66.105c0-31.675-41.673-85.429-50.028-95.883Zm0,145.63c-16.832,0-30.526-15.3-30.526-34.105,0-11.662,15.485-37.883,30.531-59.2,15.043,21.3,30.522,47.509,30.522,59.2C442.811,424.7,429.116,440,412.284,440Z"></path>
            <path d="M122.669,51.492,96.133,124.4,30.092,97.205,17.908,126.8l67.271,27.7L26.9,314.606a48.056,48.056,0,0,0,28.689,61.523l184.719,67.232a48,48,0,0,0,61.523-28.688L397.6,151.56Zm149.1,352.236a16,16,0,0,1-20.508,9.563L66.537,346.059a16,16,0,0,1-9.563-20.507L73.553,280H316.8ZM85.2,248l29.594-81.311,36.333,14.961a32.644,32.644,0,1,0,11.236-29.98l-36.615-15.077,16.046-44.085,214.79,78.177L328,249.219V248Z"></path>
          </svg>
          <span className='ml-2 text-xl font-bold tracking-wide text-white uppercase'>
            Life of Travel
          </span>
        </Link>
        <ul className='flex items-center hidden space-x-8 lg:flex'>
          <li>
            <Link
              to='/home'
              aria-label='Home'
              title='Home'
              className='font-medium tracking-wide uppercase text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/Blog'
              aria-label='Blog'
              title='Blog'
              className='font-medium tracking-wide uppercase text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
            >
              Blog
            </Link>
          </li>

          {
            !user?.uid ?
              <li>
                <Link
                  to='/login'
                  aria-label='Login'
                  title='Login'
                  className='font-medium tracking-wide uppercase text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                >
                  Login
                </Link>
              </li>
              :
              <>
                <li>
                  <Link
                    to='/reviews'
                    aria-label='reviews'
                    title='reviews'
                    className='font-medium tracking-wide uppercase text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                  >
                    <p> My Reviews </p>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/addservice'
                    aria-label='addservice'
                    title='addservice'
                    className='font-medium tracking-wide uppercase text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                  >
                    <p> Add service </p>
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={handleLogOut}
                    aria-label='logout'
                    title='logout'
                    className='font-medium tracking-wide uppercase text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                  >
                    logout
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label='Profile'
                    title='Profile'
                    className='font-medium tracking-wide uppercase text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                  >
                    {
                      user?.photoURL ?
                        <img src={user?.photoURL} alt="" className="self-center flex-shrink-0 w-10 h-10 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                        :
                        <FaUser className="self-center flex-shrink-0 w-10 h-10 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"></FaUser>
                    }
                  </Link>
                </li>

              </>
          }


        </ul>
        <div className='lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
              />
              <path
                fill='currentColor'
                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
              />
              <path
                fill='currentColor'
                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-20'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link
                      to='/'
                      aria-label='Company'
                      title='Company'
                      className='inline-flex items-center'
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8">
                        <path d="M412.284,294.37l-12.5,15.642c-8.354,10.454-50.027,64.208-50.027,95.883,0,36.451,28.049,66.105,62.526,66.105s62.527-29.654,62.527-66.105c0-31.675-41.673-85.429-50.028-95.883Zm0,145.63c-16.832,0-30.526-15.3-30.526-34.105,0-11.662,15.485-37.883,30.531-59.2,15.043,21.3,30.522,47.509,30.522,59.2C442.811,424.7,429.116,440,412.284,440Z"></path>
                        <path d="M122.669,51.492,96.133,124.4,30.092,97.205,17.908,126.8l67.271,27.7L26.9,314.606a48.056,48.056,0,0,0,28.689,61.523l184.719,67.232a48,48,0,0,0,61.523-28.688L397.6,151.56Zm149.1,352.236a16,16,0,0,1-20.508,9.563L66.537,346.059a16,16,0,0,1-9.563-20.507L73.553,280H316.8ZM85.2,248l29.594-81.311,36.333,14.961a32.644,32.644,0,1,0,11.236-29.98l-36.615-15.077,16.046-44.085,214.79,78.177L328,249.219V248Z"></path>
                      </svg>
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        Life of Travel
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link
                        to='/Blog'
                        aria-label='Blog'
                        title='Blog'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Blog
                      </Link>
                    </li>
                  
                  

                    {
                      !user?.uid ?
                        <li>
                          <Link
                            to='/login'
                            aria-label='Login'
                            title='Login'
                            className='font-medium tracking-wide uppercase text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                          >
                            Login
                          </Link>
                        </li>
                        :
                        <>

                            <li>
                      <Link
                        to='/reviews'
                        aria-label='reviews'
                        title='reviews'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        <p> My Reviews</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/addservice'
                        aria-label='addservice'
                        title='addservice'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        <p> Add Service</p>
                      </Link>
                    </li>

                          <li>
                            <Link
                              onClick={handleLogOut}
                              aria-label='logout'
                              title='logout'
                              className='font-medium tracking-wide uppercase text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                            >
                              logout
                            </Link>
                          </li>
                          <li>
                            <Link
                              aria-label='Profile'
                              title='Profile'
                              className='font-medium tracking-wide uppercase text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                            >
                              {
                                user?.photoURL ?
                                  <img src={user?.photoURL} alt="" className="self-center flex-shrink-0 w-10 h-10 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                                  :
                                  <FaUser className="self-center flex-shrink-0 w-10 h-10 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"></FaUser>
                              }
                            </Link>
                          </li>

                        </>
                    }


                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
