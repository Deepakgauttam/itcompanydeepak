import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function UpdateBlogPost() {
  const { id } = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    image: '',
    link: ''
  });

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blog-posts/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching blog post data:', error);
      }
    };

    fetchBlogPost();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/blog-posts/${id}`, formData);
      history.push('/blog');
    } catch (error) {
      console.error('Error updating blog post:', error);
    }
  };

  return (
    <div>
      <h1>Update Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Summary:
          <input type="text" name="summary" value={formData.summary} onChange={handleChange} />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </label>
        <br />
        <label>
          Link:
          <input type="text" name="link" value={formData.link} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
}

export default UpdateBlogPost;
