
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="blog section__padding" id="blog">
    <div className="blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="blog-container">
      <div className="blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="Exploring the mysteries of deep space: A beginner's guide" />
      </div>
      <div className="blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Unleashing the secrets of the universe: The top 10 astronomical events of the year" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="The impact of climate change on the world's weather patterns" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="From stars to planets: Understanding the formation of the solar system" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="The fascinating history of weather forecasting: How we learned to predict the future" />
      </div>
    </div>
  </div>
);

export default Blog;
