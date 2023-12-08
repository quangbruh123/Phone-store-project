import "../../App.css";
import "../../custom.css";

const Homepage = () => {
  return (
    <div className="px-[4%] md:px-[10%] pb-2">
      <div className="pt-32 sm:pt-20 min-h-[80vh]">
        <div className="md:min-h-[80vh] flex justify-center items-center pt-5 sm:pt-3 pb-2 relative">
          <main className="grid grid-rows-1 sm:grid-cols-2 gap-2 sm:gap-10 ">
            <section className="relative p-7 bg-black/[0.075]  flex items-center justify-center rounded-lg">
              <img
                src="/static/media/sports1.f986df729a29a685f835.png"
                alt=""
                className="w-full object-contain max-w-xs"
              />
            </section>
            <section className="p-7 px-10 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-3 sm:gap-5">
              <div className="flex flex-col gap-2">
                <h1 className=" text-2xl sm:text-4xl font-bold">
                  Ardor Avaitor
                </h1>
                <p className=" text-gray-600 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex items-center gap-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className=" text-yellow-400 mb-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 38.013c-22.458 0-66.472 110.3-84.64 123.502-18.17 13.2-136.674 20.975-143.614 42.334-6.94 21.358 84.362 97.303 91.302 118.662 6.94 21.36-22.286 136.465-4.116 149.665 18.17 13.2 118.61-50.164 141.068-50.164 22.458 0 122.9 63.365 141.068 50.164 18.17-13.2-11.056-128.306-4.116-149.665 6.94-21.36 98.242-97.304 91.302-118.663-6.94-21.36-125.444-29.134-143.613-42.335-18.168-13.2-62.182-123.502-84.64-123.502z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className=" text-yellow-400 mb-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 38.013c-22.458 0-66.472 110.3-84.64 123.502-18.17 13.2-136.674 20.975-143.614 42.334-6.94 21.358 84.362 97.303 91.302 118.662 6.94 21.36-22.286 136.465-4.116 149.665 18.17 13.2 118.61-50.164 141.068-50.164 22.458 0 122.9 63.365 141.068 50.164 18.17-13.2-11.056-128.306-4.116-149.665 6.94-21.36 98.242-97.304 91.302-118.663-6.94-21.36-125.444-29.134-143.613-42.335-18.168-13.2-62.182-123.502-84.64-123.502z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className=" text-yellow-400 mb-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 38.013c-22.458 0-66.472 110.3-84.64 123.502-18.17 13.2-136.674 20.975-143.614 42.334-6.94 21.358 84.362 97.303 91.302 118.662 6.94 21.36-22.286 136.465-4.116 149.665 18.17 13.2 118.61-50.164 141.068-50.164 22.458 0 122.9 63.365 141.068 50.164 18.17-13.2-11.056-128.306-4.116-149.665 6.94-21.36 98.242-97.304 91.302-118.663-6.94-21.36-125.444-29.134-143.613-42.335-18.168-13.2-62.182-123.502-84.64-123.502z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className=" text-yellow-400 mb-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 38.013c-22.458 0-66.472 110.3-84.64 123.502-18.17 13.2-136.674 20.975-143.614 42.334-6.94 21.358 84.362 97.303 91.302 118.662 6.94 21.36-22.286 136.465-4.116 149.665 18.17 13.2 118.61-50.164 141.068-50.164 22.458 0 122.9 63.365 141.068 50.164 18.17-13.2-11.056-128.306-4.116-149.665 6.94-21.36 98.242-97.304 91.302-118.663-6.94-21.36-125.444-29.134-143.613-42.335-18.168-13.2-62.182-123.502-84.64-123.502z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className=" text-yellow-400 mb-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 38.013c-22.458 0-66.472 110.3-84.64 123.502-18.17 13.2-136.674 20.975-143.614 42.334-6.94 21.358 84.362 97.303 91.302 118.662 6.94 21.36-22.286 136.465-4.116 149.665 18.17 13.2 118.61-50.164 141.068-50.164 22.458 0 122.9 63.365 141.068 50.164 18.17-13.2-11.056-128.306-4.116-149.665 6.94-21.36 98.242-97.304 91.302-118.663-6.94-21.36-125.444-29.134-143.613-42.335-18.168-13.2-62.182-123.502-84.64-123.502z"></path>
                  </svg>
                  <span className="text-xs text-gray-400">(4.5) Rating</span>
                </div>
              </div>
              <div className="flex flex-col gap-2  ">
                <h2 className="  text-lg font-semibold">About Product</h2>
                <ul className="flex gap-5">
                  <div>
                    <li>
                      <span className="text-gray-500 text-sm">Brand: </span>
                      Ray-Ban
                    </li>
                    <li>
                      <span className="text-gray-500 text-sm">Category: </span>
                      Sports
                    </li>
                  </div>
                  <div>
                    <li>
                      <span className="text-gray-500 text-sm">Gender: </span>Men
                    </li>
                    <li>
                      <span className="text-gray-500 text-sm">Heavy: </span>200g
                    </li>
                  </div>
                </ul>
              </div>
              <div className="flex gap-2 items-center pb-10 sm:pb-0">
                Price:
                <span className="ms-1 text-xl sm:text-2xl text-amber-600">
                  ₹1899
                </span>
                <span className="text-sm text-gray-600 line-through">
                  ₹1999
                </span>
              </div>
              <div className="w-full   flex gap-4 items-center   flex-wrap  ">
                <button className="btn-rounded-secondary flex items-center gap-2 text-sm disabled:cursor-not-allowed">
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
                  </svg>{" "}
                  Add to Bag
                </button>
                <button className="btn-rounded-primary rounded-full flex items-center gap-2 text-sm disabled:cursor-not-allowed">
                  {" "}
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
                  </svg>{" "}
                  <span>Wishlist Item</span>{" "}
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
