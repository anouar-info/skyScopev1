import React, { useState, useEffect } from 'react';
import Article from '../../components/article/Article';
import { generateClient } from 'aws-amplify/api';
import { listArticles } from '../../graphql/queries';
import * as mutations from '../../graphql/mutations'; // Make sure to adjust the path
import { blog01, blog02 } from './imports';
import './blog.css';
import { Amplify } from 'aws-amplify';

Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://sodsmeyxwnexvnfbkd5e2zgnpu.appsync-api.eu-west-3.amazonaws.com/graphql',
      region: 'eu-west-3',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-4fc7k5qkwrdqtew2ygkm4rgqt4'
    }
  }
});
const client = generateClient();

function Blog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await client.graphql({ query: listArticles });
      const articles = response.data.listArticles.items;
      console.log('GraphQL response:', response);
      console.log('Fetched articles:', articles);
      
      setArticles(articles);
    } catch (error) {
      console.log('error on fetching articles', error);
    }
  };

  const addArticle = async () => {
    try {
      const articleDetails = {
        title: 'New Article',
        body: 'This is the body of the new article',
        owner: 'username', // Set the owner as needed
        dateCreated: new Date().toISOString() // Set the dateCreated using the current timestamp
      };

      const newArticle = await client.graphql({
        query: mutations.createArticle,
        variables: { input: articleDetails }
      });

      console.log('New article added:', newArticle.data.createArticle);
      // Optionally, you can fetch the updated list of articles after adding a new one
      fetchArticles();
    } catch (error) {
      console.error('Error adding new article', error);
    }
  };

  return (
    <div className="blog section__padding" id="blog">
      <div className="blog-heading">
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className="blog-container">
        <div className="blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 26, 2021" text="Exploring the mysteries of deep space: A beginner's guide" />
          
        </div>
        <div className="blog-container_groupB">
        {articles.map((article) => (
          console.log("first loop  : ",article.body)
        ))}
          {articles.map((article) => (
            <Article imgUrl={blog02} date={article.createdAt} text={article.title} key={article.id}   />
          ))}
          </div>
      </div>
      <button onClick={addArticle}>Add New Article</button>
    </div>
  );
}

export default Blog;
