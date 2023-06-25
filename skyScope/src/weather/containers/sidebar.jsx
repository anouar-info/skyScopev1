
import { logo } from "../../assets";
const sidebar = () => {
  const divStyle = {
    backgroundColor:'#071643',
    borderColor:'#071643',
  };
  return (
   
 
    <div className="max-w-6xl mx-auto section__margin">
      
      <nav className="border-gray-200">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="logo">
        <a href="/#home">
          <img src={logo} alt="logo" />
        </a>
      </div>
          <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
          <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
            <ul className="flex-col  md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a href="/" className="text-white font-medium text-lg leading-6 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent cursor-pointer md:border-0 block pl-3 pr-4 py-2 md:hover:text-cyan-500 md:p-0">Home</a>
              </li>
              <li>
                <a href="/" className="text-white font-medium text-lg leading-6 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent cursor-pointer md:border-0 block pl-3 pr-4 py-2 md:hover:text-cyan-500 md:p-0">Astronomy</a>
              </li>
             
              <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="text-white text-lg leading-6 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent cursor-pointer md:border-0 pl-3 pr-4 py-2 md:hover:text-cyan-500 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">Filieres<svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                
                <div id="dropdownNavbar" style={divStyle} className="hidden  text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                  <ul className="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="weather/current"  className="font-medium text-lg leading-6 hover:bg-gray-700 text-white block px-4 py-2">Current</a>
                    </li>
                    <li>
                      <a href="weather/forecast"  className="font-medium text-lg leading-6 hover:bg-gray-700 text-white block px-4 py-2">Forecast</a>
                    </li>
                    <li>
                      <a href="weather/articles"  className="font-medium text-lg leading-6 hover:bg-gray-700 text-white block px-4 py-2">Articles</a>
                    </li>
                  </ul>
                </div>
              </li>
           
              <li>
              <a href="/" className="text-white font-medium text-lg leading-6 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent cursor-pointer md:border-0 block pl-3 pr-4 py-2 md:hover:text-cyan-500 md:p-0">sky map</a>
            </li>
            <li>
              <a href="/" className="text-white font-medium text-lg leading-6 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent cursor-pointer md:border-0 block pl-3 pr-4 py-2 md:hover:text-cyan-500 md:p-0">Blog</a>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
 
    
    
  )
}

export default sidebar;