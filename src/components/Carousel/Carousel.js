import React from 'react';

const Carousel = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/4269934/pexels-photo-4269934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">Smile Makes
                  <span className="dark:text-violet-400">A Lasting Impression</span>delectus
                </h1>
                <p className="px-8 mt-8 mb-4 text-lg">Your Health is Our Top Priority with Comprehensive, Affordable medical.!</p>
                <div className="flex flex-wrap justify-center">
                  <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
                  <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-white">Learn more</button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">Helping Your
                  <span className="dark:text-violet-400">Stay Happy One</span>delectus
                </h1>
                <p className="px-8 mt-8 mb-4 text-lg">Everyday We Bring Hope and Smile to the Patient We Serve</p>
                <div className="flex flex-wrap justify-center">
                  <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
                  <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-white">Learn more</button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">We Provide
                  <span className="dark:text-violet-400">Best Healthcare</span>delectus
                </h1>
                <p className="px-8 mt-8 mb-4 text-lg">Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum</p>
                <div className="flex flex-wrap justify-center">
                  <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
                  <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-white">Learn more</button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Carousel;