import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DeletePost() {
  const { id } = useParams();

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/api/blog-posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Redirect or update the UI after successful post deletion
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete Post</button>
  );
}

export default DeletePost;
