import React from 'react';
import '../../App.css';
import '../../custom.css';

const Homepage = () => {
  return (
    <div className='pt-32 sm:pt-20 min-h-[80vh]'>
      <main className=' flex justify-between items-center py-1 mb-5  relative'>
        <section className='max-w-xl mx-auto sm:mx-0  w-full py-2  lg:w-1/3'>
          <h1 className='text-6xl  sm:text-7xl lg:text-8xl font-semibold  py-3 w-full '>
            Glasses &amp; Lens
          </h1>
          <p className='py-3 text-md  text-gray-600'>
            Buy the best high-quality sunglasses from us.
            <br />
            More than 100 types of assortment.
          </p>
          <section className='flex items-center'>
            <button className='btn-primary text-sm md:text-base'>
              Start Shopping
            </button>

            <button className='p-3 flex items-center'>
              <span className='mx-2 text-sm md:text-base'>Explore More</span>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 16 16'
                className='text-lg'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768L5.854 5.146z'
                ></path>
              </svg>
            </button>
          </section>
        </section>
        <section className='hidden w-1/2 lg:flex justify-end'>
          <img
            src='src\assets\bannerImg.png'
            alt='bannerImg'
            className='w-2/3 h-full'
          />
        </section>
      </main>
      <section className='grid  grid-cols-1 xs:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-4  py-4 mt-10'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl  break-words flex items-center '>
          Trending Products
        </h1>
        <a
          className='flex flex-col    px-4 py-2 rounded-xl  bg-black/[.06] cursor-pointer gap-3 '
          href='/product/3d7e9c33-0080-4bd2-b2bf-56552da31e35'
        >
          <div className='flex justify-between gap-3 xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between'>
            <div>
              <h1 className='text-xl xs:text-base sm:text-xl font-bold'>
                Ardor Avaitor
              </h1>
            </div>
            <div className='flex flex-col items-start '>
              <div className='flex items-center justify-between'>
                <h1 className=' text-lg xs:text-base sm:text-lg font-bold'>
                  ₹1999
                </h1>
                <button className='p-0.5 custom-bg-gradient rounded-md ms-2'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    t='1551322312294'
                    viewBox='0 0 1024 1024'
                    version='1.1'
                    className='text-white font-bold text-sm'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <defs></defs>
                    <path d='M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z'></path>
                    <path d='M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z'></path>
                  </svg>
                </button>
              </div>
              <p className='text-gray-600 text-sm text-end'>Sports</p>
            </div>
          </div>
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src='src\assets\sports\sports1.png'
              alt='Ardor Avaitor'
              className='w-32 h-20 xs:w-28 xs:h-16 sm:w-32 sm:h-20 py-2 object-cover hover:scale-110 transition'
            />
          </div>
        </a>
        <a
          className='flex flex-col    px-4 py-2 rounded-xl  bg-black/[.06] cursor-pointer gap-3 '
          href='/product/887cdd99-1503-4527-aef4-88c521126a47'
        >
          <div className='flex justify-between gap-3 xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between'>
            <div>
              <h1 className='text-xl xs:text-base sm:text-xl font-bold'>
                Caper Active
              </h1>
            </div>
            <div className='flex flex-col items-start '>
              <div className='flex items-center justify-between'>
                <h1 className=' text-lg xs:text-base sm:text-lg font-bold'>
                  ₹1299
                </h1>
                <button className='p-0.5 custom-bg-gradient rounded-md ms-2'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    t='1551322312294'
                    viewBox='0 0 1024 1024'
                    version='1.1'
                    className='text-white font-bold text-sm'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <defs></defs>
                    <path d='M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z'></path>
                    <path d='M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z'></path>
                  </svg>
                </button>
              </div>
              <p className='text-gray-600 text-sm text-end'>Sports</p>
            </div>
          </div>
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src='src\assets\sports\sports2.png'
              alt='Caper Active'
              className='w-32 h-20 xs:w-28 xs:h-16 sm:w-32 sm:h-20 py-2 object-cover hover:scale-110 transition'
            />
          </div>
        </a>
        <a
          className='flex flex-col    px-4 py-2 rounded-xl  bg-black/[.06] cursor-pointer gap-3 '
          href='/product/dc2b2495-eb6c-4889-a6f7-3c8853a01ba2'
        >
          <div className='flex justify-between gap-3 xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between'>
            <div>
              <h1 className='text-xl xs:text-base sm:text-xl font-bold'>
                Alder Street
              </h1>
            </div>
            <div className='flex flex-col items-start '>
              <div className='flex items-center justify-between'>
                <h1 className=' text-lg xs:text-base sm:text-lg font-bold'>
                  ₹2999
                </h1>
                <button className='p-0.5 custom-bg-gradient rounded-md ms-2'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    t='1551322312294'
                    viewBox='0 0 1024 1024'
                    version='1.1'
                    className='text-white font-bold text-sm'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <defs></defs>
                    <path d='M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z'></path>
                    <path d='M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z'></path>
                  </svg>
                </button>
              </div>
              <p className='text-gray-600 text-sm text-end'>Sports</p>
            </div>
          </div>
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src='src\assets\sports\sports3.png'
              alt='Alder Street'
              className='w-32 h-20 xs:w-28 xs:h-16 sm:w-32 sm:h-20 py-2 object-cover hover:scale-110 transition'
            />
          </div>
        </a>
        <a
          className='flex flex-col    px-4 py-2 rounded-xl  bg-black/[.06] cursor-pointer gap-3 '
          href='/product/61bf1558-94c3-4494-a522-0aad46ed5334'
        >
          <div className='flex justify-between gap-3 xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between'>
            <div>
              <h1 className='text-xl xs:text-base sm:text-xl font-bold'>
                Black boss
              </h1>
            </div>
            <div className='flex flex-col items-start '>
              <div className='flex items-center justify-between'>
                <h1 className=' text-lg xs:text-base sm:text-lg font-bold'>
                  ₹2999
                </h1>
                <button className='p-0.5 custom-bg-gradient rounded-md ms-2'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    t='1551322312294'
                    viewBox='0 0 1024 1024'
                    version='1.1'
                    className='text-white font-bold text-sm'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <defs></defs>
                    <path d='M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z'></path>
                    <path d='M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z'></path>
                  </svg>
                </button>
              </div>
              <p className='text-gray-600 text-sm text-end'>Sunglasses</p>
            </div>
          </div>
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src='src\assets\sunglasses\sun5.png'
              alt='Black boss'
              className='w-32 h-20 xs:w-28 xs:h-16 sm:w-32 sm:h-20 py-2 object-cover hover:scale-110 transition'
            />
          </div>
        </a>
        <a
          className='flex flex-col    px-4 py-2 rounded-xl  bg-black/[.06] cursor-pointer gap-3 '
          href='/product/6c800171-bea6-4cb2-811d-7c419a59dcb8'
        >
          <div className='flex justify-between gap-3 xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between'>
            <div>
              <h1 className='text-xl xs:text-base sm:text-xl font-bold'>
                Hip Hop Candy
              </h1>
            </div>
            <div className='flex flex-col items-start '>
              <div className='flex items-center justify-between'>
                <h1 className=' text-lg xs:text-base sm:text-lg font-bold'>
                  ₹1499
                </h1>
                <button className='p-0.5 custom-bg-gradient rounded-md ms-2'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    t='1551322312294'
                    viewBox='0 0 1024 1024'
                    version='1.1'
                    className='text-white font-bold text-sm'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <defs></defs>
                    <path d='M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z'></path>
                    <path d='M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z'></path>
                  </svg>
                </button>
              </div>
              <p className='text-gray-600 text-sm text-end'>Sports</p>
            </div>
          </div>
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src='src\assets\sports\sports7.png'
              alt='Hip Hop Candy'
              className='w-32 h-20 xs:w-28 xs:h-16 sm:w-32 sm:h-20 py-2 object-cover hover:scale-110 transition'
            />
          </div>
        </a>
        <a
          className='flex flex-col    px-4 py-2 rounded-xl  bg-black/[.06] cursor-pointer gap-3 '
          href='/product/9ca598d9-7cb5-4fb0-8455-b43028f9cb96'
        >
          <div className='flex justify-between gap-3 xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between'>
            <div>
              <h1 className='text-xl xs:text-base sm:text-xl font-bold'>
                Punk Cut Out
              </h1>
            </div>
            <div className='flex flex-col items-start '>
              <div className='flex items-center justify-between'>
                <h1 className=' text-lg xs:text-base sm:text-lg font-bold'>
                  ₹2999
                </h1>
                <button className='p-0.5 custom-bg-gradient rounded-md ms-2'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    t='1551322312294'
                    viewBox='0 0 1024 1024'
                    version='1.1'
                    className='text-white font-bold text-sm'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <defs></defs>
                    <path d='M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z'></path>
                    <path d='M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z'></path>
                  </svg>
                </button>
              </div>
              <p className='text-gray-600 text-sm text-end'>Sports</p>
            </div>
          </div>
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src='src\assets\sports\sports8.png'
              alt='Punk Cut Out'
              className='w-32 h-20 xs:w-28 xs:h-16 sm:w-32 sm:h-20 py-2 object-cover hover:scale-110 transition'
            />
          </div>
        </a>
        <a
          className='flex flex-col    px-4 py-2 rounded-xl  bg-black/[.06] cursor-pointer gap-3 '
          href='/product/51db0e19-b0e0-4d6e-bce0-739f1bd37ba7'
        >
          <div className='flex justify-between gap-3 xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between'>
            <div>
              <h1 className='text-xl xs:text-base sm:text-xl font-bold'>
                Rounded Gold
              </h1>
            </div>
            <div className='flex flex-col items-start '>
              <div className='flex items-center justify-between'>
                <h1 className=' text-lg xs:text-base sm:text-lg font-bold'>
                  ₹1299
                </h1>
                <button className='p-0.5 custom-bg-gradient rounded-md ms-2'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    t='1551322312294'
                    viewBox='0 0 1024 1024'
                    version='1.1'
                    className='text-white font-bold text-sm'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <defs></defs>
                    <path d='M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z'></path>
                    <path d='M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z'></path>
                  </svg>
                </button>
              </div>
              <p className='text-gray-600 text-sm text-end'>Vision</p>
            </div>
          </div>
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src='src\assets\vision\vision2.png'
              alt='Rounded Gold'
              className='w-32 h-20 xs:w-28 xs:h-16 sm:w-32 sm:h-20 py-2 object-cover hover:scale-110 transition'
            />
          </div>
        </a>
      </section>
      <h1 className='text-3xl md:text-4xl  break-words text-center mt-10'>
        Categories
      </h1>
      <section className='grid  grid-cols-1  md:grid-cols-3    gap-4  py-4 mt-1'>
        <section className=' flex flex-col items-center rounded-xl  bg-black/[.06] cursor-pointer gap-3 relative overflow-hidden  categoryContainer'>
          <img
            src='src\assets\categories\sportsmod1.jpg'
            alt='vision'
            className='rounded-xl h-full w-full object-cover transition-all delay-75 ease-out'
          />
          <div
            className='
flex flex-col w-full h-full justify-center items-center
transition-all delay-75 absolute left-0 right-0 bottom-0 top-0 bg-black/[0.3] rounded-xl'
          >
            <h1 className='text-4xl xs:text-6xl sm:text-8xl lg:text-6xl font-extrabold capitalize text-[--theme-color] shadow-sm p-3 break-all'>
              vision
            </h1>
          </div>
        </section>
        <section className=' flex flex-col items-center rounded-xl  bg-black/[.06] cursor-pointer gap-3 relative overflow-hidden  categoryContainer'>
          <img
            src='src\assets\categories\sunmod1.jpg'
            alt='sports'
            className='rounded-xl h-full w-full object-cover transition-all delay-75 ease-out'
          />
          <div
            className='
flex flex-col w-full h-full justify-center items-center
transition-all delay-75 absolute left-0 right-0 bottom-0 top-0 bg-black/[0.3] rounded-xl'
          >
            <h1 className='text-4xl xs:text-6xl sm:text-8xl lg:text-6xl font-extrabold capitalize text-[--theme-color] shadow-sm p-3 break-all'>
              sports
            </h1>
          </div>
        </section>
        <section className=' flex flex-col items-center rounded-xl  bg-black/[.06] cursor-pointer gap-3 relative overflow-hidden  categoryContainer'>
          <img
            src='src\assets\categories\visionmod1.jpg'
            alt='sunglasses'
            className='rounded-xl h-full w-full object-cover transition-all delay-75 ease-out'
          />
          <div
            className='
flex flex-col w-full h-full justify-center items-center
transition-all delay-75 absolute left-0 right-0 bottom-0 top-0 bg-black/[0.3] rounded-xl'
          >
            <h1 className='text-4xl xs:text-6xl sm:text-8xl lg:text-6xl font-extrabold capitalize text-[--theme-color] shadow-sm p-3 break-all'>
              sunglasses
            </h1>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Homepage;
