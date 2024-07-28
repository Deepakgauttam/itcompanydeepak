import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`/api/blog-posts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { title, summary, content, image } = response.data;
        setTitle(title);
        setSummary(summary);
        setContent(content);
        setImage(image);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put(`/api/blog-posts/${id}`, { title, summary, content, image }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Redirect or update the UI after successful post update
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input type="text" value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Summary" required />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" required />
      <button type="submit">Update Post</button>
    </form>
  );
}

export default EditPost;
