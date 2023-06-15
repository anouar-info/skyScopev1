
import "./astronomyHeader.css"
import AstronomySlide from '../astronomySlide/AstronomySlide';
function AstronomyHeader(){
  const cards = [
    {
      title: 'The Northern Lights',
      description: 'Learn about the stunning Aurora Borealis',
      img: 'northern-lights.jpg'
    },
    {
      title: 'The Hubble Telescope',
      description: 'Discover the history and discoveries of the Hubble Space Telescope',
      img: 'hubble-telescope.jpg'
    },
    {
      title: 'The Milky Way Galaxy',
      description: 'Explore the beauty and mysteries of our galaxy',
      img: 'milky-way.jpg'
    },
    {
      title: 'The Northern Lights',
      description: 'Learn about the stunning Aurora Borealis',
      img: 'northern-lights.jpg'
    },
    {
      title: 'The Hubble Telescope',
      description: 'Discover the history and discoveries of the Hubble Space Telescope',
      img: 'hubble-telescope.jpg'
    },
    {
      title: 'The Milky Way Galaxy',
      description: 'Explore the beauty and mysteries of our galaxy',
      img: 'milky-way.jpg'
    },{
      title: 'The Northern Lights',
      description: 'Learn about the stunning Aurora Borealis',
      img: 'northern-lights.jpg'
    },
    {
      title: 'The Hubble Telescope',
      description: 'Discover the history and discoveries of the Hubble Space Telescope',
      img: 'hubble-telescope.jpg'
    },
    {
      title: 'The Milky Way Galaxy',
      description: 'Explore the beauty and mysteries of our galaxy',
      img: 'milky-way.jpg'
    },
    {
      title: 'The Milky Way Galaxy',
      description: 'Explore the beauty and mysteries of our galaxy',
      img: 'milky-way.jpg'
    }
  ];
    return(
    <div>
       <AstronomySlide title="phenomena" description="{description} {description} {description} {description} {description} {description} {description} {description} {description} {description} " cards={cards} />
    </div>
    )
}


export default AstronomyHeader;