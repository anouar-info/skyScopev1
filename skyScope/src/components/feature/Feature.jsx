import PropTypes from 'prop-types';
import "./feature.css"
function Feature({title,text,link}){
  
    if(title === "What is Astronomy"){
    return <div className="feature-astronomy">
    <div className="feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="feature-text">
      <p>{text}</p>
      <a href={"/"+link} className="more"><p >Learn more...</p></a>
    </div>
   
  </div>; }
    else{return <div className="feature">
      <div className="feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="feature-text">
        <p>{text}</p>
        <a href={"/"+link} className="more"><p>Learn more...</p></a>
      </div>
      
    </div>;
    }
    
}
Feature.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Feature;