import PropTypes from 'prop-types';
import "./section.css"
const Section = ({logo,title,text}) => {
  return (
    <div className="section">
    <div className="section-logo">
      <img src={logo} alt="logo unavailable"/>
    </div>
    <div className="section-content">
        <div className="section-title">
          <a href="#weather"><h1>{title}</h1></a>
        </div>
        <div className="section-text">
            <p>{text}</p>
        </div>
    </div>
    </div>
  )
}
Section.propTypes = {
  logo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};


export default Section;