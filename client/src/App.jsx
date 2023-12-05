import "./App.css";
import "./custom.css";
function App() {
  return (
    <>
      <div className="px-[4%] md:px-[10%] .pb-2">
        <nav className="flex flex-col sm:flex-row py-3 max-w-screen mb-3 fixed left-0 right-0 px-[4%] md:px-[10%] bg-[--theme-color]  z-10 transition delay-75 ease-in-out">
          <div className="flex justify-between w-full items-center">
            <section className="relative flex items-center">
              <a href="/profile">
                <img
                  className="rounded-full border-2  bg-yellow-300 me-3 hover:bg-yellow-500 cursor-pointer"
                  src="src\assets\defaultUser.png"
                  alt="userProfileImage"
                  width="40"
                />
              </a>
              <a href="/">
                <div className="font-monoton text-3xl hover:text-red-800 cursor-pointer text-center transition">
                  eyesome
                </div>
              </a>
            </section>
            <div className="hidden  sm:block sm:w-1/3 relative">
              <form className="flex items-center bg-black/[0.075] px-3 rounded-full text-sm transition">
                <input
                  className="w-full py-2 px-3 bg-transparent focus:outline-none"
                  type="search"
                  placeholder="Search Glasses"
                  value=""
                />
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.1"
                  id="search"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z"
                    ></path>
                  </g>
                </svg>
              </form>
            </div>
            <section className="flex items-center">
              <a
                className="mx-2 px-3 py-1 shadow-sm rounded-md text-white bg-yellow-700 text-sm hover:bg-yellow-800 transition"
                href="/products"
              >
                <span className="hidden xs:block">Explore</span>{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="xs:hidden"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"></path>
                </svg>
              </a>
              <ul className=" hidden md:flex justify-between text-2xl ps-1">
                <li className="relative bg-gray-200  p-2 rounded-full hover:bg-yellow-800 hover:text-white cursor-pointer mx-2 transition shadow-sm">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
                    ></path>
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
                  </svg>
                </li>
                <li className="relative bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-800 cursor-pointer mx-2 transition shadow-sm">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    ></path>
                  </svg>
                </li>
              </ul>
              <section className="md:hidden cursor-pointer relative">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 15 15"
                  className="text-lg"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </section>
            </section>
          </div>
        </nav>
        <div className="pt-32 sm:pt-20 min-h-[80vh]">
          <main className=" flex justify-between items-center py-1 mb-5  relative">
            <section className="max-w-xl mx-auto sm:mx-0  w-full py-2  lg:w-1/3">
              <h1 className="text-6xl  sm:text-7xl lg:text-8xl font-semibold  py-3 w-full ">
                Glasses &amp; Lens
              </h1>
              <p className="py-3 text-md  text-gray-600">
                Buy the best high-quality sunglasses from us.
                <br />
                More than 100 types of assortment.
              </p>
              <section className="flex items-center">
                <button className="btn-primary text-sm md:text-base">
                  Start Shopping
                </button>

                <button className="p-3 flex items-center">
                  <span className="mx-2 text-sm md:text-base">
                    Explore More
                  </span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="text-lg"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768L5.854 5.146z"
                    ></path>
                  </svg>
                </button>
              </section>
            </section>
            <section className="hidden w-1/2 lg:flex justify-end">
              <img
                src="src\assets\bannerImg.png"
                alt="bannerImg"
                className="w-2/3 h-full"
              />
            </section>
          </main>
          <section className="grid  grid-cols-1 xs:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-4  py-4 mt-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl  break-words flex items-center ">
              Trending Products
            </h1>
            <a
              className="flex flex-col    px-4 py-2 rounded-xl  bg-black/[.06] cursor-pointer gap-3 "
              href="/product/3d7e9c33-0080-4bd2-b2bf-56552da31e35"
            >
              <div className="flex justify-between gap-3 xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between">
                <div>
                  <h1 className="text-xl xs:text-base sm:text-xl font-bold">
                    Ardor Avaitor
                  </h1>
                </div>
                <div className="flex flex-col items-start ">
                  <div className="flex items-center justify-between">
                    <h1 className=" text-lg xs:text-base sm:text-lg font-bold">
                      ₹1999
                    </h1>
                    <button className="p-0.5 custom-bg-gradient rounded-md ms-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        t="1551322312294"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        className="text-white font-bold text-sm"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs></defs>
                        <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                        <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm text-end">Sports</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src="src\assets\sports\sports1.png"
                  alt="Ardor Avaitor"
                  className="w-32 h-20 xs:w-28 xs:h-16 sm:w-32 sm:h-20 py-2 object-cover hover:scale-110 transition"
                />
              </div>
            </a>
            <a
              className="flex flex-col    px-4 py-2 rounded-xl  bg-black/[.06] cursor-pointer gap-3 "
              href="/product/887cdd99-1503-4527-aef4-88c521126a47"
            >
              <div className="flex justify-between gap-3 xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between">
                <div>
                  <h1 className="text-xl xs:text-base sm:text-xl font-bold">
                    Caper Active
                  </h1>
                </div>
                <div className="flex flex-col items-start ">
                  <div className="flex items-center justify-between">
                    <h1 className=" text-lg xs:text-base sm:text-lg font-bold">
                      ₹1299
                    </h1>
                    <button className="p-0.5 custom-bg-gradient rounded-md ms-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        t="1551322312294"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        className="text-white font-bold text-sm"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs></defs>
                        <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                        <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm text-end">Sports</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src="src\assets\sports\sports2.png"
                  alt="Caper Active"
                  className="w-32 h-20 xs:w-28 xs:h-16 sm:w-32 sm:h-20 py-2 object-cover hover:scale-110 transition"
                />
              </div>
            </a>
            <a
              className="flex flex-col    px-4 py-2 rounded-xl  bg-black/[.06] cursor-pointer gap-3 "
              href="/product/dc2b2495-eb6c-4889-a6f7-3c8853a01ba2"
            >
              <div className="flex justify-between gap-3 xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between">
                <div>
                  <h1 className="text-xl xs:text-base sm:text-xl font-bold">
                    Alder Street
                  </h1>
                </div>
                <div className="flex flex-col items-start ">
                  <div className="flex items-center justify-between">
                    <h1 className=" text-lg xs:text-base sm:text-lg font-bold">
                      ₹2999
                    </h1>
                    <button className="p-0.5 custom-bg-gradient rounded-md ms-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        t="1551322312294"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        className="text-white font-bold text-sm"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs></defs>
                        <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                        <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm text-end">Sports</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src="src\assets\sports\sports3.png"
                  alt="Alder Street"
                  className="w-32 h-20 xs:w-28 xs:h-16 sm:w-32 sm:h-20 py-2 object-cover hover:scale-110 transition"
                />
              </div>
            </a>
            <a
              className="flex flex-col    px-4 py-2 rounded-xl  bg-black/[.06] cursor-pointer gap-3 "
              href="/product/61bf1558-94c3-4494-a522-0aad46ed5334"
            >
              <div className="flex justify-between gap-3 xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between">
                <div>
                  <h1 className="text-xl xs:text-base sm:text-xl font-bold">
                    Black boss
                  </h1>
                </div>
                <div className="flex flex-col items-start ">
                  <div className="flex items-center justify-between">
                    <h1 className=" text-lg xs:text-base sm:text-lg font-bold">
                      ₹2999
                    </h1>
                    <button className="p-0.5 custom-bg-gradient rounded-md ms-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        t="1551322312294"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        className="text-white font-bold text-sm"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs></defs>
                        <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                        <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm text-end">Sunglasses</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src="src\assets\sunglasses\sun5.png"
                  alt="Black boss"
                  className="w-32 h-20 xs:w-28 xs:h-16 sm:w-32 sm:h-20 py-2 object-cover hover:scale-110 transition"
                />
              </div>
            </a>
            <a
              className="flex flex-col    px-4 py-2 rounded-xl  bg-black/[.06] cursor-pointer gap-3 "
              href="/product/6c800171-bea6-4cb2-811d-7c419a59dcb8"
            >
              <div className="flex justify-between gap-3 xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between">
                <div>
                  <h1 className="text-xl xs:text-base sm:text-xl font-bold">
                    Hip Hop Candy
                  </h1>
                </div>
                <div className="flex flex-col items-start ">
                  <div className="flex items-center justify-between">
                    <h1 className=" text-lg xs:text-base sm:text-lg font-bold">
                      ₹1499
                    </h1>
                    <button className="p-0.5 custom-bg-gradient rounded-md ms-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        t="1551322312294"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        className="text-white font-bold text-sm"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs></defs>
                        <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                        <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm text-end">Sports</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src="src\assets\sports\sports7.png"
                  alt="Hip Hop Candy"
                  className="w-32 h-20 xs:w-28 xs:h-16 sm:w-32 sm:h-20 py-2 object-cover hover:scale-110 transition"
                />
              </div>
            </a>
            <a
              className="flex flex-col    px-4 py-2 rounded-xl  bg-black/[.06] cursor-pointer gap-3 "
              href="/product/9ca598d9-7cb5-4fb0-8455-b43028f9cb96"
            >
              <div className="flex justify-between gap-3 xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between">
                <div>
                  <h1 className="text-xl xs:text-base sm:text-xl font-bold">
                    Punk Cut Out
                  </h1>
                </div>
                <div className="flex flex-col items-start ">
                  <div className="flex items-center justify-between">
                    <h1 className=" text-lg xs:text-base sm:text-lg font-bold">
                      ₹2999
                    </h1>
                    <button className="p-0.5 custom-bg-gradient rounded-md ms-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        t="1551322312294"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        className="text-white font-bold text-sm"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs></defs>
                        <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                        <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm text-end">Sports</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src="src\assets\sports\sports8.png"
                  alt="Punk Cut Out"
                  className="w-32 h-20 xs:w-28 xs:h-16 sm:w-32 sm:h-20 py-2 object-cover hover:scale-110 transition"
                />
              </div>
            </a>
            <a
              className="flex flex-col    px-4 py-2 rounded-xl  bg-black/[.06] cursor-pointer gap-3 "
              href="/product/51db0e19-b0e0-4d6e-bce0-739f1bd37ba7"
            >
              <div className="flex justify-between gap-3 xs:flex-wrap xs:justify-center sm:flex-nowrap sm:justify-between">
                <div>
                  <h1 className="text-xl xs:text-base sm:text-xl font-bold">
                    Rounded Gold
                  </h1>
                </div>
                <div className="flex flex-col items-start ">
                  <div className="flex items-center justify-between">
                    <h1 className=" text-lg xs:text-base sm:text-lg font-bold">
                      ₹1299
                    </h1>
                    <button className="p-0.5 custom-bg-gradient rounded-md ms-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        t="1551322312294"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        className="text-white font-bold text-sm"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs></defs>
                        <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                        <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm text-end">Vision</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src="src\assets\vision\vision2.png"
                  alt="Rounded Gold"
                  className="w-32 h-20 xs:w-28 xs:h-16 sm:w-32 sm:h-20 py-2 object-cover hover:scale-110 transition"
                />
              </div>
            </a>
          </section>
          <h1 className="text-3xl md:text-4xl  break-words text-center mt-10">
            Categories
          </h1>
          <section className="grid  grid-cols-1  md:grid-cols-3    gap-4  py-4 mt-1">
            <section className=" flex flex-col items-center rounded-xl  bg-black/[.06] cursor-pointer gap-3 relative overflow-hidden  categoryContainer">
              <img
                src="src\assets\categories\sportsmod1.jpg"
                alt="vision"
                className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
              />
              <div
                className="
 flex flex-col w-full h-full justify-center items-center
 transition-all delay-75 absolute left-0 right-0 bottom-0 top-0 bg-black/[0.3] rounded-xl"
              >
                <h1 className="text-4xl xs:text-6xl sm:text-8xl lg:text-6xl font-extrabold capitalize text-[--theme-color] shadow-sm p-3 break-all">
                  vision
                </h1>
              </div>
            </section>
            <section className=" flex flex-col items-center rounded-xl  bg-black/[.06] cursor-pointer gap-3 relative overflow-hidden  categoryContainer">
              <img
                src="src\assets\categories\sunmod1.jpg"
                alt="sports"
                className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
              />
              <div
                className="
 flex flex-col w-full h-full justify-center items-center
 transition-all delay-75 absolute left-0 right-0 bottom-0 top-0 bg-black/[0.3] rounded-xl"
              >
                <h1 className="text-4xl xs:text-6xl sm:text-8xl lg:text-6xl font-extrabold capitalize text-[--theme-color] shadow-sm p-3 break-all">
                  sports
                </h1>
              </div>
            </section>
            <section className=" flex flex-col items-center rounded-xl  bg-black/[.06] cursor-pointer gap-3 relative overflow-hidden  categoryContainer">
              <img
                src="src\assets\categories\visionmod1.jpg"
                alt="sunglasses"
                className="rounded-xl h-full w-full object-cover transition-all delay-75 ease-out"
              />
              <div
                className="
 flex flex-col w-full h-full justify-center items-center
 transition-all delay-75 absolute left-0 right-0 bottom-0 top-0 bg-black/[0.3] rounded-xl"
              >
                <h1 className="text-4xl xs:text-6xl sm:text-8xl lg:text-6xl font-extrabold capitalize text-[--theme-color] shadow-sm p-3 break-all">
                  sunglasses
                </h1>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
