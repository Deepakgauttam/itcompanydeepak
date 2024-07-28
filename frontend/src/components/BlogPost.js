import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Blog.css';
import Footer from './Footer';

function BlogPost() {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(`/api/blog-posts/${id}`);
        setBlogPost(response.data);
      } catch (error) {
        console.error('Error fetching blog post data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div>
      <div className="blog-post">
        <h1>{blogPost.title}</h1>
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="blog-post-image"
        />
        <p>{blogPost.summary}</p>
        <div>{blogPost.content}</div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPost;
