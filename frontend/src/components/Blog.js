import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Blog.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(`/api/blog-posts`);
        setBlogPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="blog">
        <div className="all-blog-post">
        <h1>Our Blog</h1>
        <p>Read our latest updates and articles.</p>
        </div>
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <div key={post._id} className="blog-post">
              <img
                src={post.image}
                alt={post.title}
                className="blog-post-image"
              />
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <Link to={`/api/blog/${post._id}`} className="read-more">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
