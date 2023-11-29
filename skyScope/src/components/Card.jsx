
import React from "react";
import PropTypes from 'prop-types';
function Card({  img, title, description }) {
  const divStyle = {
    backgroundColor:'#071643',
    borderColor:'#071643',
  };
  return (
    
      
<div className='m-4'>    
<div className=" flex flex-col items-center justify-center max-w-sm min-h-fit  p-4 bg-white border border-gray-200 rounded-lg shadow " style={divStyle}>
<a href="#">
<h5 className="mb-10 mt-4 hover:text-teal-600 text-4xl font-manrope  font-bold tracking-tight text-gray-700 dark:text-white">{title}</h5>
</a>
<a className='' href="#">
    <img className="rounded-full max-h-80  " src={img} alt="" />
</a>
<div className="p-5 flex flex-col justify-center items-center">
   
    <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">{description}</p>
    <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium text-md rounded-lg px-5 py-2 text-center mt-2">Learn More</button>

</div>
</div>
</div>


    
  );
}
Card.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Card;
