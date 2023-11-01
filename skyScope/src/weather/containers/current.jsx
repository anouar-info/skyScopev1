const current = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full text-white flex justify-between">
        <div className="flex flex-col flex-1">
          <div>
            <p className="font-light text-sm">Hi There!</p>
          </div>
          <div>
            <p className="mt-1 font-bold text-md">Mon, 15 June ,2023</p>
          </div>
        </div>
        <div>
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-56 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:placeholder:text-sm dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search City,..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-12 flex w-full items-start justify-start">
        {/* Current weather */}
        <div className="basis-1/2 flex flex-col justify-center items-start p-8 rounded-3xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-between text-center">
            <div className="flex flex-col justify-center">
          <div> 
        <div><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-32 h-32 p-6 dark:text-yellow-400 fill-current"
          >
            <path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
            <rect width="32" height="48" x="240" y="16"></rect>
            <rect width="32" height="48" x="240" y="448"></rect>
            <rect width="48" height="32" x="448" y="240"></rect>
            <rect width="48" height="32" x="16" y="240"></rect>
            <rect
              width="32"
              height="45.255"
              x="400"
              y="393.373"
              transform="rotate(-45 416 416)"
            ></rect>
            <rect
              width="32.001"
              height="45.255"
              x="80"
              y="73.373"
              transform="rotate(-45 96 96)"
            ></rect>
            <rect
              width="45.255"
              height="32"
              x="73.373"
              y="400"
              transform="rotate(-45.001 96.002 416.003)"
            ></rect>
            <rect
              width="45.255"
              height="32.001"
              x="393.373"
              y="80"
              transform="rotate(-45 416 96)"
            ></rect>
          </svg>
          </div> 
          <div className="text-center text-white font-light ">clearly sunny</div>
          </div>
            </div>
            <div>
            <div className="mb-2 text-3xl font-semibold">
            32°
            <span className="mx-1 font-normal">/</span>20°
          </div>
          <p className="dark:text-gray-400">Partly cloudy</p>
          </div>
          </div>
          
          
        </div>
        {/* Next day forecast of the  weather */}
        <div></div>
      </div>
    </div>
  );
};

export default current;
